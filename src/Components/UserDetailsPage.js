import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const UserDetailsPage = () => {
  const { userId } = useParams();
  const { user, setUser } = useState({});
  console.log(user);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        let response = await axios.get(
          `http://localhost:3000/details/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  });

  return (
    <div>
      <h1>User Details Page {userId}</h1>
    </div>
  );
};

export default UserDetailsPage;
