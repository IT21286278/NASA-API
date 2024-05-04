import SpaceBackgroundVideo from '../components/SpaceBackgroundVideo';
import { useNavigate } from 'react-router-dom';
import NASALogo from '../assets/NASA_logo.svg.png';

export default function LogInPage() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Homepage');
  };
  return (
    <div className="relative min-h-screen">
      <SpaceBackgroundVideo />
      <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-around p-8 md:p-12 space-y-8 sm:space-y-0 overflow-x-auto">
        <div className="bg-white bg-opacity-40 backdrop-sm rounded-lg shadow-lg p-8 md:p-10 w-full md:max-w-xl m-4">
          <div className="flex items-center justify-between">
            <img
              src={NASALogo}
              alt="NASA Logo"
              className="w-16 h-16 mt-1 ml-1"
            />
            <div className="flex-grow text-center">
              <h2 className="text-4xl font-bold text-black">NASA</h2>
            </div>
            <div className="w-16 h-16"></div>
          </div>
          <p className="text-lg font-bold text-gray-800">
            The National Aeronautics and Space Administration (NASA) is an
            independent agency of the U.S. federal government responsible for
            the civilian space program, as well as aeronautics and aerospace
            research. NASA contributes to our Nation’s economic competitiveness,
            fueling growth in American industry and supporting quality,
            high-paying jobs across the country and internationally.
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-red-600 text-white rounded px-6 py-3 hover:bg-blue-600">
              <a
                href="https://www.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </button>
          </div>
        </div>

        <div className="bg-white bg-opacity-30 backdrop-sm rounded-lg shadow-lg p-6 md:p-8 w-full md:max-w-xl m-4">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-4xl font-bold text-black mb-6">Login</h2>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-3 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-6 py-3 border rounded"
            />
            <div className="flex justify-center items-center flex-col">
              <button
                type="submit"
                className="bg-red-600 text-white rounded px-6 py-3 hover:bg-blue-600"
              >
                Sign In
              </button>
            </div>
            <div className="text-center">
              <a href="/register" className="text-blue-400 hover:text-blue-700">
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
