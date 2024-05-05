import { useEffect, useState } from 'react';
import NASAService from '../services/NASAService';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import HomeBackgroundVideo from '../components/HomeBackgroundVideo';

export default function PODPage() {
  const [pictureOfTheDay, setPictureOfTheDay] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPictureOfTheDay = async () => {
      try {
        setIsLoading(true);
        const picture = await NASAService.getPictureOfTheDay();
        setPictureOfTheDay(picture);
      } catch (error) {
        console.error('Failed to fetch picture of the day:', error);
        setError(
          'Failed to load the picture of the day. Please try again later.'
        );
      }
      setIsLoading(false);
    };

    fetchPictureOfTheDay();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">
          <Loading />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center">
      <Navbar />
      <div className="max-w-4xl p-5 bg-white rounded-lg shadow-xl mt-40 mb-10 border-2 border-red-500">
        <h1 className="text-3xl font-bold text-gray-800 mb-3 text-center">
          {pictureOfTheDay?.title}
        </h1>
        {pictureOfTheDay?.url && (
          <div className="overflow-hidden rounded-lg shadow-lg mb-4">
            <img
              src={pictureOfTheDay.url}
              alt={pictureOfTheDay.title}
              className="w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        )}
        <p className="text-gray-700 text-lg">{pictureOfTheDay?.explanation}</p>
      </div>
    </div>
  );
}
