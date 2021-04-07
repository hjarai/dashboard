import React, { Component } from 'react'
//import ChartistGraph from 'react-chartist'
//import data_json from '../data/filtered.json'
import Test from './Test';
import Dial from './Dial';
import Words from './Words';


class Layout extends Component {

  
  render() {

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-8">
              <div className="card">
                <Dial/>
                <Words/>
                <div className="card-body ">
                <button onClick={() => console.log("week")}>This week</button>
                <button onClick={() => console.log("month")}>This Month</button>
                <button onClick={() => console.log("semester")}>This Semester</button>
                <Test/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Layout