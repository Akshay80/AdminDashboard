import React from "react";
import "./topbar.css";
import logo from "../../images/logo_transparent.png";
import user from "../../images/user.png";
import { Badge, Avatar, Tooltip, IconButton,Menu, MenuItem,ListItemIcon } from "@mui/material";
import { NotificationsNone, Settings, Language, Logout} from "@mui/icons-material";

export default function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    

    setTimeout(() => {
      localStorage.removeItem('uid');
    localStorage.removeItem('url');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('Token');
      window.location.href="/login"
    }, 2000);
  }

  const userImage = localStorage.getItem('url')
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
            <Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="small" >
            <Avatar
              className="menus user"
              alt="User_Image"
              src={userImage? userImage: user}
            />
            </IconButton>
            </Tooltip>

            <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
          <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
