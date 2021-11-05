import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ArrowUpward } from '@mui/icons-material';
// import { data } from './card-data'

export default function AnalyticsCard() {
  return (
    <Card sx={{ minWidth: 200 }} className="m-2">
      <CardContent> 
        <Typography variant="h5" component="div">
        Visitors
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          25,000
        </Typography>
        <Typography variant="body2">
        <span className="featuredMoneyRate text-start">+14.3% 
                <ArrowUpward className="featuredIcon"/>
                </span>
         since last week
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}