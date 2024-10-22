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
    backgroundColor: "#3f51b5", // Change to your desired header color
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
function createUserData(name, email, role, status, action) {
  return { name, email, role, status, action };
}

// Sample User Data
const rows = [
  createUserData("Asit", "Asit Modi", "User Group", "Admin", "Full Control"),
  createUserData(
    "Vinit",
    "Vinit Sharma",
    "User Group",
    "Maker",
    "Full Control (Inherited)"
  ),
  createUserData(
    "Hemant",
    "Hemant Chauhan",
    "User Group",
    "Checker",
    "Full Control"
  ),
];

const UserSecurity = ({ userflag }) => {
  const flag = userflag ? true : false;
  return (
    <Box
      sx={{
        padding: !flag ? "40px" : "0px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        marginBlock: !flag ? "20px" : "0px",
      }}
    >
      <Box mb={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3f51b5",
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "8px",
                marginRight: "10px", // Space between buttons
                "&:hover": { backgroundColor: "#303f9f" },
              }}
            >
              Add Roles
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3f51b5",
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#303f9f" },
              }}
            >
              Remove
            </Button>
          </Box>
          {!flag && (
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3f51b5",
                  textTransform: "none",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  marginRight: "10px", // Space between buttons
                  "&:hover": { backgroundColor: "#303f9f" },
                }}
              >
                View Security
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3f51b5",
                  textTransform: "none",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  "&:hover": { backgroundColor: "#303f9f" },
                }}
              >
                Assign Security
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Name
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Full Name
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Type
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Role
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Access
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.email}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.role}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">{row.action}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserSecurity;
