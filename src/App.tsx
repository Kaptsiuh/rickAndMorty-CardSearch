import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayouts';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
