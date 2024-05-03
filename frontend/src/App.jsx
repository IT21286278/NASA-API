import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MarsRoversPage from './pages/MarsRoversPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Marsrover" element={<MarsRoversPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
