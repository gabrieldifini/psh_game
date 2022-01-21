import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import DownloadButton from "./components/DownloadButton";
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
            <DownloadButton />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
