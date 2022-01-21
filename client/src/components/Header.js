import React from "react";

import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginTop: '2rem',
    marginBottom: '2rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6rem',
    },
  },
  logo: {
    verticalAlign: 'middle',
    [theme.breakpoints.up('lg')]: {
      height: '4rem',
    },
    [theme.breakpoints.down('lg')]: {
      height: '3rem',
    },
    [theme.breakpoints.down('md')]: {
      height: '2.4rem',
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.title}>
      <Typography className={classes.title} variant="h3" align="center">
        <div className={classes.title}>
          <img className={classes.logo} src="https://wearepsh.com/static/images/logo_red_psh.svg" /> Game Stats
        </div>
      </Typography>
    </Box>
  );
};
