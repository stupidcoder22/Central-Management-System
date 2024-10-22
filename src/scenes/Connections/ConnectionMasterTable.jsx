import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CreateČonnections from "./CreateČonnections";
import CreateMasterTable from "../MasterTable/CreateMasterTable";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3f51b5", // Darker primary color for table header
    color: theme.palette.common.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "16px 20px", // Increased padding for a more modern look
    color: "#333", // Darker text for better readability
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f9f9f9", // Light gray background for odd rows
  },
  "&:hover": {
    backgroundColor: "#e3f2fd", // Hover effect to indicate row interaction
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createUserData(name, type, dateModified, createdBy) {
  return { name, type, dateModified, createdBy };
}

const rowsData = [
  createUserData("Customers", "MS-SQL", "12-10-24 00:00:00", "Admin"),
  createUserData("Shopify Customers", "HANA", "12-10-24 00:00:00", "Admin"),
  createUserData("Legacy CRM", "MYSQL", "12-10-24 00:00:00", "Admin"),
];

export default function ConnectionMasterTable() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuPosition, setMenuPosition] = useState(null);
  const [toggle, settoggle] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRightClick = (event, user) => {
    event.preventDefault();
    setMenuPosition({ top: event.clientY, left: event.clientX });
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuPosition(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rowsData.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      {toggle ? (
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 3, mb: 2 }}
          >
            <Button
              onClick={() => settoggle(!toggle)}
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
              Create Master Table
            </Button>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              onChange={handleSearch}
              sx={{ width: "250px" }}
            />
          </Box>

          <TableContainer
            component={Paper}
            sx={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">
                    Connection Name
                  </StyledTableCell>
                  <StyledTableCell align="right">Date Modified</StyledTableCell>
                  <StyledTableCell align="right">Created By</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      onContextMenu={(event) => handleRightClick(event, row)}
                      style={{ cursor: "context-menu" }}
                    >
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.type}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.dateModified}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.createdBy}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Context Menu for Right Click */}
          <Menu
            anchorReference="anchorPosition"
            anchorPosition={
              menuPosition
                ? { top: menuPosition.top, left: menuPosition.left }
                : undefined
            }
            open={Boolean(menuPosition)}
            onClose={handleClose}
            PaperProps={{
              style: {
                padding: "10px",
                width: "200px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <MenuItem
              sx={{
                borderBottom: "1px solid #eee",
                padding: "10px",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
              onClick={handleClose}
            >
              <Link
                to="/connections"
                style={{ textDecoration: "none", color: "#333" }}
              >
                Properties
              </Link>
            </MenuItem>
            <MenuItem
              sx={{
                borderBottom: "1px solid #eee",
                padding: "10px",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
              onClick={handleClose}
            >
              <Link
                to="/connections"
                state={{ tab: "User Security" }}
                style={{ textDecoration: "none", color: "#333" }}
              >
                Modify
              </Link>
            </MenuItem>
            <MenuItem
              sx={{
                borderBottom: "1px solid #eee",
                padding: "10px",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
              onClick={handleClose}
            >
              <Link
                to="/connections"
                style={{ textDecoration: "none", color: "#333" }}
              >
                Remove
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <CreateMasterTable />
      )}
    </Box>
  );
}
