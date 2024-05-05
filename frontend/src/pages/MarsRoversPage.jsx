import { useState, useEffect } from 'react';
import NASAService from '../services/NASAService';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

const MarsRoversPage = () => {
  const [roverName, setRoverName] = useState('curiosity');
  const [sol, setSol] = useState('1000');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  console.log('roverName:', roverName);
  const fetchPhotos = async () => {
    setIsLoading(true);
    const fetchedPhotos = await NASAService.getMarsRoverPhotos(
      roverName,
      sol,
      page
    );
    setPhotos(fetchedPhotos);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPhotos();
  }, [roverName, sol, page]);

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-950 py-10 pt-40">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Mars Rover Photos
        </h1>
        <div className="bg-zinc-200 shadow overflow-hidden sm:rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-0">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rover Name
              </label>
              <select
                value={roverName}
                onChange={(e) => setRoverName(e.target.value)}
                className="mt-1 block w-full md:w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="curiosity">Curiosity</option>
                <option value="perseverance">Perseverance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sol (Martian Solar Day)
              </label>
              <input
                type="number"
                value={sol}
                onChange={(e) => setSol(e.target.value)}
                className="mt-1 block w-full md:w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            onClick={fetchPhotos}
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Fetch Photos
          </button>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            <Loading />
          ) : (
            photos.slice(0, 6).map((photo) => (
              <div
                key={photo.id}
                className="p-4 rounded-lg shadow-lg border-2 border-red-500 space-y-2"
              >
                <img
                  src={photo.img_src}
                  alt="Mars"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="text-gray-400 font-bold text-sm">
                  <p>
                    <strong>Date:</strong> {photo.earth_date}
                  </p>
                  <p>
                    <strong>Rover:</strong> {photo.rover.name}
                  </p>
                  <p>
                    <strong>Camera:</strong> {photo.camera.full_name}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="py-2 px-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
          >
            Previous
          </button>
          <span className="font-medium">Page {page}</span>
          <button
            onClick={handleNextPage}
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarsRoversPage;
