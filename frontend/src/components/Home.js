import React from 'react';
import './Home.css';
import backgroundImage from '../assets/home.jpg';

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="home-content">
        <h1>Welcome to Our Restaurant</h1>
        <p>Enjoy the best dishes from around the world.</p>
      </div>
    </div>
  );
};

export default Home;
