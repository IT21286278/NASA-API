import { useEffect, useState } from 'react';
import EarthImgBackgroundVideo from '../components/EarthImgBackgroundVideo';
import Navbar from '../components/Navbar';
import NASAService from '../services/NASAService';
import Loading from '../components/Loading';
import ContentNotFound from '../components/ContentNotFound';

export default function EarthImagery() {
  const [earthImagery, setEarthImagery] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoading, setImageLoading] = useState(true);
  const [date, setDate] = useState('2016-01-01');
  const [latitude, setLatitude] = useState(48.78);
  const [longitude, setLongitude] = useState(-75.33);

  useEffect(() => {
    const getEarthImagery = async () => {
      setIsLoading(true);
      setImageLoading(true);
      const imagery = await NASAService.getEarthImageryPhoto(
        latitude,
        longitude,
        date
      );
      setEarthImagery(imagery);
      setIsLoading(false);
    };
    getEarthImagery();
  }, [date, latitude, longitude]);

  const handleImageLoad = () => {
    console.log('Image loaded');
    setImageLoading(false);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleLatitudeChange = (event) => {
    const latitude = event.target.value;
    if (latitude >= -90 && latitude <= 90) {
      setLatitude(latitude);
    } else {
      alert('Latitude must be a number between -90 and 90.');
    }
  };

  const handleLongitudeChange = (event) => {
    const longitude = event.target.value;
    if (longitude >= -180 && longitude <= 180) {
      setLongitude(longitude);
    } else {
      alert('Longitude must be a number between -180 and 180.');
    }
  };

  return (
    <div className="flex flex-col mx-auto px-4 py-5 bg-dominant min-h-screen overflow-auto">
      <Navbar />
      <div className="flex flex-col items-center relative z-10 mt-20 ">
        <h1 className="text-2xl font-bold text-white mb-5 mt-7">
          Earth Imagery
        </h1>
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="border-2 border-white rounded-md px-2 text-black bg-white bg-opacity-50 w-full sm:w-auto"
          />
          <input
            type="number"
            value={latitude}
            onChange={handleLatitudeChange}
            placeholder="Latitude"
            className="border-2 border-white rounded-md px-2 text-black bg-white bg-opacity-50 w-full sm:w-auto"
          />
          <input
            type="number"
            value={longitude}
            onChange={handleLongitudeChange}
            placeholder="Longitude"
            className="border-2 border-white rounded-md px-2 text-black bg-white bg-opacity-50 w-full sm:w-auto"
          />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {earthImagery.url ? (
              <>
                <img
                  src={earthImagery.url}
                  alt="Earth Imagery"
                  className={`w-[65vh] mt-4 ${isImageLoading ? 'hidden' : ''}`}
                  onLoad={handleImageLoad}
                />
                {isImageLoading && <Loading />}
              </>
            ) : (
              <p className="text-white">
                <ContentNotFound content="No Earth Imagery found for the selected date and location." />
              </p>
            )}
          </>
        )}
      </div>
      <EarthImgBackgroundVideo />
    </div>
  );
}
