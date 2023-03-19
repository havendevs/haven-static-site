import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Platform from './pages/Platform';
import Contact from './pages/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <div className="bg-red-400">
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
