import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/Header";
import StatsTable from "./components/StatsTable";

const useStyles = makeStyles({
  gridCenter: {
    justifyContent: "center",
  },
  buttonContainer: {
    height: 40,
    marginTop: '1.4rem',
    display: "flex",
    justifyContent: "flex-end",
  },
});

const theme = createTheme();

export default function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container className={classes.gridCenter}>
        <Grid item xs={12} md={10} lg={6} xl={4}>
          <StatsTable />
          <Box className={classes.buttonContainer}>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                console.log("Download button clicked.");
              }}
              style={{ fontFamily: "Montserrat", backgroundColor: 'red', fontWeight: 'bold' }}
            >
              <FileDownloadIcon /> Download CSV
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
