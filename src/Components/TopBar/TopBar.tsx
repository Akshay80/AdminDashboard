import React from "react";
import "./topbar.css";
import logo from "../../images/logo_transparent.png";
import user from "../../images/user.jpg";
import { Badge, Avatar } from "@mui/material";
import { NotificationsNone, Settings, Language } from "@mui/icons-material";

export default function TopBar() {
  return (
    <div>
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src={logo} alt="logo" width="120" height="120" style={{objectFit:"cover"}}/>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Badge className="menus" badgeContent={2} color="error">
              <NotificationsNone color="action" />
            </Badge>
            <Badge className="menus" badgeContent={2} color="error">
           
              <Language color="action" />
             
            </Badge>
            <Settings className="menus" color="action" />
            <Avatar
              className="menus user"
              alt="User_Image"
              src={user}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
