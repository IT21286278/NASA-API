import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LogInPage from './pages/LogInPage';
import MarsRoversPage from './pages/MarsRoversPage';
import HomePage from './pages/HomePage';
import EarthImagery from './pages/EarthImagery';
import PODPage from './pages/PODPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/Marsrover" element={<MarsRoversPage />} />
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/EarthImagery" element={<EarthImagery />} />
        <Route path="/picture-of-the-day" element={<PODPage />} />
      </Routes>
    </Router>
  );
}

export default App;
