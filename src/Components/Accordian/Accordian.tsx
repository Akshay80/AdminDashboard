import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Accordian() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What does LOREM mean?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          ‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Where can I subscribe to your newsletter?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We often send out our newsletter with news and great offers. We will never disclose your data to third parties and you can unsubscribe from the newsletter at any time. Subscribe here to our newsletter.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Where can in edit my address?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Can I order a free copy of a magazine to sample?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Unfortunately, we’re unable to offer free samples. As a retailer, we buy all magazines from their publishers at the regular trade price. However, you could contact the magazine’s publisher directly to ask if they can send you a free copy.
          </Typography>
        </AccordionDetails>
      </Accordion>






      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Do you accept orders via Phone or E-mail?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, we are an online shop and we do not take orders via Phone, E-mail or Social Media.
          </Typography>
        </AccordionDetails>
      </Accordion>








      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Can I reserve a magazine via Phone or E-mail?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, this isn’t possible. We want all of our magazines to be available for all customers. So you have to order the magazine.
          </Typography>
        </AccordionDetails>
      </Accordion>







      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Where on your website can I open a customer account?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can create a new account at the end of the order process or on the following page: Create new account. You can view all of your orders and subscriptions in your customer account. You can also change your addresses and your password.
          </Typography>
        </AccordionDetails>
      </Accordion>






      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>Do I need to create an account to make an order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, you don’t have to create an account. But there are a few advantages if you create an account.

You never have to enter your billing and shipping address again
Find all of your orders, subscriptions and addresses in your account
Download invoices of your orders
          </Typography>
        </AccordionDetails>
      </Accordion>






      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>What are your opening hours?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The products in our shop can only be ordered online at present and are sent out by Swiss Post.
          </Typography>
        </AccordionDetails>
      </Accordion>





      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography>Do you also have a physical store?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No, we don’t have a physical store location at the moment. We accept only orders through our online shop and we’re shipping all orders with the Swiss Post Service. Please visit our shipping section for more details.

From time to time you will find us at design fairs and popup markets in Switzerland. Subscribe to our newsletter and you’ll receive the latest news.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}