import { useEffect, useState } from 'react';
import NASAService from '../services/NASAService';

function MarsRoversPage() {
  const [roverPhotos, setRoverPhotos] = useState([]);

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const photos = await NASAService.getMarstRoverPhotos('2021-08-01');
      setRoverPhotos(photos);
    };
    fetchRoverPhotos();
  }, []);

  return (
    <div>
      <h1>Rover Photos</h1>
      <div>
        {roverPhotos.map((photo) => (
          <img
            key={photo.id}
            src={photo.img_src}
            alt={photo.earth_date}
            className="rounded-lg"
          />
        ))}
      </div>
      console.log( roverPhotos);
    </div>
  );
}
0;

export default MarsRoversPage;
