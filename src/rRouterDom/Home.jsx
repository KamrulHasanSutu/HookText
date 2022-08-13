import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div><h2>This is Home Component</h2> 
    <Link to="/about" className='btn btn-warning'>About</Link>
    </div>
  )
}
