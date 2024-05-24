import React from 'react';
import './Admin.css';
import statImage1 from '../assets/stat1.jpg';
import statImage2 from '../assets/stat2.png';
import statImage3 from '../assets/stat3.png';
import statImage4 from '../assets/stat4.jpg';
import statImage5 from '../assets/stat5.png';

const Admin = () => {
  const stats = [
    { title: 'Stat 1', image: statImage1 },
    { title: 'Stat 2', image: statImage2 },
    { title: 'Stat 3', image: statImage3 },
    { title: 'Stat 4', image: statImage4 },
    { title: 'Stat 5', image: statImage5 }
  ];

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <img src={stat.image} alt={stat.title} />
            <h3>{stat.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
