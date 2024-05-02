import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MarsRoversPage from './pages/MarsRoversPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MarsRoversPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
