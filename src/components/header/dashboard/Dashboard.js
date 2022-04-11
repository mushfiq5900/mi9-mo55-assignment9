import React, { useEffect, useState } from 'react';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [graphData, setGraphData] = useState([])
    useEffect(() => {
        fetch('graph.json')
            .then(response => response.json())
            .then(data => setGraphData(data))
    }, [])
    console.log(graphData)
    return (
        <div>
            <PieChart width={730} height={730}>
            <Pie data={graphData} dataKey="revenue" nameKey="sell" cx="50%" cy="50%" outerRadius={250} fill="#8884d8" />
            <Pie data={graphData} dataKey="investment" nameKey="sell" cx="50%" cy="50%" outerRadius={100} fill="#dddd"/>
            <Tooltip/>
        </PieChart>
        </div>
        // <LineChart width={600} height={300} data={graphData}>
        //     <Line dataKey={'sell'}></Line>
        //     <Line dataKey={'revenue'}></Line>
        //     <XAxis dataKey='month'></XAxis>
        //     <YAxis dataKey='revenue'></YAxis>
        // </LineChart>

    );
};

export default Dashboard;