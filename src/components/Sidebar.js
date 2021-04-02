import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../../src/assets/img/logo/MiddMood logo large.png"

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-wrapper">
          <div className="logo">
            <Link to='/' className="simple-text">
              Midd Mood
            </Link>
            <img src={logo} alt="logo" width="200" height="200" />
          </div>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/dashboard'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/test'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Test1</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/test2'>
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Test2</p>
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar