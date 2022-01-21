import * as React from "react";
import Box from '@mui/material/Box';
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
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const columns = [
  { field: "player", headerName: "Player", width: 400 },
  { field: "score", headerName: "Score", type: "number", width: 230 },
];

const rows = [
  { player: "Jon_Snow", score: 35 },
  { player: "Cersei_Lannister", score: 42 },
  { player: "Jaime_Lannister", score: 45 },
  { player: "Arya_Stark", score: 16 },
  { player: "Daenerys_Targaryen", score: 0 },
  { player: "Melisandre", score: 150 },
  { player: "Clifford_Ferrara", score: 44 },
  { player: "Frances_Rossini", score: 36 },
  { player: "Harvey_Roxie", score: 65 },
];

export default function StatsTable() {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 630 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell align="center">
                  {column.headerName}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center">{row.player}</StyledTableCell>
                <StyledTableCell align="center">{row.score}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
