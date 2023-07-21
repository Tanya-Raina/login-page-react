import React from 'react'

function Home({ username }) {
  return (
    <div>
      <h2 className='name-heading'>Name: {username}</h2>
    </div>
  )
}

export default Home