import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
    const { logout } = useAuth0();

    // console.log(useAuth0());

  return (
    <div>
      <button className='border-0 bg-transparent text-light' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    </div>
  )
}

export default Logout
