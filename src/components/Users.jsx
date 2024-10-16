import React from 'react'

export default function Users() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data))

    

  return (
    <h1 className='text-4xl text-center'>
        All Users
      </h1>
  )
}
