import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='NotFound px-3 mt-32 lg:mt-60 mb-80'>
      <h1 className='text-5xl font-bold text-center'>404<br/>Page Not Found</h1>
      <p className='text-lg text-center mt-5'>Go back to <Link to='/' className='hover:underline text-sky-500'>Home</Link> </p>
    </div>
  )
}

export default NotFound