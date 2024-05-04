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

const getEarthImageryPhoto = async (lat, lon, date) => {
  try {
    const response = await fetch(
      `${BaseURL}/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&dim=0.15&api_key=${API_KEY}`
    );
    const data = await response.json();
    console.log('Earth Imagery :', data);
    return data;
  } catch (error) {
    console.error('Error occured when fetching earth imagery photos:', error);
    return {};
  }
};

export default { getMarstRoverPhotos, getEarthImageryPhoto };
