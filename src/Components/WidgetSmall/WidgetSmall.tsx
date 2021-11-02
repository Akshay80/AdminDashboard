import React from "react";
import "./widgetsmall.css";
import userimage1 from "../../images/user1.jpg";
import userimage2 from "../../images/user2.jpg";
import userimage3 from "../../images/user3.jpg";
import userimage4 from "../../images/user4.jpg";
import userimage5 from "../../images/user5.jpg";
import { Visibility } from "@mui/icons-material";

export default function WidgetSmall(): JSX.Element {
  return (
    <div className="WidgetSm">
      <span className="WidgetSmTitle">Active Users</span>
      <ul className="WidgetSmList">
        <li className="WidgetSmListItems">
          
          <img
            src={userimage1}
            alt="user_image"
            className="WidgetSmUserImage"
          />
          
          <div className="WidgetSmUser">
            <span className=" WidgetSmUsername">Akshay Bisht </span>
            <span className="WidgetSmUserTitle">Software Engineer </span>
            <div className="status"><p>Status: <span className="online" /></p></div>
            
          </div>
          <button className="WidgetSmButton">
            <Visibility className="smallIcon" />
            Display
          </button>
        </li>

        <li className="WidgetSmListItems">
          <img
            src={userimage2}
            alt="user_image"
            className="WidgetSmUserImage"
          />
          <div className="WidgetSmUser">
            <span className=" WidgetSmUsername">Mohommad Ahmed</span>
            <span className="WidgetSmUserTitle">Software Engineer</span>
            <div className="status"><p>Status: <span className="online" /></p></div>
          </div>
          <button className="WidgetSmButton">
            <Visibility className="smallIcon" />
            Display
          </button>
        </li>

        <li className="WidgetSmListItems">
          <img
            src={userimage3}
            alt="user_image"
            className="WidgetSmUserImage"
          />
          <div className="WidgetSmUser">
            <span className=" WidgetSmUsername">Sachin Bisht</span>
            <span className="WidgetSmUserTitle">Software Consultant</span>
            <div className="status"><p>Status: <span className="offline" /></p></div>
          </div>
          <button className="WidgetSmButton">
            <Visibility className="smallIcon" />
            Display
          </button>
        </li>

        <li className="WidgetSmListItems">
          <img
            src={userimage4}
            alt="user_image"
            className="WidgetSmUserImage"
          />
          
          <div className="WidgetSmUser">
            <span className=" WidgetSmUsername">Suraj</span>
            <span className="WidgetSmUserTitle">Software Consultant</span>
            <div className="status"><p>Status: <span className="online" /></p></div>
          </div>
          <button className="WidgetSmButton">
            <Visibility className="smallIcon" />
            Display
          </button>
        </li>

        <li className="WidgetSmListItems">
          <img
            src={userimage5}
            alt="user_image"
            className="WidgetSmUserImage"
          />
          <div className="WidgetSmUser">
            <span className=" WidgetSmUsername">Shivraj Singh</span>
            <span className="WidgetSmUserTitle">Software Consultant</span>
            <div className="status"><p>Status: <span className="offline" /></p></div>
          </div>
          <button className="WidgetSmButton">
            <Visibility className="smallIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
