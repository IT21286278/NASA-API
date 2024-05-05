import axios from 'axios';
const API_KEY = 'fHCMuT8DH6AsEOMpcITm7ZUGESMhuDVg54DoLxM8';
const BaseURL = 'https://api.nasa.gov';

const NASAService = {
  getMarsRoverPhotos: async (roverName, sol, page) => {
    try {
      const response = await axios.get(
        `${BaseURL}/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&page=${page}&api_key=${API_KEY}`
      );
      console.log('Rover photos:', response);
      return response.data.photos;
    } catch (error) {
      console.error('Error occured while fetching rover photos:', error);
      return [];
    }
  },

  getEarthImageryPhoto: async (lat, lon, date) => {
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
  },

  getPictureOfTheDay: async () => {
    try {
      const response = await axios.get(
        `${BaseURL}/planetary/apod?api_key=${API_KEY}`
      );
      console.log('Picture of the day:', response);
      return response.data;
    } catch (error) {
      console.error('Error occured while fetching picture of the day:', error);
      return {};
    }
  },
};

export default NASAService;
