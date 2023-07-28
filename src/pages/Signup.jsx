import React, { useState } from 'react';


const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    usernameError: '',
    emailError: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrorMessages({ ...errorMessages, [`${name}Error`]: '' }); // Clear error when input changes
  };

  const isUserExists = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/users?email=${email}`);
      const data = await response.json();
      return data.length > 0;
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username) {
      setErrorMessages({ ...errorMessages, usernameError: 'Username is required' });
      return;
    }

    if (!formData.email) {
      setErrorMessages({ ...errorMessages, emailError: 'Email is required' });
      return;
    }

    if (await isUserExists(formData.email)) {
      setErrorMessages({ ...errorMessages, emailError: 'Email already exists' });
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('User successfully signed up!', data);
      // You can redirect the user to a different page or show a success message.
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle error and show an error message to the user if necessary.
    }
  };

  return (
    <div className="main-container">
    <div className="main-box">
      <h1>Signup</h1>
      <form  className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
          {errorMessages.usernameError && <span style={{ color: 'red' }}>{errorMessages.usernameError}</span>}
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          {errorMessages.emailError && <span style={{ color: 'red' }}>{errorMessages.emailError}</span>}
        </div>
        <div>
          <label>
            Password:

            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div>
  
      </div>
    </div>
    </div>
  );
};

export default Signup;