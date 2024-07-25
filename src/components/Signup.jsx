import { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:8080/auth/signup', {
      username,
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
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
          <h2>Sign-Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">Signup</button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
