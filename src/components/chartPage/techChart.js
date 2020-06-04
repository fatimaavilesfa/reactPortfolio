import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
    const [ chartData, setChartData] = useState({});

    const createChart = () => {
        setChartData({
            labels: ['HTML', 'CSS', 'Javascript', 'Node.js', 'MongoDB', 'Git', 'React'], 
            datasets: [{
                label: 'Knowledge',
                data: [85, 67, 95, 35, 55, 82, 62],
                backgroundColor: [
                    '#03ab9d'
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
                title: {text: 'Technical Skills', display: true},
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