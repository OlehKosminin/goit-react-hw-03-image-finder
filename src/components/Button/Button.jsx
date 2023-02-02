import scss from './Button.module.scss';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ incrementPage }) => {
  return (
    <>
      <button className={scss.Button} onClick={incrementPage}>
        Load More
      </button>
    </>
  );
};

export default ButtonLoadMore;

ButtonLoadMore.propTypes = {
  loadMore: PropTypes.func,
};
