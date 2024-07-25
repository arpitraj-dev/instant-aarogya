import { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import your CSS file for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:8080/auth/login', {
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="outer-container">
      <div className="login-container">
        {/* Left Box */}
        <div className="box left-box">
          <h2 color='orange' >नमस्ते !</h2>
          <p>Welcome to INSTANT AROGYA</p>
          <p>Your one step solution to all the mdeical needs</p>
        </div>

        {/* Partition */}
        <div className="partition"></div>

        {/* Right Box */}
        <div className="box right-box">
          <center>
            <h2 >Login</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <button type="submit">Login</button>
              <p>
                <Link to="/forgotPassword">Forgot Password?</Link>
              </p>
              <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Login;
