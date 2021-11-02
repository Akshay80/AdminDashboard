import React from 'react'
import './widgetlarge.css'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 130},
  { field: 'firstName', headerName: 'First name', width: 180 },
  { field: 'lastName', headerName: 'Last name', width: 180 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 120,
  },
];

const rows = [
  { id: 1, firstName: 'Akshay', lastName: 'Bisht', age: 35 },
  { id: 2, firstName: 'Suraj', lastName: 'Singh', age: 42 },
  { id: 3, firstName: 'Pooja', lastName: 'Mam', age: 45 },
  { id: 4, firstName: 'Sachin', lastName: 'Bisht', age: 16 },
  { id: 5, firstName: 'Shivraj',lastName: 'Kaintura', age: null },
  { id: 6, firstName: 'Mohommad',lastName: 'Ahmad', age: 150 },
  { id: 7, firstName: 'Kripal', lastName: 'Ramola', age: 44 },
  { id: 8, firstName: 'Chandani',lastName: 'Bohra', age: 36 },
  { id: 9, firstName: 'Saurabh', lastName: 'Bhatt', age: 65 },
  { id: 10, firstName: 'Udit', lastName: 'Handa', age: 17 },
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
