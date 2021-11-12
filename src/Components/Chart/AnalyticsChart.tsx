import React from "react";
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

  
   const AnalyticsChart = () => {
  
// Sample data
const data = [
  { argument: 'January', value: 50 },
  { argument: 'February', value: 56 },
  { argument: 'March', value: 5 },
  { argument: 'April', value: 68 },
  { argument: 'May', value: 10 },
  { argument: 'June', value: 35 },
  { argument: 'July', value: 40 },
  { argument: 'August', value: 60 },
  { argument: 'September', value: 53 },
  { argument: 'October', value: 70 },
  { argument: 'November', value: 7 },
  { argument: 'December', value: 73 },
];
return (
    <Paper>
    <Chart
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis />
      <BarSeries valueField="value" argumentField="argument" />
      <Animation duration={10000}/>
    </Chart>
    
  </Paper>
);
}
export default AnalyticsChart