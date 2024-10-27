"use client"; // Required for client-side rendering in Next.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 
import "./styles.css";

function Userlist({ filterString }) { // Accept filterString as a prop
  const [userList, setUserList] = useState([]); // State for user list
  const [isLoading, setLoading] = useState(true); // State for loading status
  const router = useRouter(); // Initialize router here
  
  useEffect(() => {
    // Fetch users on component mount
    getUsers();
    console.log("Component mounted, fetching users.");
  }, []);

  // Function to fetch users from the API
  const getUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const users = await response.json();
      setUserList(users); // Update user list with fetched data
      setLoading(false); // Set loading to false after fetching
    } catch (error) {
      console.error("Error fetching users:", error); // Log any errors
    }
  };

  // Function to handle user deletion
  const handleDelete = async (id:number) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this user?");
      if (confirmDelete) {
        await fetch(`/api/users/${id}`, {
          method: 'DELETE',
        });
        getUsers(); // Refresh user list after deletion
      }
    } catch (error) {
      console.error("Error deleting user:", error); // Log any errors
    }
  };

  // Function to handle viewing user
  const handleView = (id:number) => {
    router.push(`/admin/users/${id}`); // Redirect to user details page
  };

  // Function to handle editing user
  const handleEdit = (id:number) => {
    router.push(`/admin/edit/${id}`);
  };

  // Filter users based on the filterString prop
  const filteredUsers = userList.filter(user => 
    `${user.firstname} ${user.lastname}`.toLowerCase().includes(filterString.toLowerCase())
  );

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User List</h1>
      </div>
      
      {/* User Data Table */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Data Tables</h6>
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="Loading..." />
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstname} {user.lastname}</td>
                        <td>{user.email}</td>
                        <td>
                          <button onClick={() => handleView(user.id)} className="btn btn-primary btn-sm mr-1">View</button>
                          <button onClick={() => handleEdit(user.id)} className="btn btn-info btn-sm mr-1">Edit</button>
                          <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Userlist;
