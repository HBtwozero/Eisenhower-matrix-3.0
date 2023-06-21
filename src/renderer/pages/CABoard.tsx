import React, {useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import boardData from './CABoard.json'

export const CABoard = () => {
   const data = boardData["CA Board"].map((row, index) => ({
  ...row,
  id: row.PCA // or use any other unique value from your data
  }));
    const [rows, setRows] = useState(data);

    useEffect(() => {
         setRows(data);
        // setData(boardData);
    // axios.get("/api/getCABoardData").then((response) => {
    //   setData(response.data);
    // });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt:2 }} disableGutters={true}>
        <div style={{  height: '900',width: '120%' }}>
         <DataGrid rows={rows}  columns={columns} slots={{toolbar: GridToolbar}}/>
        </div>
    </Container>
  )
}

const columns = [
    { field: 'Circuit', headerName: 'Circuits', width: 180, type: 'Text', editable: true },
    { field: 'PCA', headerName: 'PCA', type: 'Number', width: 180, editable: true },
    { field: 'Drawing 1', headerName: 'Drawing 1', type: 'Text', width: 180, editable: true },
    { field: 'Purchased Part', headerName: 'Purchased Part', type: 'Text', width: 180, editable: true },
    { field: 'Schematic', headerName: 'Schematic', type: 'Text', width: 180, editable: true },
    { field: 'Spare', headerName: 'Spare', type: 'Text', width: 180, editable: true },
    { field: 'Current Rev ', headerName: 'Current Rev', type: 'Text', width: 180, editable: true },
    { field: 'TR', headerName: 'TR', type: 'Text', width: 180, editable: true },
    { field: 'TI', headerName: 'TI', type: 'Text', width: 180, editable: true },
    { field: 'Design Doc', headerName: 'Design Doc', type: 'Text', width: 180, editable: true },
    { field: 'CA Test SW', headerName: 'CA Test SW', type: 'Text', width: 180, editable: true },
    { field: 'Spec for Programmed IC', headerName: 'Spec for Progr IC', type: 'Text', width: 180, editable: true },
    { field: 'App or Bootloader Version', headerName: 'App/Boot Version', type: 'Text', width: 180, editable: true },
    { field: 'Location of App or Bootloader File', headerName: 'Location of App/Boot File', type: 'Text', width: 180, editable: true },
    { field: 'Parts List', headerName: 'Parts List', type: 'Text', width: 180, editable: true },
  ];
// const columns =[
//   { field: 'Board', headerName: 'Circuits', width: 180, type: 'Text', editable: true },
//   { field: 'PCA', headerName: 'PCA', type: 'Number', width: 180, editable: true },
//   { field: 'PCA_w_bracket', headerName: 'PCA w bracket', type: 'Number', width: 180, editable: true },
//   { field: 'Drawing 1', headerName: 'Drawing 1', type: 'Text', width: 180, editable: true },
//   { field: 'Purchased_Part', headerName: 'Purchased Part', type: 'Text', width: 180, editable: true },
//   { field: 'Schematic', headerName: 'Schematic', type: 'Text', width: 180, editable: true },
//   { field: 'Spare', headerName: 'Spare', type: 'Text', width: 180, editable: true },
//   { field: 'Current_rev', headerName: 'Current Rev', type: 'Text', width: 180, editable: true },
//   { field: 'Tool_Release', headerName: 'TR', type: 'Text', width: 180, editable: true },
//   { field: 'Test_Intruction', headerName: 'TI', type: 'Text', width: 180, editable: true },
//   {field: 'Design_Doc', headerName: 'Design Doc',type: 'date', width: 180, editable: true,},
//   { field: 'Ca_Test_Sotware', headerName: 'CA Test SW', type: 'Text', width: 180, editable: true },
//   { field: 'Ca_Spec', headerName: 'Spec for Progr IC', type: 'Text', width: 180, editable: true },
//   { field: 'Ca_App_Version', headerName: 'App/Boot Version', type: 'Text', width: 180, editable: true },
//   { field: 'Ca_App_Location', headerName: 'Location of App/Boot File', type: 'Text', width: 180, editable: true },
//   { field: 'Ca_Schematic_file', headerName: 'Parts List', type: 'Text', width: 180, editable: true },

// ]

// const rows =[
//     { id: 1, Board: randomTraderName(), PCA: 500031214, dateCreated: randomCreatedDate(),},
// ]

//  "Brd #": 14,
//     "Circuit": "LTC",
//     "PCA": 500018450,
//     "PCA w bracket": 4,
//     "__EMPTY_1": 4,
//     "Drawing 1": "BDDS318-6002",
//     "Purchased Part": "BDDS318-6502",
//     "Schematic": "BDDS318-8002",
//     "Design Doc": "BDDSMS7395",
//     "Current Rev ": 7,
//     "Date": 43913,
//     "TR": "BDDSTR6879",
//     "TI": "BALTTI7334",
//     "CA Test SW": "2.00A",
//     "Spec for Programmed IC": "BDDS318-7500",
//     "App or Bootloader Version": "CABoot75.bin",
//     "Location of App or Bootloader File": "BDDS218-7599"