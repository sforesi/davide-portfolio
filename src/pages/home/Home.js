import React from 'react';
import Nav from '../../components/nav/Nav';
import Home_bg from '../../images/davide-homepage-pic.JPG'
import './styles.css'

const Home = props => {
  return (
    <div>
      <h1>Davide Mancini</h1>
        <h2>Musician, Producer, Teacher</h2>
        <img className='homeBG' src={Home_bg} alt='bg'/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum consequat nisl vel pretium lectus. A iaculis at erat pellentesque adipiscing commodo elit. Mauris commodo quis imperdiet massa tincidunt. Donec ac odio tempor orci dapibus ultrices. Quis lectus nulla at volutpat diam ut venenatis. Curabitur gravida arcu ac tortor dignissim convallis. Ut sem nulla pharetra diam sit amet. Nec ullamcorper sit amet risus nullam eget felis eget. Malesuada fames ac turpis egestas maecenas pharetra. In ante metus dictum at tempor. Fringilla ut morbi tincidunt augue interdum velit euismod. Ultricies mi quis hendrerit dolor magna eget est lorem.</p>
        <h2>Services</h2>  
        <p>Adipisicing magna incididunt anim incididunt nisi ullamco nulla ipsum ex aliqua.Adipisicing magna incididunt anim incididunt nisi ullamco nulla ipsum ex aliqua.Adipisicing magna incididunt anim incididunt nisi ullamco nulla ipsum ex aliqua.Adipisicing magna incididunt anim incididunt nisi ullamco nulla ipsum ex aliqua.Adipisicing magna incididunt anim incididunt nisi ullamco nulla ipsum ex aliqua.</p>

        <button>Learn More</button>

    </div>
  );
};

export default Home;