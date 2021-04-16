import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import new_logo from "../../src/assets/img/logo/midd mood transparent.png"

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='layout' className="simple-text">
            <img src={new_logo} alt="logo" width="200" height="200" />
            </Link>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/layout'>
                <p> ⏲  Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/info'>
                <p>👋 About MiddMood</p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar