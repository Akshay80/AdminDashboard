import React from "react";
import "./sidebar.css";
import { Link } from 'react-router-dom'
import { LineStyle, TrendingUp, Timeline, PersonOutline, MailOutline, Report, Storefront, AttachMoney, DynamicFeed, BarChart, ChatBubbleOutline, WorkOutline} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon"/>
              <Link to="/">
              Home
              </Link>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <Link to="/dashboard/analytics">
              Analytics
              </Link>
            </li>
            <li className="sidebarListItem">
            <TrendingUp className="sidebarIcon"/>
            <Link to="/dashboard/sales/ordered-items">
              Sales
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <PersonOutline className="sidebarIcon"/>
              <Link to="/users">
              Users
              </Link>
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon"/>
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MailOutline className="sidebarIcon"/>
              <Link to="/mails">
             Mail
             </Link>
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon"/>
              <Link to="/messages">
              Messages
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <WorkOutline className="sidebarIcon"/>
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
