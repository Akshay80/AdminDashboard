import React from "react";
import "./sidebar.css";
import {Link} from 'react-router-dom'
import { LineStyle, TrendingUp, Timeline, PersonOutline, MailOutline, Storefront, AttachMoney, HelpOutline, ChatBubbleOutline} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="sidebarListItem active">
              <LineStyle className="sidebarIcon"/>
              Home
            </Link>
            <Link to="/analytics" className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </Link>
            <Link to="/dashboard/sales/ordered-items" className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Sales
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="sidebarListItem active">
              <PersonOutline className="sidebarIcon"/>
              Users
            </Link>
            <Link to="/products" className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Products
            </Link>
            <Link to="/transactions" className="sidebarListItem">
              <AttachMoney className="sidebarIcon"/>
              Transactions
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link to="/mails" className="sidebarListItem active">
              <MailOutline className="sidebarIcon"/>
             Mail
            </Link>
            <Link to="/faq" className="sidebarListItem">
              <HelpOutline className="sidebarIcon" />
              FAQ
            </Link>
            <Link to="/messages" className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon"/>
              Messages
            </Link>
          </ul>
        </div>

      </div>
    </div>
  );
}
