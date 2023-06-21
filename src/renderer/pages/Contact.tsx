import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
const Contact = () => {
  return (
   <Container maxWidth="md" sx={{ mt: 8 }}>
     
      {/* <Typography variant="h1" textAlign="center" sx={{ mt: 8 }}>
         Contact Page
      </Typography> */}
     
      <div style={{ height: '400', width: '150%' }}>
        <DataGrid rows={rows} columns={columns} slots={{toolbar: GridToolbar}}/>
      </div>
    </Container>
  );
};
const columns = [
  { field: 'name', headerName: 'Nom Du Joueur', width: 180, editable: false },
  { field: 'Q1', headerName: '', type: 'number', editable: true },
  { field: 'Q2', headerName: 'Q2', type: 'number', editable: true },
  { field: 'Q3', headerName: 'Q3', type: 'number', editable: true },
  { field: 'Q4', headerName: 'Q4', type: 'number', editable: true },
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: randomTraderName(),
    Q1: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    Q1: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    Q1: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    Q1: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    Q1: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];
export default Contact;
