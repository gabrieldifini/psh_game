import React from "react";

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    maxHeight: '3rem',
  },
}));

const useStyles = makeStyles({
  avatar: {
    verticalAlign: 'middle',
  },
  nickname: { 
    height: '100%', 
    margin: 'auto 10px', 
    fontWeight: 500 
  },
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const columns = [
  { field: "position", headerName: "Position", width: 50 },
  { field: "player", headerName: "Player", width: 380 },
  { field: "score", headerName: "Score", width: 200 },
];

export default function StatsTable({ stats }) {

  const classes = useStyles();

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 630 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell key={column.field} align="center">
                  {column.headerName}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map((stat, i) => (
              <StyledTableRow key={stat.nickname}>
                <StyledTableCell align="center">{i+1}</StyledTableCell>
                <StyledTableCell align="center" style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle' }}>
                  <Avatar alt={`${stat.profile_image}_pic`} src={stat.profile_image} /> 
                  <span className={classes.nickname}>{stat.nickname}</span>
                </StyledTableCell>
                <StyledTableCell align="center">{stat.score}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
