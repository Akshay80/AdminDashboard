import React from 'react'
import './feature.css';
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import CountUp from 'react-countup';

export default function FeaturedInfo() {
    return (
        <div className="featured">
        <div className="featuredItems">
            <span className="featuredTitle">
                Revenue
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$<CountUp duration={20} start={0} separator=","
  decimal="," end={30172}/></span>
                <span className="featuredMoneyRate">-<CountUp duration={10} start={20}
  decimal="." decimals={1} end={11.4}/>%
                <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">
                Compared to Last Month
            </span>
        </div>


        <div className="featuredItems">
            <span className="featuredTitle">
                Sales
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$<CountUp duration={20} start={0} separator=","
  decimal="," end={32725}/></span>
                <span className="featuredMoneyRate">+
                <CountUp duration={20} start={10.1}
  decimal="." decimals={1} end={50.3}/>%
                <ArrowUpward className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">
                Compared to Last Month
            </span>
        </div>


        <div className="featuredItems">
            <span className="featuredTitle">
                Cost
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$
                <CountUp duration={20} start={0} separator=","
  decimal="," end={33034}/></span>
                <span className="featuredMoneyRate">+
                <CountUp duration={20} start={0}
  decimal="." decimals={2} end={12.87}/>%
                <ArrowUpward className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">
                Compared to Last Month
            </span>
        </div>
        
        </div>
    )
}
