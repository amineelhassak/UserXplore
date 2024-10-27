"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import './styles.css';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/users/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }
          const data = await response.json();
          setUser(data);
        } catch (err) {
          setError(err.message);
        }
      }
    };

    fetchUser();
  }, [id]);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!user) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="user-detail-container">
      <h1 className="user-name">{user.firstname} {user.lastname}</h1>
      <table className="user-detail-table">
        <tbody>
          <tr>
            <td><strong>First Name:</strong></td>
            <td>{user.firstname}</td>
          </tr>
          <tr>
            <td><strong>Last Name:</strong></td>
            <td>{user.lastname}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td><strong>Gender:</strong></td>
            <td>{user.gender || 'N/A'}</td>
          </tr>
          <tr>
            <td><strong>Address:</strong></td>
            <td>{user.address || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetail;
