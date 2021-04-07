import React from 'react'
// import { Donut } from 'react-dial-knob'
import ReactSpeedometer from "react-d3-speedometer"

export default function Dial() {
    // const [value, setValue] = useState(0)
    return ( 
        <div className="col-md-8">
            <div className="card">
            <div className="card-header ">
                  <h4 className="card-title">Daily Mood</h4>
                  <p className="card-category">Today's mood?</p>
                </div>
            <ReactSpeedometer
                maxValue={10}
                value={7}
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
                />
            </div>
        </div>
    )
}