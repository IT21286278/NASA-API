import SpaceBackgroundVideo from '../components/SpaceBackgroundVideo';
import { useNavigate } from 'react-router-dom';

export default function LogInPage() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Marsrover');
  };
  return (
    <div className="relative min-h-screen">
      <SpaceBackgroundVideo />
      <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-around p-4 md:p-10 space-y-4 sm:space-y-0">
        <div className="bg-white bg-opacity-40 backdrop-sm rounded-lg shadow-lg p-4 md:p-6 w-96 m-2">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold text-black">NASA</h2>
          </div>
          <p className="text-gray-1200 ">
            The National Aeronautics and Space Administration (NASA) is an
            independent agency of the U.S. federal government responsible for
            the civilian space program, as well as aeronautics and aerospace
            research. NASA contributes to our Nation’s economic competitiveness,
            fueling growth in American industry and supporting quality,
            high-paying jobs across the country and internationally.
          </p>
          <div className="flex justify-center">
            <button className="mt-4 bg-red-600 text-white rounded px-4 py-2 hover:bg-blue-600">
              <a href="https://www.nasa.gov/">Learn More</a>
            </button>
          </div>
        </div>

        <div className="bg-white bg-opacity-30 backdrop-sm rounded-lg shadow-lg p-4 md:p-6 w-96 m-2">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-lg font-bold text-black mb-4">Login</h2>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-1 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-1 border rounded"
            />
            <div className="flex justify-center items-center flex-col">
              <button
                type="submit"
                className="bg-red-600 text-white rounded px-4 py-1 hover:bg-blue-600"
              >
                Sign In
              </button>
            </div>
            <div className="text-center mt-4 ">
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
