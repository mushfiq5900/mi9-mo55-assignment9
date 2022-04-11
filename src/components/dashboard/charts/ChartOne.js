import React, { useEffect, useState } from 'react';
import { Line, LineChart,XAxis, YAxis } from 'recharts';

const ChartOne = () => {
    const [graphData, setGraphData] = useState([])
    useEffect(() => {
        fetch('graph.json')
            .then(response => response.json())
            .then(data => setGraphData(data))
    }, [])
    console.log(graphData)
    return (
        <div>
            <LineChart width={600} height={600} data={graphData}>
                <Line dataKey={'sell'}></Line>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey='month'></XAxis>
                <YAxis dataKey='revenue'></YAxis>
            </LineChart>
        </div>
    );
};

export default ChartOne;