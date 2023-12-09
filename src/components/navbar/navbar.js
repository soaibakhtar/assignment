import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
function navbar() {
  return (
    <div>
    <nav className="navbar">
        <div className="logo">
          <a href="/">CourseHub</a>
        </div>
        <div className="dashboard-button">
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </div>
  )
}

export default navbar