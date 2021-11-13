import React from 'react'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { EmailData } from './EmailData';
import './EmailCard.css';

function EmailCard(): JSX.Element {

    return (
     
        <React.Fragment>
          {EmailData.map(item => 
         <CardContent className="email-card" >
          <Typography className="email-heading">
            {item.name}
          </Typography>
          <Typography className="email-subject" >
          {item.subject}
          </Typography>
          <Typography className="email-text" color="text.secondary">
          {item.text}
          </Typography>
        </CardContent>
        )}
      </React.Fragment>
    )
}

export default EmailCard
