import { Add, Menu } from '@mui/icons-material'
import { Button, Grid, ListItem, Pagination} from '@mui/material'
import React from 'react'
import EmailCard from '../../Components/Emails/EmailCard'
import MailsCategory from '../../Components/MailsCategory/MailsCategory'
import './Mails.css'

function Mails() {
    return (
        <Grid container spacing={2}>
        <Grid item  md={3}>
          <ListItem className="mails-h1">Mailbox</ListItem>
          <div className="compose-mail">
          <Button   style={{
        borderRadius: 15,
        padding: "5px 20px",
      color: 'white'
    }}
    variant="contained"><Add /> Compose</Button>
          </div>
        
          <MailsCategory />

        </Grid>
        <Grid item md={3} style={{backgroundColor:'#f2f2f2'}}>
            <div className="inbox-container">
            <Menu />
          <ListItem>Inbox</ListItem>
          </div>
          <EmailCard />
        </Grid>
        <Grid item md={6}>
          <ListItem>Email Text</ListItem>
        </Grid>
      </Grid>
    )
}

export default Mails
