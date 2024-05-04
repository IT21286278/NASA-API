import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import LogInPage from './pages/LogInPage';
import MarsRoversPage from './pages/MarsRoversPage';
import HomePage from './pages/HomePage';
import EarthImagery from './pages/EarthImagery';

function App() {
  return (
    <Router>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/Marsrover" element={<MarsRoversPage />} />
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/EarthImagery" element={<EarthImagery />} />
      </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
