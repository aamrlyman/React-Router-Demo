import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";

const UserDetailsPage = () => {
  const { userId } = useParams();
  const { state } = useLocation();
  const [user, setUser] = useState({});
  console.log(state);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <div>
      <li>User: {user.name}</li>
      <li>ID: {user.id}</li>
      <li>Email: {user.email}</li>
      <li>Phone: {user.phone}</li>
      <li>UserName: {user.username}</li>
      <li>Website: {user.website}</li>
      {/* <li>ZipCode: {user.address.street}</li> */}
      {/* <li>Company: {user.company.name}</li> */}
    </div>
  );
};

export default UserDetailsPage;
