import scss from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ data }) => {
  const Data = data.data;
  return Data.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <li key={id} className={scss.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={largeImageURL}
          className={scss.ImageGalleryItemImage}
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
