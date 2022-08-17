import React from 'react'
import { NavLink } from 'react-router-dom'

export default function StyledNavbar() {
  return (
    <div><h2>navbar-componnt
        <nav className="navbar">
          <NavLink to='/'className={({isActive})=> (isActive ? ' active': 'link')}>HomeMenu</NavLink>
          <NavLink to='/about' className={({isActive})=> (isActive ? ' active': 'link')}>AboutMenu</NavLink>
          <NavLink to='/products' className={({isActive})=> (isActive? ' active': 'link')}>ProductsMenu</NavLink>
          <NavLink to='/services' className={({isActive})=>(isActive ? ' active': 'link') }>ServicesMenu</NavLink>
        </nav>
      </h2></div>
  )
}
