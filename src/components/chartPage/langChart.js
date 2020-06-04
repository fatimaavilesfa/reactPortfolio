import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
    const [ chartData, setChartData] = useState({});

    const createChart = () => {
        setChartData({
            labels: ['English', 'Russian', 'Spanish', 'French'], 
            datasets: [{
                label: 'Fluency',
                data: [95, 33, 100, 15],
                backgroundColor: [
                    '#af59cf'
                ],
                borderWidth: 4
             }
            ]
        })
    }

    useEffect(() => {
        createChart()
    }, [])

    return (
        <div style={{height: "700px", width:"700px", marginTop: "75px"}}>
            <Line data={chartData} options={{
                responsive: true,
                title: {text: 'Language Fluency', display: true},
                scales: {
                yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0
                }    
                }]
            }
            }}/>
        </div>
    )
}
export default Chart;