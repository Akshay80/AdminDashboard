import * as React from 'react';
// import Box from '@mui/material/Box';
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import CountUp from 'react-countup';
// import { data } from './card-data'
import './analyticsCard.css';
import { Visibility,Share, Mouse, ThumbUpAlt } from '@mui/icons-material';

export default function AnalyticsCard(): JSX.Element {
  return (
      <div className="AnalyticsCard">
    <div className="AnalyticsCardItems">
            <span className="AnalyticsCardTitle">
              <Visibility className="Icons" color="action"/>  Views
            </span>
            <div className="AnalyticsContainer">
                <span className="AnalyticsViews"><CountUp duration={20} start={0} separator=","
  decimal="," end={10289}/></span>
                <span className="AnalyticsRate">+<CountUp duration={15} start={0}
  decimal="." decimals={1} end={30.1}/>%
                <ArrowUpward className="analyticsIcon positive"/>
                </span>
            </div>
            <span className="analyticsSub">
                Compared to Last Month
            </span>
        </div>


        <div className="AnalyticsCardItems">
            <span className="AnalyticsCardTitle">
            <Share className="Icons" color="action"/>   Referred
            </span>
            <div className="AnalyticsContainer">
                <span className="AnalyticsViews"><CountUp duration={20} start={0} separator=","
  decimal="," end={24489}/></span>
                <span className="AnalyticsRate">-<CountUp duration={10} start={50}
  decimal="." decimals={1} end={11.4}/>%
                <ArrowDownward className="analyticsIcon negative"/>
                </span>
            </div>
            <span className="analyticsSub">
                Compared to Last Month
            </span>
        </div>




        <div className="AnalyticsCardItems">
            <span className="AnalyticsCardTitle">
            <Mouse className="Icons" color="action"/>  Clicks
            </span>
            <div className="AnalyticsContainer">
                <span className="AnalyticsViews"><CountUp duration={20} start={0} separator=","
  decimal="," end={29936}/></span>
                <span className="AnalyticsRate">+<CountUp duration={10} start={0}  end={95}/>%
                <ArrowUpward className="analyticsIcon positive"/>
                </span>
            </div>
            <span className="analyticsSub">
                Compared to Last Month
            </span>
        </div>





        <div className="AnalyticsCardItems">
            <span className="AnalyticsCardTitle">
            <ThumbUpAlt className="Icons" color="action"/>   Likes
            </span>
            <div className="AnalyticsContainer">
                <span className="AnalyticsViews"><CountUp duration={20} start={0} separator=","
  decimal="," end={10172}/></span>
                <span className="AnalyticsRate">+<CountUp duration={10} start={0}
  decimal="." decimals={1} end={92.3}/>%
                <ArrowUpward className="analyticsIcon positive"/>
                </span>
            </div>
            <span className="analyticsSub">
                Compared to Last Month
            </span>
        </div>
    </div>
  );
}