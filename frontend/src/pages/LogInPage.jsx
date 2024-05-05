import SpaceBackgroundVideo from '../components/SpaceBackgroundVideo';
import NASALogo from '../assets/NASA_logo.svg.png';
import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import ToastContext from '../context/ToastContext';

export default function LogInPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const { loginUser } = useContext(AuthContext);
  const { toast } = useContext(ToastContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      toast.error('Please enter all the required fields!');
      return;
    }

    loginUser(credentials);
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
              name="email"
              className="w-full px-6 py-3 border rounded"
              required
              value={credentials.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={credentials.password}
              onChange={handleInputChange}
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
