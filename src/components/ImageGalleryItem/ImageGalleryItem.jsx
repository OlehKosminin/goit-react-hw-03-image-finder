import scss from './ImageGalleryItem.module.scss';
// import { Component } from 'react';

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
