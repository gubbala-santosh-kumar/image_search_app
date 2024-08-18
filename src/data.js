import axios from 'axios';

const API_KEY = '45486521-fd7e26563e2899abc97d9ede7';
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