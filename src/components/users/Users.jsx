import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const handleGetUsers = () => {
    fetch("api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleAddUser = () => {
    console.log("handleUser is called");
    fetch("api/users", {
      method: "POST",
      body: JSON.stringify({ name: "Moahmed", age: 40 }),
    });
    handleGetUsers();
  };
  return (
    <div>
      <h1>Users Component</h1>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            name: {user.name}, age: {user.age}
          </li>
        ))}
      </ul>
      <button onClick={handleGetUsers}>Get Users</button>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default Users;
