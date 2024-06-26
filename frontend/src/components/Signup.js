import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signup({ Email: email, Password: password, Role: role });
      localStorage.setItem('token', data.token);
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/restaurant');
      }
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Signup</h2>
        {error && <p className="error">{error}</p>}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <div className="role-selection">
          <label>
            <input type="radio" name="role" value="customer" checked={role === 'customer'} onChange={() => setRole('customer')} />
            Customer
          </label>
          <label>
            <input type="radio" name="role" value="admin" checked={role === 'admin'} onChange={() => setRole('admin')} />
            Admin
          </label>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
