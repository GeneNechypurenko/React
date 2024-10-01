import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import MainAttraction from './MainAttraction';
import OtherAttractions from './OtherAttractions';
import Photos from './Photos';

const App: React.FC = () => {
  return (
    <Router>
      <div className="max-w-7xl mx-auto p-4">
        <nav className="mb-4">
          <ul className="flex space-x-4 bg-slate-800 p-4 rounded-md justify-center content-center items-center">
            <li>
              <Link to="/" className="text-white hover:bg-white hover:text-black hover:font-bold p-4 hover:rounded-md">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:bg-white hover:text-black hover:font-bold p-4 hover:rounded-md">About Odessa</Link>
            </li>
            <li>
              <Link to="/main-attraction" className="text-white hover:bg-white hover:text-black hover:font-bold p-4 hover:rounded-md">Main Attraction</Link>
            </li>
            <li>
              <Link to="/other-attractions" className="text-white hover:bg-white hover:text-black hover:font-bold p-4 hover:rounded-md">Other Attractions</Link>
            </li>
            <li>
              <Link to="/photos" className="text-white hover:bg-white hover:text-black hover:font-bold p-4 hover:rounded-md">Photos</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/main-attraction" element={<MainAttraction />} />
          <Route path="/other-attractions" element={<OtherAttractions />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
