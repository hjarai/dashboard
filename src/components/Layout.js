import React, { Component } from 'react'
//import ChartistGraph from 'react-chartist'
//import data_json from '../data/filtered.json'
import Test from './Test';
import Dial from './Dial';
import Words from './Words';
//import data from '../data/last_one.txt';


class Layout extends Component {

  constructor(){
    super();
    this.state ={
      range: 'semester',
    };
  };


  render() {
    //const all_data = data;
    //console.log(all_data)
    // const selected_data = (selected) =>{
    //   if(selected= "week") {
    //     all_data
    //   }
    // }

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-8">
              <div className="card">
                <Dial/>
                <Words/>
                <div className="card-body ">
                <button onClick={() => this.setState({range: "week"})}>This week</button>
                <button onClick={() => this.setState({range: "month"})}>This Month</button>
                <button onClick={() => this.setState({range: "semester"})}>This Semester</button>
                <Test />
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