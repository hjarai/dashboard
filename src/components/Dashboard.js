import React, { Component } from 'react'
import ChartistGraph from 'react-chartist'
import data_json from '../data/filtered.json'

const data = data_json;

class Dashboard extends Component {

  render() {
    // let dataPie = {
    //   labels: ["40%", "20%", "40%"],
    //   series: [40, 20, 40]
    // }
    // let dataSales = {
    //   labels: [
    //     "9:00AM",
    //     "12:00AM",
    //     "3:00PM",
    //     "6:00PM",
    //     "9:00PM",
    //     "12:00PM",
    //     "3:00AM",
    //     "6:00AM"
    //   ],
    //   series: [
    //     [287, 385, 490, 492, 554, 586, 698, 695],
    //     [67, 152, 143, 240, 287, 335, 435, 437],
    //     [23, 113, 67, 108, 190, 239, 307, 308]
    //   ]
    // }
    let dataLine = {
      labels: ["Thurs", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
      series: [Object.values(data.Senti_Sum), Object.values(data.Tensi_Sum)]
    }
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">

            {/* <div className="col-md-4">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">Email Statistics</h4>
                  <p className="card-category">Last Campaign Performance</p>
                </div>
                <div className="card-body ">
                  <ChartistGraph data={dataPie} type="Pie" />
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Open
                                        <i className="fa fa-circle text-danger"></i> Bounce
                                        <i className="fa fa-circle text-warning"></i> Unsubscribe
                                    </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-clock-o"></i> Campaign sent 2 days ago
                                    </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-md-8">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Users Behavior</h4>
                  <p className="card-category">24 Hours performance</p>
                </div>
                <div className="card-body ">
                  <ChartistGraph data={dataSales} type="Line" />
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Open
                    <i className="fa fa-circle text-danger"></i> Click
                    <i className="fa fa-circle text-warning"></i> Click Second Time
                </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history"></i> Updated 3 minutes ago
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-8">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Twitter Analysis</h4>
                  <p className="card-category">1 week tracking</p>
                </div>
                <div className="card-body ">
                  <ChartistGraph data={dataLine} type="Line" />
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Happiness/Sadness
                    <i className="fa fa-circle text-danger"></i> Relax/Stress
                </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history"></i> Updated 3 minutes ago
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard