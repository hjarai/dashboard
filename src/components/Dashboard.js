import React, { Component } from 'react'
import ChartistGraph from 'react-chartist'
import data_json from '../data/filtered.json'

const data = data_json;

class Dashboard extends Component {

  render() {
    let dataLine = {
      labels: ["Thurs", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
      series: [Object.values(data.Senti_Sum), Object.values(data.Tensi_Sum)]
    }
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
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