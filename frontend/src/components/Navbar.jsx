import NASAlogo from '../assets/NASA_logo.svg.png';

export default function Navbar() {
  return (
    <nav className="w-full flex py-4 justify-between items-center fixed top-0 left-0 bg-opacity-100 bg-black z-50 px-4 md:px-8 lg:px-16">
      <a href="/Homepage" rel="noopener noreferrer">
        <img src={NASAlogo} alt="NASA Logo" className="w-[90px] h-[90px]" />
      </a>
      <ul className="list-none flex justify-end items-center flex-1 space-x-4">
        <li>
          <a
            href="https://www.nasa.gov/"
            className="px-3 py-2 text-m rounded bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300 hidden sm:block"
          >
            Explore more about NASA
          </a>
        </li>
        <li>
          <button className="px-3 py-2 text-m rounded bg-red-500 text-white hover:bg-red-800 transition-colors duration-300">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
