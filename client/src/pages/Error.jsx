import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>404! Page URL not found. Back <Link to="/" className='text-blue-500 underline'>home</Link></div>
  )
}

export default Error