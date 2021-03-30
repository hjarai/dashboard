import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'

class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Navbar />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect from='*' to='/dashboard' />
        <Footer />
      </div>
    )
  }
}

export default Main