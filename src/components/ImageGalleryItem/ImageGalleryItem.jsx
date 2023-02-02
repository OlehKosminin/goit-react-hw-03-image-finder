import scss from './ImageGalleryItem.module.scss';
// import { Component } from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ data, onClickModal }) => {
  const Data = data;
  // console.log('Data: ', Data);

  return Data.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <li key={id} className={scss.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={largeImageURL}
          className={scss.ImageGalleryItemImage}
          onClick={() => onClickModal(largeImageURL)}
        />
      </li>
    );
  });
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  handleShowModal: PropTypes.func,
};
