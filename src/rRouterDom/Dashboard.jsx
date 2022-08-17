import React from 'react'

const Dashboard = ({user}) => {
  return (
    <div>
        <h2>Dashboard</h2>
        <h4>{user ? `Hellow ${user.name}`:`no user login`}</h4>
    </div>
  )
}
export default Dashboard;