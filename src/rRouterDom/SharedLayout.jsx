import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import StyledNavbar from './StyledNavbar'

const Home = () => {
  return (
        <div>
            <StyledNavbar />
            <hr></hr>
            <Outlet />
            <hr></hr>
        </div>
  )
}

export default Home;