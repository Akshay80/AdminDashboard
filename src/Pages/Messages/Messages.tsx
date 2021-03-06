import { Grid } from '@mui/material'
import React from 'react'
import ChatBody from './ChatBody/ChatBody'
import ChatList from './ChatList/ChatList'
// import ChatProfile from './ChatProfile/ChatProfile'
import './Messages.css'

function Messages() {

    return (
      <div className="Messages">
        <Grid container spacing={2} style={{backgroundColor:"#fafafa"}}>
        <Grid  item md={3}>
         <ChatList />
        </Grid>
        <Grid  item md={9} >
       <ChatBody />
        </Grid>
        {/* <Grid  item md={3}>
        <ChatProfile />
        </Grid> */}
      </Grid>
      </div>
    )
}

export default Messages
