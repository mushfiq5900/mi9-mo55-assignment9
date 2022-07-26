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
    return (
        <div className='row'>
            <h1 className='text-center py-5 text-warning'>Dashboard Status</h1>
            <div className="col-lg-6 col-md-6 col-sm-12 p-5">
                <ChartTwo></ChartTwo>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 p-5">
                <ChartOne></ChartOne>
            </div>
        </div>
    );
};

export default Dashboard;