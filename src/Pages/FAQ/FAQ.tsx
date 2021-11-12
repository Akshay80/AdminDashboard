import React from 'react'
import './faq.css';
import Accordian from '../../Components/Accordian/Accordian';
import Typography from '@mui/material/Typography'

export default function FAQ() {
    return (
        <div className="FAQ">
            <div className="FAQTitle">
            <Typography variant="h5" align="center">
            Frequently Asked Questions (FAQ's)
            </Typography>
            <br/>
            <Typography variant="body1" align="justify">
            Do you have a question about your subscription, a recent order, products, shipping or you want to suggest a new magazine? Here you can find some helpful answers to frequently asked questions (FAQ).
                </Typography>
                <br/>
            </div>
           <Accordian />
        </div>
    )
}
