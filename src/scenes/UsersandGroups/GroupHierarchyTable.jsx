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
    backgroundColor: "#3f51b5", // Dark primary background for header
    color: theme.palette.common.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    padding: "16px 20px", // Increased padding for spacious header
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "16px 20px",
    color: "#333", // Darker text color for readability
  },
}));

// Styled Table Rows
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f9f9f9", // Light gray background for odd rows
  },
  "&:hover": {
    backgroundColor: "#e3f2fd", // Light blue hover effect
  },
  "&:last-child td, &:last-child th": {
    border: 0, // No border for the last row
  },
}));

// Group hierarchy data creation
function createGroupData(groupName, parentGroup, membersCount, description) {
  return { groupName, parentGroup, membersCount, description };
}

// Sample Group Hierarchy Data
const rows = [
  createGroupData("Administrators", "None", 5, "System administrators"),
  createGroupData("Editors", "Content Team", 10, "Editors with content access"),
  createGroupData("Viewers", "None", 50, "Read-only access group"),
  createGroupData("Content Team", "None", 20, "Manages content"),
  createGroupData("Developers", "Tech Team", 8, "Software developers"),
];

export default function GroupHierarchyTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Shadow for modern look
      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Group Name</StyledTableCell>
            <StyledTableCell align="right">Parent Group</StyledTableCell>
            <StyledTableCell align="right">Members Count</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.groupName}>
              <StyledTableCell component="th" scope="row">
                {row.groupName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.parentGroup}</StyledTableCell>
              <StyledTableCell align="right">
                {row.membersCount}
              </StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
