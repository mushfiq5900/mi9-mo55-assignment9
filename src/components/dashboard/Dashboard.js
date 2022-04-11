import React, { useEffect, useState } from 'react';
import ChartOne from './charts/ChartOne';
import ChartTwo from './charts/ChartTwo';

const Dashboard = () => {
    const [graphData, setGraphData] = useState([])
    useEffect(() => {
        fetch('graph.json')
            .then(response => response.json())
            .then(data => setGraphData(data))
    }, [])
    console.log(graphData)
    return (
        <div className='row'>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <ChartTwo></ChartTwo>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <ChartOne></ChartOne>
            </div>
        </div>
    );
};

export default Dashboard;