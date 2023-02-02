import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const getImages = async (nextSeach, prevPage) => {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '31944414-e4d1ae47e500b71f7e7baa805',
      q: nextSeach,
      page: prevPage,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  console.log(data);
  return data;
};

export default getImages;
