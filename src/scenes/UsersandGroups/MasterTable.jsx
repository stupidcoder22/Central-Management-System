import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createUserData(email, action, description = "") {
  return { email, action, description };
}

const rows = [
  createUserData(
    "Operations Master A",
    "Edit",
    "Description for Operation Master A"
  ),
  createUserData(
    "Operations Master B",
    "Edit",
    "Description for Operation Master B"
  ),
];

const MasterTable = ({ onViewClick }) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "20px",
          textAlign: "center",
          fontWeight: 700,
          marginBlock: "20px",
        }}
      >
        User: John Doe
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          textAlign: "center",
          fontWeight: 700,
          margin: "20px",
        }}
      >
        Master Category: Operation
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Master Table</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.email}>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.description}
                </StyledTableCell>

                <StyledTableCell align="center">
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: "flex",
          gap: "14px",
          mt: 2,
          justifyContent: "right",
        }}
      >
        <Button variant="contained">Add Master Table</Button>
        <Button variant="contained">Remove</Button>
      </Box>
    </>
  );
};

export default MasterTable;
