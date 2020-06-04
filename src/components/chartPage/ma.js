import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
    const [ chartData, setChartData] = useState({});

    const createChart = () => {
        setChartData({
            labels: ['Olympic Wrestling', 'Brazilian Jiu-Jitsu', 'Kendo', 'Muay Thai'], 
            datasets: [{
                label: 'Level',
                data: [95, 65, 80, 50],
                backgroundColor: [
                    '#cc99ff'
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
                title: {text: 'Martial Arts', display: true},
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