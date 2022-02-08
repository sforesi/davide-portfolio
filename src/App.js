import './App.css';
import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Press from './pages/Press';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/press' element={<Press />} />
      </Routes>
    </div>
  );
}

export default App;
