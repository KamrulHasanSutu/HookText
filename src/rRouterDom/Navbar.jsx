import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div><h2>navbar component
        <nav className="navbar">
          <Link to='/'>Home m</Link>
          <Link to='/about'>About m</Link>
          <Link to='/products'>Products m</Link>
          <Link to='/services'>Services m</Link>
        </nav>
      </h2></div>
  )
}
