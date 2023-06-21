import React, {useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { DataGrid, GridToolbar,GridColDef, GridValueGetterParams  } from "@mui/x-data-grid";

import QNData from './QN.json'
type CustomDataGridProps = {
  rows: any[];
  columns: GridColDef[];
  columnTypes?: Record<string, { 
    valueFormatter?: (params: { value: any }) => string;
    cellClassName?: string;
    cellStyle?: React.CSSProperties;
  }>;
};

const Notification = () => {
    const data = QNData["QN"].map((row, index) => ({
  ...row,
  id: row.id // or use any other unique value from your data
  }));
    const [rows, setRows] = useState(data);

  
    useEffect(() => {
         setRows(data);
        // setData(boardData);
    // axios.get("/api/getCABoardData").then((response) => {
    //   setData(response.data);
    // });
  }, []);
    
const columns  = [
  { field: 'Status/Comment', headerName: 'Status/Comment', width: 180,},
  { field: 'QN', headerName: 'QN', type: 'number', width: 120 },
  { field: 'Serial Number', headerName: 'Serial Number', width: 160 },
  { field: 'Material Number', headerName: 'Material Number', type: 'number', width: 160 },
  { field: 'Part Description', headerName: 'Part Description', width: 240},
  { field: 'Drawing', headerName: 'Drawing', width: 180 },
  { field: 'Revision', headerName: 'Revision', type: 'number', width: 120 },
  { field: 'Latest Rev', headerName: 'Latest Rev', type: 'number', width: 120 },
  { field: 'Specific Failure', headerName: 'Specific Failure', width: 340, 
    cellClassName: "cell-wrap", 
    cellStyle: { whiteSpace: "pre-wrap", wordWrap: "break-word" },
    valueGetter: (params: GridValueGetterParams) => params.row['Specific Failure']
},
  { field: 'Specific TI', headerName: 'Specific TI', width: 160 },
  { field: 'TI Failed Step', headerName: 'TI Failed Step', type: 'number', width: 160 },
  { field: 'Date of Event', headerName: 'Date of Event', type: 'text', width: 160 },
  { field: 'Other Information', headerName: 'Other Information', width: 180 },
];
  
const customDataGridProps: CustomDataGridProps = {
    rows,
    columns,
    columnTypes: {
      string: {
        cellClassName: "cell-wrap",
        valueFormatter: ({ value }: { value: any }) => {
          return value.length > 50 ? value.substring(0, 50) + "..." : value;
        },
        cellStyle: { whiteSpace: "pre-wrap", wordWrap: "break-word" },
      },
    },
  };
  
  return (
    <Container maxWidth="lg" sx={{ mt:2 }} disableGutters={true}>
        <div style={{  height: '900px',width: '120%' }}>
         <h1>{rows.map(row=>row.id)}</h1>
        <DataGrid {...customDataGridProps} key="id" autoHeight slots={{toolbar: GridToolbar}} />
          
        </div>
    </Container>
  )
  
 
}

// const columns  = [
//   { field: 'Status/Comment', headerName: 'Status/Comment', width: 180,},
//   { field: 'QN', headerName: 'QN', type: 'number', width: 120 },
//   { field: 'Serial Number', headerName: 'Serial Number', width: 160 },
//   { field: 'Material Number', headerName: 'Material Number', type: 'number', width: 160 },
//   { field: 'Part Description', headerName: 'Part Description', width: 240 },
//   { field: 'Drawing', headerName: 'Drawing', width: 180 },
//   { field: 'Revision', headerName: 'Revision', type: 'number', width: 120 },
//   { field: 'Latest Rev', headerName: 'Latest Rev', type: 'number', width: 120 },
//   { field: 'Specific Failure', headerName: 'Specific Failure', width: 240,wrapText: true },
//   { field: 'Specific TI', headerName: 'Specific TI', width: 160 },
//   { field: 'TI Failed Step', headerName: 'TI Failed Step', type: 'number', width: 160 },
//   { field: 'Date of Event', headerName: 'Date of Event', type: 'text', width: 160 },
//   { field: 'Other Information', headerName: 'Other Information', width: 180 },
// ];

// const columns = [
//     { field: 'status', headerName: 'Status/Comment', width: 180 },
//     { field: 'qn', headerName: 'QN', type: 'number', width: 120 },
//     { field: 'serialNumber', headerName: 'Serial Number', width: 160 },
//     { field: 'materialNumber', headerName: 'Material Number', type: 'number', width: 160 },
//     { field: 'partDescription', headerName: 'Part Description', width: 240 },
//     { field: 'drawing', headerName: 'Drawing', width: 180 },
//     { field: 'rev', headerName: 'Revision', type: 'number', width: 120 },
//     { field: 'latestRev', headerName: 'Latest Rev', type: 'number', width: 120 },
//     { field: 'specificFailure', headerName: 'Specific Failure', width: 240 },
//     { field: 'specificTI', headerName: 'Specific TI', width: 160 },
//     { field: 'tiFailedStep', headerName: 'TI Failed Step', type: 'number', width: 160 },
//     { field: 'dateOfEvent', headerName: 'Date of Event', type: 'text', width: 160 },
//     { field: 'otherInformation', headerName: 'Other Information', width: 180 },
//   ];


export default Notification