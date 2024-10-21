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
function createUserData(email, action, description = "") {
  return { email, action, description };
}

// Sample User Data
const rows = [
  createUserData("Operations", "Edit", "Description for Operations"),
  createUserData("Finance", "Edit", "Description for Finance"),
];

const MasterCategory = ({ onViewClick }) => {
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
        John Doe
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "16px", // Increased spacing between buttons
          mb: 2,
        }}
      >
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
          Add Master Category
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
                Master Table
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Actions
              </StyledTableCell>
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
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#868DFB",
                      borderColor: "#868DFB",
                      textTransform: "none",
                      borderRadius: "8px",
                      padding: "10px 20px",
                    }}
                    onClick={onViewClick} // Call the onViewClick prop here
                  >
                    View
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
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
                    Edit
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MasterCategory;
