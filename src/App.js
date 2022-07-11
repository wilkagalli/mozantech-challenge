import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import MainPage from './components/pages/MainPage';
import PartsPage from './components/pages/PartsPage';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header></Header>

      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/mainPage" />}></Route>
          <Route exact path="/mainPage" element={<MainPage />}></Route>
          <Route exact path="/partsPage" element={<PartsPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
