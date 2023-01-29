import { Component } from 'react';
import axios from 'axios';
import ImageGallery from 'components/ImageGallery';

class ApiFetch extends Component {
  state = {
    searchData: null,
    searchName: null,
    page: 1,
    perPage: 12,
    error: null,
    status: 'idle',
  };

  newState = () => {
    this.setState({ searchName: this.props.searchName });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchName !== this.props.searchName) {
      console.log(this.props.searchName);
    }

    const prevState = prevProps.searchName;
    const newSearch = this.props.searchName;
    const page = this.state.page;
    const perPage = this.state.perPage;

    const myKey = `31944414-e4d1ae47e500b71f7e7baa805`;
    const mySerch = this.props.searchName;

    if (prevState !== newSearch) {
      this.setState({ status: 'pending' });
      axios
        .get(
          `https://pixabay.com/api/?&page=1&key=${myKey}&q=${mySerch}&image_type=photo&orientation=horizontal&per_page=${perPage}&page=${page}`
        )
        .then(({ data }) => {
          return data.hits;
        })
        .then(data => {
          console.log(data);
          this.setState({ status: 'resolved', searchData: { data } });
          this.incrementPage();
          return data;
        })
        .catch(error => {
          this.setState({ status: 'rejected', error });
        });
    }
  }

  incrementPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  render() {
    const { error, status, searchData } = this.state;

    if (status === 'idle') {
      return <div>Choise your picture</div>;
    }
    if (status === 'pending') {
      return <div>Loading...</div>;
    }
    if (status === 'rejected') {
      return <h1>{error}</h1>;
    }
    if (status === 'resolved') {
      return <ImageGallery data={searchData} />;
    }
  }
}

export default ApiFetch;
