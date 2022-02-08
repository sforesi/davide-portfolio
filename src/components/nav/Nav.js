import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/'>DM</Link>  
      <Link to='/about'>About</Link>  
      <Link to='/services'>Services</Link>  
      <Link to='/contact'>Contact</Link>  
      <Link to='/press'>Press</Link>  
      <button>Make a reservation</button>
    </div>
  );
};

export default Nav;