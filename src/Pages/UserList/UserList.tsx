import React, {useState} from "react";
import "./userlist.css";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { UserRows } from "./dummyData";
import { Link } from "react-router-dom";

export default function UserList(): JSX.Element {
  const [data, setData] = useState(UserRows);
  
    function handleDelete(ids:number) {
        setData(data.filter(item => item.id !== ids));
    }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "username", headerName: "Username", width: 180 },
    { field: "email", headerName: "Email", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transactions",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: GridValueGetterParams): JSX.Element => {
        return (
          <>
            <div className="UserListBtn">
            <Tooltip title="Edit" placement="left">
              <Link to={"/user/" + params.row.id}>
                <Edit className="editIcon" color="action" />
              </Link>
            </Tooltip>
              <Tooltip title="Delete" placement="right">
              <Delete className="deleteIcon" color="error" onClick={() => {handleDelete(params.row.id)}}/>
              </Tooltip>
            </div>
          </>
        );
      },
    },
  ];

  

  return (
    <div className="UserList">
      <div style={{ height: '100%', width: "100%" }}>
        <DataGrid
        style={{border: 0}}
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          disableColumnSelector
          disableDensitySelector
          disableVirtualization
          disableColumnMenu
          />
      </div>
    </div>
  );
}
