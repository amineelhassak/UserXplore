"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import './styles.css';

const UpdateUser = () => {
  const { id } = useParams();
  const router = useRouter();
  const [user, setUser] = useState<{ 
    firstname: string; 
    lastname: string; 
    email: string; 
    gender?: string; 
    address?: string; 
  } | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch user details
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
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUser();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) return;

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
      router.push(`/admin/users/${updatedUser.id}`); // Redirect to the updated user info page
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => (prevUser ? { ...prevUser, [name]: value } : null));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="update-user-container">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname" // Corrected to match the Prisma model
            value={user?.firstname || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname" // Added field for last name
            value={user?.lastname || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user?.email || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={user?.gender || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={user?.address || ''}
            onChange={handleChange}
          />
        </div>
        {/* Optional: You might want to exclude password and confirm password from the update for security reasons */}
        {/* <div>
          <label>Password:</label>
          <input
            type="password"
            name="password" // Include only if you want to allow password updates
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmpassword" // Include only if you want to allow password updates
            onChange={handleChange}
          />
        </div> */}
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUser;
