import React from "react";
import "./MailsCategory.css";
import { AccountCircle, Delete, Drafts, Email, EmojiPeople, Error, ErrorOutline, MarkEmailRead, Payment, Receipt, Settings, StarBorderPurple500, Work} from "@mui/icons-material";
import { ListItem } from "@mui/material";

export default function MailsCategory() {
  return (
    <div className="mails-sidebar">
      <div className="mails-sidebarWrapper">
        <div className="sidebarMenu">
        <ListItem className="mails-h2">Mailboxes</ListItem>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Email className="sidebarIcon"/>
              Inbox
            </li>
            <li className="sidebarListItem">
              <MarkEmailRead className="sidebarIcon" />
              Sent
            </li>
            <li className="sidebarListItem">
            <Drafts className="sidebarIcon"/>
            Drafts
            </li>
            <li className="sidebarListItem">
            <Error className="sidebarIcon"/>
            Spam
            </li>  
            <li className="sidebarListItem">
            <Delete className="sidebarIcon"/>
            Delete
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
        <ListItem className="mails-h2">Filters</ListItem>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <StarBorderPurple500 className="sidebarIcon"/>
              Starred
            </li>
            <li className="sidebarListItem">
              <ErrorOutline className="sidebarIcon" />
              Important
         </li>
          </ul>
        </div>

        <div className="sidebarMenu">
        <ListItem className="mails-h2">Labels</ListItem>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              < EmojiPeople className="sidebarIcon"/>
             Personal
            </li>
            <li className="sidebarListItem">
              <Work className="sidebarIcon" />
              Work
            </li>
            <li className="sidebarListItem">
              <Payment className="sidebarIcon"/>
              Payment
            </li>
            <li className="sidebarListItem">
              <Receipt className="sidebarIcon"/>
              Invoices
            </li>
            <li className="sidebarListItem">
              <AccountCircle className="sidebarIcon"/>
              Account
            </li>
            <li className="sidebarListItem">
              <Settings className="sidebarIcon"/>
              Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
