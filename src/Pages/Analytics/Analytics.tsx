import * as React from "react";
import "./analytics.css";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import { DateTimePicker } from "@mui/lab";
import type {} from "@mui/lab/themeAugmentation";
import AnalyticsCard from "../../Components/Cards/AnalyticsCard";
import  AnalyticsChart  from "../../Components/Chart/AnalyticsChart";
import TrafficChart from "../../Components/Chart/TrafficChart";
import { Typography } from "@mui/material";

export default function Analytics() {
  const [value, setValue] = React.useState(null);

  return (
    <div className="container-wrapper">
      <div className="analytics-db">
        <div className="analytics-db-heading">
          <Typography variant="h5"> Analytics Dashboard </Typography>
          <Typography variant="body1"> Welcome User 👋 </Typography>
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
      <div className="analytcis-cards">
        <AnalyticsCard />
      </div>
      <div className="TitleChart">
          <Typography variant="h5">Monthly sales value in thousands </Typography>
      <AnalyticsChart />  
      </div>
      <div className="TrafficTitle">
            <Typography variant="h5">Traffic Sources of the Website.</Typography>
              <Typography variant="body1" style={{marginBottom:20}}>( Mobile/Desktop Data )</Typography>
      <TrafficChart />
      </div>
      </div>
  );
}