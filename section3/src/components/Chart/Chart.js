import React from 'react'

import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
    const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);


    return (
        <div className="chart" >
            {/*
                someArray.map((element) => <p>{element}</p>)
                it transforms an array (someArray) into a new array full of JSX elements which can be output by React
            
            */}
           {props.dataPoints.map( (dataPoint)  => (
                <ChartBar 

                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label} 
                />
            ))}
        </div>
    )
}

export default Chart
