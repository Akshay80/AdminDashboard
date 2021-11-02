import React from 'react'
import './feature.css';
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

export default function FeaturedInfo() {
    return (
        <div className="featured">
        <div className="featuredItems">
            <span className="featuredTitle">
                Revenue
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$30,172</span>
                <span className="featuredMoneyRate">-11.4%
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
                <span className="featuredMoney">$32,725</span>
                <span className="featuredMoneyRate">+50.3%
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
                <span className="featuredMoney">$33,034</span>
                <span className="featuredMoneyRate">+12.87%
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
