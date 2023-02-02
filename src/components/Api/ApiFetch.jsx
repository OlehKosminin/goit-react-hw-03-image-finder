import { Component } from 'react';
import ImageGallery from 'components/ImageGallery';
import ButtonLoadMore from 'components/Button/Button';
import getImages from 'components/fetch/fetchImg';
import Notiflix from 'notiflix';
import Modal from 'components/Modal';

class ApiFetch extends Component {
  state = {
    searchData: [],
    searchName: null,
    page: 1,
    perPage: 12,
    error: null,
    status: 'idle',
    largeImageURL: null,
    showModal: false,
    imgAlt: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevStates = prevProps.searchName;
    const newSearch = this.props.searchName;

    if (prevStates !== newSearch) {
      this.setState({ searchName: null, searchData: [], page: 1 });
    }

    if (prevStates !== newSearch || this.state.page !== prevState.page) {
      // console.log(this.state.page !== prevState.page);
      this.setState({ status: 'pending' });

      try {
        const { searchData, searchName, page } = this.state;
        const data = await getImages(searchName, page);
        const { hits } = data;
        // this.setState({ status: 'pending' });
        await this.setState(() => ({
          searchData: [...searchData, ...hits],
          status: 'resolved',
        }));
      } catch (error) {
        this.setState({ error: error.message, status: 'rejected' });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  incrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  onClickModal = largeImageURL => {
    console.log(largeImageURL);
    this.setState({ showModal: true, largeImageURL, imgAlt: largeImageURL });
  };

  // handleShowModal = event => {
  //   const imgAlt = event.target.alt;
  //   const largeImageURL = event.target.srcset;
  //   this.setState({
  //     showModal: true,
  //     imgAlt: imgAlt,
  //     largeImageURL: largeImageURL,
  //   });
  // };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
      imgAlt: '',
      largeImageURL: '',
    });
  };

  render() {
    const { error, status, searchData, imgAlt, largeImageURL, showModal } =
      this.state;
    const { incrementPage, onClickModal, handleCloseModal } = this;

    return (
      <>
        {searchData.length > 0 && (
          <ImageGallery data={searchData} onClickModal={onClickModal} />
        )}
        {status === 'rejected' && <h1>{error}</h1>}
        {status === 'resolved' && (
          <ButtonLoadMore incrementPage={incrementPage} />
        )}
        {status === 'pending' && Notiflix.Loading.pulse()}
        {status !== 'pending' && Notiflix.Loading.remove()}
        {showModal && (
          <Modal
            imgAlt={imgAlt}
            imgLargeSrc={largeImageURL}
            onModalClose={handleCloseModal}
          />
        )}
      </>
    );
  }
}

export default ApiFetch;
