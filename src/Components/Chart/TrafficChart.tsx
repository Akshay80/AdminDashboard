import React from 'react';
import { BarChart, Bar, XAxis, YAxis, 
    CartesianGrid, ResponsiveContainer } from 'recharts';
    import './chart.css';
  
const TrafficChart = () => {
  
    // Sample data
    const data = [
        { name: 'Google', x: 12, y: 23, z: 122 },
        { name: 'Facebook', x: 22, y: 3, z: 73 },
        { name: 'LinkedIn', x: 13, y: 15, z: 32 },
        { name: 'Instagram', x: 44, y: 35, z: 23 },
        { name: 'Reddit', x: 35, y: 45, z: 20 },
        { name: 'Medium', x: 62, y: 25, z: 29 },
        { name: 'Pinterest', x: 37, y: 17, z: 61 },
        { name: 'Twitter', x: 28, y: 32, z: 45 },
        { name: 'Pocket', x: 19, y: 43, z: 93 },
    ];
  
    return (
            <ResponsiveContainer  className="ChartContainer" aspect={4/1}>
        <BarChart data={data} >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="x" stackId="a" fill="#8884d8" animationDuration={10000}/>
            <Bar dataKey="y" stackId="a" fill="#82ca9d" animationDuration={10000}/>
        </BarChart>
        </ResponsiveContainer>
    );
}
  
export default TrafficChart;