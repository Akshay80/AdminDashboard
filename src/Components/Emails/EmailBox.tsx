import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./EmailBox.css";
import { Person, Reply, ReplyAll, ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";

function EmailBox() {
  return (
    <React.Fragment>
      <CardContent className="emailbox-card">
        <Typography className="emailbox-subject">Subject</Typography>
        <Typography className="emailbox-heading">
          <Person className="sidebarIcon" />
          Sender's Name
        </Typography>
        <Typography className="emailbox-text" color="text.secondary">
          In incididunt est enim amet eu nisi aliquip proident amet. Adipisicing adipisicing minim adipisicing aliqua dolore id. Est mollit elit Lorem exercitation dolor dolor cillum irure consectetur sit nulla eu laboris ad. Esse aliqua elit mollit ipsum esse amet cupidatat tempor. Mollit commodo deserunt ut dolor ipsum deserunt pariatur in qui exercitation laborum sunt exercitation sunt. Commodo non mollit laborum dolor irure consectetur ex do et quis quis.
          <div className="mail-action-buttons">
            <Button className="mail-action-button" variant="outlined"><Reply/> Reply</Button>
            <Button className="mail-action-button" variant="outlined"><ReplyAll/>Reply All</Button>
            <Button className="mail-action-button" variant="outlined">Forward<ArrowForward/></Button>
          </div>
        </Typography>
      </CardContent>
    </React.Fragment>
  );
}

export default EmailBox;
