import React, { Component } from 'react'
//import ChartistGraph from 'react-chartist'
//import data_json from '../data/filtered.json'
import Test2 from './Test2';
import Dial from './Dial';
import Words from './Words';
import data_file from '../data/last_one.json'

class Layout extends Component {

  constructor(){
    super();
    this.state ={
      range: 'week',
      data: data_file,
    };
  };


  render() {
    const data_length = this.state.data.length;
    const filtered_data = (period) => {
      if (period === 'week'){
        return this.state.data.slice(data_length-7, data_length-1)
      } else if (period ==='month'){
        return this.state.data.slice(data_length-30, data_length-1);
      } else {
        return this.state.data
      }
    }

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">

            <div className="col-md-8">
              <div className="card">
                <div className="rowC">
                  <Dial data = {this.state.data[data_length-1].score}/>
                  <Words data={filtered_data(this.state.range)}/>
                </div>
                <div className="card-body ">
                  <button onClick={() => this.setState({range: "week"})}>This week</button>
                  <button onClick={() => this.setState({range: "month"})}>This Month</button>
                  <button onClick={() => this.setState({range: "semester"})}>This Semester</button>
                  <Test2 data={filtered_data(this.state.range)}/>
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