import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
);


const Chart = () => {

    const chartData = {
        labels: Array.from({ length: 5 }, (_, i) => `Month-${i}`),
        datasets: [
            {
                label: 'Previous 5 Months downloads',
                data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)),
                borderColor: '#7e5bef',
            }
        ]
    }


    return (
        <div style={{ height: "150px" }}>
            <Line data={chartData} />
        </div>
    )
}

export default Chart