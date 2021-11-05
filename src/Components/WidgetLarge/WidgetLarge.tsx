import React from 'react'
import './widgetlarge.css'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100},
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
  },
];

const rows = [
  { id: 1, firstName: 'Akshay', lastName: 'Bisht', age: 26 },
  { id: 2, firstName: 'Suraj', lastName: 'Singh', age: 22 },
  { id: 3, firstName: 'Pooja', lastName: 'Mam', age: 30 },
  { id: 4, firstName: 'Sachin', lastName: 'Bisht', age: 23 },
  { id: 5, firstName: 'Shivraj',lastName: 'Kaintura', age: 28 },
  { id: 6, firstName: 'Mohommad',lastName: 'Ahmad', age: 25 },
  { id: 7, firstName: 'Kripal', lastName: 'Ramola', age: 29 },
  { id: 8, firstName: 'Chandani',lastName: 'Bohra', age: 24 },
  { id: 9, firstName: 'Saurabh', lastName: 'Bhatt', age: 35 },
  { id: 10, firstName: 'Udit', lastName: 'Handa', age: 36 },
];


export default function WidgetLarge(): JSX.Element {
  return (
    <div className="WidgetLg">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}
