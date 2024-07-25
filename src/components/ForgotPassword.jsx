import Axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:8080/auth/forgot-password', { email })
      .then((response) => {
        if (response.data.status) {
          alert('Check your email for the reset password link.');
          navigate('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="outer-container">
      <div className="login-container">
        <div className="box left-box">
        <h2 color='orange' >नमस्ते !</h2>
          <p>Welcome to INSTANT AROGYA</p>
          <p>Your one step solution to all the mdeical needs</p>
        </div>
        <div className="box right-box">
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
