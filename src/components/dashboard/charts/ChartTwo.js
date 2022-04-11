import React, { useEffect, useState } from 'react';
import {Pie, PieChart, Tooltip} from 'recharts';
const ChartTwo = () => {
    const [graphData, setGraphData] = useState([])
    useEffect(() => {
        fetch('graph.json')
            .then(response => response.json())
            .then(data => setGraphData(data))
    }, [])
    console.log(graphData)
    return (
        <div>
            <PieChart width={600} height={600}>
            <Pie data={graphData} dataKey="revenue" nameKey="sell" cx="50%" cy="50%" outerRadius={250} fill="#8884d8" />
            <Pie data={graphData} dataKey="investment" nameKey="sell" cx="50%" cy="50%" outerRadius={100} fill="#dddd"/>
            <Tooltip/>
        </PieChart>
        </div>
    );
};

export default ChartTwo;