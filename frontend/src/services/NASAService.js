import axios from 'axios';

const API_KEY = 'fHCMuT8DH6AsEOMpcITm7ZUGESMhuDVg54DoLxM8';
const BaseURL = 'https://api.nasa.gov';

const getMarstRoverPhotos = async (earth_date) => {
  const response = await axios.get(
    `${BaseURL}/mars-photos/api/v1/rovers/curiosity/photos`,
    {
      params: {
        earth_date: earth_date,
        api_key: API_KEY,
      },
    }
  );
  return response.data.photos;
};

export default { getMarstRoverPhotos };
