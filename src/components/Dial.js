import React from 'react'
import ReactSpeedometer from "react-d3-speedometer"

export default function Dial({data}) {
    return ( 
        <div className="col-md-4">
            <div className="card">
            <div className="card-header ">
                  <h4 className="card-title">Daily Mood</h4>
                  <p className="card-category">Today's mood?</p>
                </div>
          
            <ReactSpeedometer
                minValue={1}
                maxValue={9}
                value={data}
                needleColor="#32161f"

                segments={5}
                segmentColors={[
                    "#b5ca8d",
                    "#8bb174",
                    "#426b69",
                    "#2a4849",
                    "#5d576b",
                ]}
                needleTransitionDuration={4000}
                needleTransition="easeElastic"

                paddingHorizontal = {30}
                paddingVertical = {0}

                /> 
            </div>
        </div>
    )
}