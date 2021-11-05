import * as React from "react";
import "./Analytics.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import { DateTimePicker } from "@mui/lab";
import type {} from "@mui/lab/themeAugmentation";
import AnalyticsCard from "../../Components/Cards/AnalyticsCard/AnalyticsCard";
import  AnalyticsChart  from "../../Components/Chart/AnalyticsChart";
import TrafficChart from "../../Components/Chart/TrafficChart";

export default function Analytics() {
  const [value, setValue] = React.useState(null);

  return (
    <div className="container-wrapper">
      <div className="analytics-db">
        <div className="analytics-db-heading">
          <h1>Analytics Dashboard</h1>
          <p>Welcome </p>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Select Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="analytcis-cards m-5">
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
      <div>
          <h4>Monthly sales value in thousands </h4>
      <AnalyticsChart />  
      </div>
      <div className="mt-5">
            <h4>Traffic Sources of the Website.</h4>
              <p>Mobile/Desktop Data</p>
      <TrafficChart />
      </div>
      </div>
  );
}
