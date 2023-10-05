import React from 'react'

const Navigation = ({ login }) => {
  return (
    <div>
      Please login with Google lollol
      <div>
        <button onClick={login}>SignIn with Googles</button>
      </div>
    </div>
  )
}

export default Navigation