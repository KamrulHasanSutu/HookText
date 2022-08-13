import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div><h2>This is About Component</h2>
    <Link to='/' className='btn btn-success'>Back Home</Link>
      
    </div>
  )
}
