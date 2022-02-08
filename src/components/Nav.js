import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div>
      <Link to='/about'>About</Link>  
      {/* <Link>Services</Link>  
      <Link>Press</Link>   */}
      <button>Make a reservation</button>
    </div>
  );
};

export default Nav;