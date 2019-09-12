import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/users/index').then(res => setUsers(res.data.user)).catch(err => console.log(err))
  }, []);

  return (
    <div>
      {
        (users.length > 0) ? users.map((user, i) => <h1 key={`user ${i + 1}`}>{user.name}</h1>) : <h1>Loading...</h1>
      }
    </div>
  )
}

export default Users;
