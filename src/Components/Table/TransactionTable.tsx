import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './transaction.css'
import mastercard from '../../images/mastercard.svg';
import paytm from '../../images/paytm.svg';
import paypal from '../../images/paypal.svg';
import webmoney from '../../images/webmoney.svg';
import qiwi from '../../images/qiwi.svg';


function createData(
  dateandtime: string,
  url: string,
  payment: string,
  status: string,
  amount: string,
  
) {
  return { dateandtime, payment, status, amount, url };
}

const rows = [
  createData('17 Feb 2020, 16:30', mastercard, 'Mastercard', 'Done', '- 400.00$'),
  createData('14 Feb 2020, 12:39', paypal , 'PayPal', 'Pending', '- 250.00$'),
  createData('12 Feb 2020, 09:45', qiwi, 'Qiwi', 'Pending', "+ 1000$"),
  createData('10 Feb 2020, 12:39', webmoney,  'WebMoney', 'Done', '- 250$'),
  createData('06 Feb 2020, 08:37', paytm, 'Paytm', 'Pending', '+ 750$'),
];

export default function TransactionTable(): JSX.Element {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell className="tablesRow">Date and Time</TableCell>
            <TableCell align="right" className="tablesRow">Identity</TableCell>
            <TableCell align="right" className="tablesRow">Payment</TableCell>
            <TableCell align="right" className="tablesRow">Status</TableCell>
            <TableCell align="right" className="tablesRow">Amount($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              
              key={row.dateandtime}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                {row.dateandtime}
              </TableCell>
              <TableCell align="right"><img src={row.url} alt="" width="35" /></TableCell>
              <TableCell align="right">{row.payment}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}