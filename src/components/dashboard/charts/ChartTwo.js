import React, { useEffect, useState } from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
const ChartTwo = () => {
    const [graphData, setGraphData] = useState([])
    useEffect(() => {
        fetch('graph.json')
            .then(response => response.json())
            .then(data => setGraphData(data))
    }, [])
    console.log(graphData)
    return (
        <div className='row'>
            <div className="col-lg-6 col-md-6 col-sm-12 p-5">
                <h1 className='text-center my-5'>Sell and reviews</h1>
                <PieChart width={400} height={400}>
                    <Pie data={graphData} dataKey="revenue" nameKey="tv-sell" cx="50%" cy="50%" outerRadius={200} fill="#8884d8" />
                    <Pie data={graphData} dataKey="investment" nameKey="tv-sell" cx="50%" cy="50%" innerRadius={100} fill="#dddd" />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default ChartTwo;