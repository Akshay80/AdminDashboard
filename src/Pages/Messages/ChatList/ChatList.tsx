import * as React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  ImageListItem,
  TextField,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { ChatListUser } from "./ChatListUser";
import "./ChatList.css";
import { Box } from "@mui/system";

interface ChatListItemsType {
  image: "string";
  name: "string";
  active: "string";
  isOnline: "boolean";
  id: "number";
}

function ChatList() {
  const [data, setData] = React.useState<ChatListItemsType[]>([]);

  return (
    <div className="chat-list-items">
      <Button variant="contained">
        <Add />
        New Chat
      </Button>
      <h3 className="chat-text"> Chats </h3>
      <Box mt={1}>
        <TextField id="filled-basic" label="Search Chat" variant="filled" />
      </Box>
      <React.Fragment>
        {ChatListUser.map((item) => (
          <Card className="chat-list-card" sx={{ display: "flex" }} style={{backgroundColor:"#fafafa", marginTop:"10px", borderBottom: "1px solid grey", boxShadow:"none", cursor:"pointer"}}>
            <Box sx={{ display: "flex" }} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
              <CardMedia
                component="img"
                sx={{ width: 50, height: 50}}
                image={item.image}
                alt=""
                style={{borderRadius:"50%", marginLeft:"8px", backgroundColor:"#fafafa" }}
              />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h6" style={{fontSize:"14px"}}>
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{fontSize:"12px"}}
                >
                  {item.active}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        ))}
      </React.Fragment>
    </div>
  );
}

export default ChatList;
