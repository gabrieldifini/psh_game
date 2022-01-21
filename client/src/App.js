import React, { useEffect } from "react";
import moment from 'moment';

import useSetupState from "./behavior/StatsController";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import DownloadButton from "./components/DownloadButton";
import Header from "./components/Header";
import StatsTable from "./components/StatsTable";

const REFRESH_TIME = 10000;

const useStyles = makeStyles({
  container: {
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  buttonContainer: {
    height: 40,
    marginTop: '1.4rem',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  alert: {
    marginTop: '1rem',
    fontFamily: 'Montserrat',
    fontWeight: 500,
  }
});

const theme = createTheme();

export default function App() {
  const classes = useStyles();
  const { state, dispatch } = useSetupState();

  useEffect(() => {
    dispatch("LOAD_SECTION");
    setInterval(() => {
      dispatch("LOAD_SECTION");
    }, REFRESH_TIME);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container className={classes.container}>
        <Grid item xs={12} md={8} lg={6} xl={5}>
          {!!state.stats.length && (
            <>
              <Alert severity="info" className={classes.alert}>
                <span className={classes.alert}>Last time stats were created: {moment(state.latestTimestamp).format('YYYY-MM-DD HH:mm:ss')}</span>
              </Alert>
              <StatsTable stats={state.stats} />
              <Box className={classes.buttonContainer}>
                <DownloadButton stats={state.stats} />
              </Box>
            </>
          )}
          {!!!state.stats.length && (
            <Alert severity="error" className={classes.alert}>
              <span className={classes.alert}>No stats found.</span>
            </Alert>
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
