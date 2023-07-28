import React, { useState } from 'react';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrorMessage('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3002/users');
      const users = await response.json();

      const validUser = users.find(
        (user) => user.username === formData.username && user.password === formData.password
      );

      if (validUser) {
        console.log('User logged in successfully!');
        setLoggedIn(true);
      } else {
        setErrorMessage('Invalid username or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An error occurred while logging in. Please try again later.');
    }
  };

  if (loggedIn) {
    window.location.href = "./Home";
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
        </div>
        {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;