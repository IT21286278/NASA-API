import NASAlogo from '../assets/NASA_logo.svg.png';

export default function Navbar() {
  return (
    <nav className="w-full flex py-3 justify-between items-center navbar">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={NASAlogo} alt="NASA Logo" className="w-[100px] h-[100px]" />
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="mr-6">
          <a
            href="https://www.nasa.gov/"
            className="px-3 py-2 text-m rounded bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-300"
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
