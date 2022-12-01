import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
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

  const handleClick = (user) => {
    console.log(user)
    navigate(`/details/${user.id}`, {
        state: {
            name: user.name,
            company: user.company.name,
            address: user.address.street
        }
    }
    )

  }

  return (
    <div>
      <h1>All Users</h1>
      {users &&
        users.map((user) => {
          return <li key={user.id}>
            <button onClick={()=> handleClick(user)}>Send information for {user.name}</button>
            <Link to={`/details/${user.id}`} >{user.name}</Link>
          </li>;
        })}
    </div>
  );
};

export default UsersPage;
