import React from 'react';
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// core components
import data_json from '../data/filtered.json'

const data = data_json;

export default function Test(){
    let dataLine = {
        labels: ["Thurs", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"],
        series: [Object.values(data.Senti_Sum), Object.values(data.Tensi_Sum)]
      };
    
  return (
  
<div className="col-md-8">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Twitter Analysis</h4>
                  <p className="card-category">1 week tracking</p>
                </div>
                <div className="card-body ">
                <ChartistGraph
                    //   className="ct-chart"
                    data={dataLine}
                    type="Line"
                    listener={{"draw" : function(data) {
                        if(data.type === 'line' || data.type === 'area') {
                        data.element.animate({
                            d: {
                            begin: 2000 * data.index,
                            dur: 2000,
                            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                            to: data.path.clone().stringify(),
                            //easing: ChartistGraph.Svg.Easing.easeOutQuint
                            }
                        });
                        }
                    } }}
                    />
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
  );
}
