import React, { useState } from 'react';
import './App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    let errorMessage = '';

    if (!email) {
      errorMessage += 'Enter email. ';
    }
    if (!password) {
      errorMessage += 'Enter password. ';
    }

    if (errorMessage) {
      setError(errorMessage.trim());
      return; // Stop execution if there is an error
    }

    console.log('Logging in with:', { email, password });
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="container1">
          <label htmlFor="">Email address</label>
          <input
            type="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="container">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="error-container">
          {error && <p className="error-message">{error}</p>} 
        </div>

        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;

