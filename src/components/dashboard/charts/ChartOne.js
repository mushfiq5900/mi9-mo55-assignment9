import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const ChartOne = () => {
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
                <h1 className='text-center my-5'>Monthly reviews</h1>
                <LineChart width={400} height={400} data={graphData}>
                    <Line dataKey={'tv-sell'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey='month'></XAxis>
                    <YAxis dataKey='revenue'></YAxis>
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default ChartOne;