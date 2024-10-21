import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Styled Table Cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3f51b5", // Darker primary color for table header
    color: theme.palette.common.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    padding: "16px 20px", // More padding for better spacing
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "16px 20px", // Consistent padding for body cells
    color: "#333", // Darker text color for readability
  },
}));

// Styled Table Rows
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f9f9f9", // Light gray background for odd rows
  },
  "&:hover": {
    backgroundColor: "#e3f2fd", // Light blue hover effect for interaction
  },
  "&:last-child td, &:last-child th": {
    border: 0, // No border on the last row
  },
}));

// Lenovo data creation function
function createLenovoData(userName, role, status, lastLogin) {
  return { userName, role, status, lastLogin };
}

// Sample Lenovo Data
const rows = [
  createLenovoData(
    "John Doe",
    "Administrator",
    "Active",
    "2024-10-18 12:34 PM"
  ),
  createLenovoData("Jane Smith", "Editor", "Inactive", "2024-10-15 08:20 AM"),
  createLenovoData("Michael Brown", "Viewer", "Active", "2024-10-18 09:10 AM"),
  createLenovoData("Emma Wilson", "Developer", "Active", "2024-10-17 11:05 AM"),
  createLenovoData(
    "David Lee",
    "Translator",
    "Inactive",
    "2024-10-16 10:00 AM"
  ),
];

export default function LenovoTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Modern shadow
      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User Name</StyledTableCell>
            <StyledTableCell align="right">Role</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Last Login</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.userName}>
              <StyledTableCell component="th" scope="row">
                {row.userName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.role}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.lastLogin}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
