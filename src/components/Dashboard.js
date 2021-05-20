import React from 'react';
import { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";


//const data = data_json;
const Chartist = require('chartist');

// Let's put a sequence number aside so we can use it in the event callbacks
var seq = 0,
  delays = 80,
  durations = 500;

export default function Dashboard({data, last, range}){
  const [series, setSeries] = useState([data.map(element => element.score)])
  const [rangeText, setRangeText] = useState("This week")

  useEffect(() => {
  if (range === "week") {
    setRangeText("This week")
    setSeries([data.map(element => element.score)])
  } else if (range === "pick") {
    setRangeText("One week")
    setSeries([data.map(element => element.score)])
  } else if (range === "month") {
    setRangeText("This month")
    setSeries([data.map(element => element.score), seriesfunction(data)])
  } else if (range === "semester"){
    setRangeText("This Semester")
    setSeries([data.map(element => element.score), seriesfunction(data)])
  } else {
    setRangeText("Since 2020")
    setSeries([data.map(element => element.score), seriesfunction(data)])
  }
},[range, data]);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  
  const seriesfunction = (data) =>{
    const series = [];
    let sum = 0;
    for (let i=0; i<data.length;i++){
      sum += data[i].score;
      if(i%7===6){
        series.push(sum/7.0);
        sum = 0;
      } else if (i === 0 || i === data.length-1){
        series.push((data[i].score+6)/2)
      }else {
        series.push(null);
      }
    }
    console.log(series)
    return series;
  }

  const dataLine = {
      labels: data.map(element => element.date),
      series: series
  };

  const options = {
    axisX: {
      labelInterpolationFnc: function skipLabels(value, index, labels) {
        if(labels.length < 8) {
          if (range==="week"){
            return days[index]
          }
          return value
        } else if(labels.length < 32) {
          return index % 4  === 0 ? value : null;
        } else if (labels.length <91){
          return index % 10  === 0 ? value : null;;
        } else {
          return index % 50  === 0 ? value : null;;
          ;
        }
      },

    },
    lineSmooth: Chartist.Interpolation.cardinal({
      fillHoles: true,
    }),
  }  ;

    //labels Mon Tues Wed Thrus Fri if week
    // labels every five days if month
    // every month if semester or of all time
    
  return (
    <div className="col-md-10">
    <div className="card">
      <div className="card-header ">
        <h4 className="card-title">Twitter Analysis</h4>
        <p className="card-category">Tracking {rangeText}</p>
      </div>
      <div className="card-body ">
        <ChartistGraph
        className="ct-chart"
        data={dataLine}
        type="Line"
        options = {options}
        listener={{"draw" : function(data) {
          if(data.type === 'line') {
              // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
              data.element.animate({
              opacity: {
                  // The delay when we like to start the animation
                  begin: seq * delays + 1000,
                  // Duration of the animation
                  dur: durations,
                  // The value where the animation should start
                  from: 0,
                  // The value where it should end
                  to: 1
              }
              });
          } else if(data.type === 'label' && data.axis === 'x') {
              data.element.animate({
              y: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.y + 100,
                  to: data.y,
                  // We can specify an easing function from Chartist.Svg.Easing
                  easing: 'easeOutQuart'
              }
              });
          } else if(data.type === 'label' && data.axis === 'y') {
              data.element.animate({
              x: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 100,
                  to: data.x,
                  easing: 'easeOutQuart'
              }
              });
          } else if(data.type === 'point') {
              data.element.animate({
              x1: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 10,
                  to: data.x,
                  easing: 'easeOutQuart'
              },
              x2: {
                  begin: seq * delays,
                  dur: durations,
                  from: data.x - 10,
                  to: data.x,
                  easing: 'easeOutQuart'
              },
              opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'easeOutQuart'
              }
              });
          } else if(data.type === 'grid') {
              // Using data.axis we get x or y which we can use to construct our animation definition objects
              var pos1Animation = {
              begin: seq * delays,
              dur: durations,
              from: data[data.axis.units.pos + '1'] - 30,
              to: data[data.axis.units.pos + '1'],
              easing: 'easeOutQuart'
              };
          
              var pos2Animation = {
              begin: seq * delays,
              dur: durations,
              from: data[data.axis.units.pos + '2'] - 100,
              to: data[data.axis.units.pos + '2'],
              easing: 'easeOutQuart'
              };
          
              var animations = {};
              animations[data.axis.units.pos + '1'] = pos1Animation;
              animations[data.axis.units.pos + '2'] = pos2Animation;
              animations['opacity'] = {
              begin: seq * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: 'easeOutQuart'
              };
          
              data.element.animate(animations);
          }
          
      } }}/>

      </div>
      <div className="card-footer ">
        <div className="legend">
          <i className="fa fa-circle text-danger"></i> Happiness
          <i className="fa fa-circle text-info"></i> weekly trend
      </div>
        <hr />
        <div className="stats">
          <i className="fa fa-history"></i> Updated {last}
        </div>
      </div>
    </div>
  </div>
    
  );
}
