import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Facilities from './pages/Facilities';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2025 Hospital Website</p>
      </footer>
    </div>
  );
};

export default App;
