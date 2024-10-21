import { Box, Button } from "@mui/material";
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
    backgroundColor: "#3f51b5", // Header color
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Styled Table Rows
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// User data creation
function createUserData(name, description, lastModified, action) {
  return { name, description, lastModified, action };
}

// Sample User Data
const rows = [
  createUserData(
    "Operations",
    "Description for Operations",
    "02-04-2023",
    "View"
  ),
  createUserData("Finance", "Description for Finance", "01-04-2023", "View"),
  createUserData("HR", "Description for HR", "07-04-2023", "View"),
];

const MasterCategorySecurity = () => {
  return (
    <Box>
      <Box mb={2}>
        <Box
          sx={{
            display: "flex",
            gap: "64px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "14px",
            }}
          >
            <Button variant="contained" sx={{ background: "#3F51B5" }}>
              Assign User Security
            </Button>
            <Button variant="contained" sx={{ background: "red" }}>
              Remove
            </Button>
          </Box>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Master Category
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Description
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Last Date Modified
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Users
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.lastModified}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant="contained" sx={{ background: "#3F51B5" }}>
                    {row.action}
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MasterCategorySecurity;
