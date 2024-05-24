import React from 'react';
import './Restaurant.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';


const Restaurant = () => {
  const menuItems = [
    { name: 'Dosa ', description: 'Special South Indian cuisine', image: image1 },
    { name: 'Pav Bhaji', description: 'Bombay Special', image: image2 },
    { name: 'Manchurian', description: 'Chinese Moshi', image: image3 },
    { name: 'Burger', description: 'Mexixcan Treat Burger', image: image4 },
    { name: 'Pizza', description: 'Italiano Pizzeria', image: image5 },
    { name: 'Fried Rice', description: 'Japanese Fried Rice', image: image6 },
    { name: 'Paneer Chilli', description: 'Spicy Paneer Chilli', image: image7 },
    { name: 'Paneer Tikka', description: 'Hot Tikka', image: image8 },
  ];

  return (
    <div className="restaurant-container">
      {menuItems.map((item, index) => (
        <div className="menu-item" key={index}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Restaurant;
