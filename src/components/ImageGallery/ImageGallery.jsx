import scss from './ImageGallery.module.scss';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ data }) => {
  console.log(data);
  return (
    <ul className={scss.ImageGallery}>
      <ImageGalleryItem data={data} />
    </ul>
  );
};

export default ImageGallery;
