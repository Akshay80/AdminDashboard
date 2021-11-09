import React, { useEffect, useState } from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { EmailData } from './EmailData';

interface EmailDataType {
name: 'string'
subject: 'string'
}

function EmailCard() {
    const [data, setData] = useState<EmailDataType[]>([]);
    // console.log('data',data);
  console.log("Data :", EmailData);
  console.log("Mydata : ",data);
  

    return (
        <React.Fragment>
          {EmailData.map(item => 
        <CardContent style={{backgroundColor: "#f2f2f2"}}>
          <Typography component="p">
            {item.name}
          </Typography>
          <Typography color="text.secondary">
          {item.subject}
          </Typography>
        <CardActions>
          <Button size="small">View</Button>
        </CardActions>
        </CardContent>
        )}
      </React.Fragment>
    
    )
}

export default EmailCard
