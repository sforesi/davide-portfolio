import './App.css';
import React from 'react';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Press from './pages/press/Press';
import Services from './pages/services./Services';
import Contact from './pages/contact/Contact';
import Nav from './components/nav/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/press' element={<Press />} />
      </Routes>
    </div>
  );
}

export default App;
