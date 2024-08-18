import axios from 'axios';

const API_KEY = 'YOUR API KEY';
const BASE_URL = 'https://pixabay.com/api/';

export const searchImages = (query) => {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      pretty: true,
    },
  });
};
