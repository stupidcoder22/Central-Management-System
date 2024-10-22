import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import CreateMasterCategory from "./CreateMasterCategory";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3f51b5", // Your header color
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
  createUserData("Operations", "Edit", "Description for Operations"),
  createUserData("Finance", "Edit", "Description for Finance"),
];

const MasterCategoryList = ({ onViewClick }) => {
  const [toggle, settoggle] = useState(true);

  return (
    <Box>
      {toggle ? (
        <Box sx={{ background: "" }}>
          <Box
            sx={{
              display: "flex",
              gap: "14px",
              mb: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "#3F51B5",
              }}
              onClick={() => {
                settoggle(false);
              }}
            >
              Create Master Category
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "red", color: "white" }}
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
                    <StyledTableCell align="center">
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="outlined"
                        sx={{
                          color: "#868DFB",
                          borderColor: "#868DFB",
                        }}
                        onClick={onViewClick} // Call the onViewClick prop here
                      >
                        View
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          background: "#3F51B5",
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
        </Box>
      ) : (
        <CreateMasterCategory />
      )}
    </Box>
  );
};

export default MasterCategoryList;
