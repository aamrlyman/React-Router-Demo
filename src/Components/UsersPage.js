import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUSers = async () => {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUSers();
  }, []);
  return (
    <div>
      <h1>All Users</h1>
      {users &&
        users.map((user) => {
          return <li key={user.id}><Link to={`/details/${user.id}`} >{user.name}</Link></li>;
        })}
    </div>
  );
};

export default UsersPage;
