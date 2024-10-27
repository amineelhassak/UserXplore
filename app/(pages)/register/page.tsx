"use client";
import React, { useState } from 'react';
import './css/style.css';
import './fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [gender, setGender] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Check if passwords match
    if (password !== confirmpassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname, lastname, address, email, gender, password, confirmpassword }),
      });

      if (!response.ok) {
        if (response.status === 500) {
          setError('Server error occurred. Please try again later.');
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Registration failed');
        }
      }else {
        const userData = await response.json();
        setSuccessMessage(`User registered: ${userData.firstname}`);
        setFirstname('');
        setLastname('');
        setEmail('');
        setAddress('');
        setPassword('');
        setConfirmpassword('');
        setGender(null);
        setError('');
      }
    } catch (err) {
      setError('An error occurred while registering the user.');
    }
  };
  return (
    <div className="wrapper">
      <div className="inner">
        <form onSubmit={handleSubmit}>
          <h3>Registration Form</h3>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              className="form-control"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-wrapper">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
            <i className="zmdi zmdi-email"></i>
          </div>
          <div className="form-wrapper">
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-wrapper">
            <select
              value={gender || ''}
              onChange={(e) => setGender(e.target.value || null)}
              required
              className="form-control"
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <i className="zmdi zmdi-caret-down" style={{ fontSize: '17px' }}></i>
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
            <i className="zmdi zmdi-lock"></i>
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              required
              className="form-control"
            />
            <i className="zmdi zmdi-lock"></i>
          </div>
          <button type="submit">
            Register
            <i className="zmdi zmdi-arrow-right"></i>
          </button>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
