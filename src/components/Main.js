import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import Test from './Test'
import Test2 from './Test2'

class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Navbar />
          <Route path="/dashboard" component={Dashboard} />  
          <Redirect from='*' to='/dashboard' />
          <Route path="/test" component={Test} /> 
          <Redirect from='*' to='/test' />
          <Route path="/test2" component={Test2} /> 
          <Redirect from='*' to='/test2' />
        <Footer />
      </div>
    )
  }
}

export default Main