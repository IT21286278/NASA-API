// NASAService.test.js
import { describe, it, expect, beforeEach, vi } from 'vitest';
import axios from 'axios';
import NASAService from '../src/services/NASAService';

const API_KEY = 'fHCMuT8DH6AsEOMpcITm7ZUGESMhuDVg54DoLxM8';
const BaseURL = 'https://api.nasa.gov';

vi.mock('axios');

describe('NASAService', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('fetches Picture of the Day successfully from NASA API', async () => {
    const mockData = {
      data: {
        title: 'Astronomy Picture of the Day',
        url: 'http://example.com/apod.jpg',
      },
    };
    axios.get.mockResolvedValue(mockData);

    const response = await NASAService.getPictureOfTheDay();
    expect(response).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledWith(
      `${BaseURL}/planetary/apod?api_key=${API_KEY}`
    );
  });

  it('handles errors when fetching Picture of the Day fails', async () => {
    axios.get.mockRejectedValue(new Error('API call failed'));

    const response = await NASAService.getPictureOfTheDay();
    expect(response).toEqual({});
    expect(axios.get).toHaveBeenCalledWith(
      `${BaseURL}/planetary/apod?api_key=${API_KEY}`
    );
  });
});
