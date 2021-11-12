import * as React from 'react';
import CountUp from 'react-countup';
import './brandCard.css';
import { Avatar } from '@mui/material';
import mastercard from '../../images/mastercard.svg';
import paypal from '../../images/paypal.svg';
import webmoney from '../../images/webmoney.svg';
import qiwi from '../../images/qiwi.svg';

export default function BrandCard(): JSX.Element {
  return (
      <div className="BrandCard">
    <div className="BrandCardItems">
            <span className="BrandCardTitle">
              <Avatar src={mastercard}/>&nbsp;&nbsp;Mastercard
            </span>
            <div className="AnalyticsContainer">
                <span className="AnalyticsViews">$<CountUp duration={20} start={0} separator=","
  decimal="," end={10251}/></span>
            </div>
            <span className="BrandSub">
                Payment done using Mastercard
            </span>
        </div>
        


        <div className="BrandCardItems">
            <span className="BrandCardTitle">
            <Avatar src={paypal}/>&nbsp;&nbsp;Paypal
            </span>
            <div className="AnalyticsContainer">
                <span className="AnalyticsViews">$<CountUp duration={20} start={0} separator=","
  decimal="," end={4899}/></span>
            </div>
            <span className="BrandSub">
            Payment done using Paypal
            </span>
        </div>




        <div className="BrandCardItems">
            <span className="BrandCardTitle">
            <Avatar src={qiwi}/>&nbsp;&nbsp;Qiwi
            </span>
            <div className="AnalyticsContainer">
                <span className="AnalyticsViews">$<CountUp duration={20} start={0} separator=","
  decimal="," end={1241}/></span>
            </div>
            <span className="BrandSub">
            Payment done using Qiwi
            </span>
        </div>





        <div className="BrandCardItems">
            <span className="BrandCardTitle">
            <Avatar src={webmoney}/>&nbsp;&nbsp;Webmoney
            </span>
            <div className="AnalyticsContainer">
                <span className="AnalyticsViews">$<CountUp duration={20} start={0} separator=","
  decimal="," end={1872}/></span>
            </div>
            <span className="BrandSub">
            Payment done using Webmoney
            </span>
        </div>
    </div>
  );
}