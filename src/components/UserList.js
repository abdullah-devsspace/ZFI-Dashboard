import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {

  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://app-auth42069.us.auth0.com/api/v2/clients', // Replace with your Auth0 domain
    headers: {
      'Accept': 'application/json',
    },
  };
  axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.error(error);
    });


  // return (
  //   // <div>
  //   //   <h1>User List</h1>
  //   //   {error ? (
  //   //     <p>Error: {error}</p>
  //   //   ) : (
  //   //     <ul>
  //   //       {users.map((user) => (
  //   //         <li key={user.user_id}>{user.email}</li>
  //   //       ))}
  //   //     </ul>
  //   //   )}
  //   // </div>
  // );
};

export default UserList;
