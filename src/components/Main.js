import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Route, Redirect } from 'react-router-dom'
import Info from './Info'
import Layout from './Layout'

class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Navbar />
          <Route path="/info" component={Info} />  
          <Redirect from='*' to='/info' />
          <Route path="/layout" component={Layout} /> 
          <Redirect from='*' to='/layout' />
        <Footer />
      </div>
    )
  }
}

export default Main