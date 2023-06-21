import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import electronLogo from "../../../static/electron.svg";
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

import {MyDocument} from './Generator'

export default function Greetings(): JSX.Element {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Grid container justifyContent="center">
        <Box component="img" src={electronLogo} width={200} height={200} />
      </Grid>
      <Typography variant="h1" textAlign="center" sx={{ mt: 8 }}>
       Karl Taks with TypeScript, React, and MUI
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
        Made by HelloSoftware
      </Typography>
       <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
    </Container>
  );
}
