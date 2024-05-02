import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MarsRoversPage from './pages/MarsRoversPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarsRoversPage />} />
      </Routes>
    </Router>
  );
}

export default App;
