import scss from './ImageGallery.module.scss';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ data, onClickModal }) => {
  // console.log(data);
  return (
    <ul className={scss.ImageGallery}>
      <ImageGalleryItem data={data} onClickModal={onClickModal} />
    </ul>
  );
};

export default ImageGallery;
