import React from 'react'
import WidgetLarge from "../../Components/WidgetLarge/WidgetLarge";
import Chart from "../../Components/Chart/Chart";
import FeaturedInfo from "../../Components/Featured/FeaturedInfo";
import WidgetSmall from "../../Components/WidgetSmall/WidgetSmall";
import './home.css'

export default function Home() {
  return (
    <div className="home">
    <FeaturedInfo />
    <Chart />
    <div className="homeWidget">
      <WidgetSmall />
      <WidgetLarge />
    </div>
  </div>
  );
}
