import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { getData } from '../service/api';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (!username) {
      setError('Please enter a username.'); 
      return;
    }
    getData(formData)
      .then((result) => {
        console.log(result);
        navigate('/homepage');
      })
      .catch((err) => {
        console.log(err);
        navigate('/homepage');
      });
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h2 className="h1">Online Market Market Place For Digital Products</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <br />
        <br />
        <a href="https">If Don't have Account</a>
        <br />
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
