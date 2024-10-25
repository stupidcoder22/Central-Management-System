import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CreateData from "./CreateData";
import ViewTables from "./ViewTables";

// Sample table data
const initialTableData = [
  {
    id: 1,
    name: "Shopify Customers",
    category: "Amazon S3",
    status: "Stefin",
    date: "02-04-2023",
  },
  {
    id: 2,
    name: "Customers",
    category: "Snowflake",
    status: "Atul",
    date: "01-04-2023",
  },
  {
    id: 3,
    name: "Legacy CRM",
    category: "MySQL",
    status: "Sam",
    date: "07-04-2023",
  },
  {
    id: 4,
    name: "Marketing",
    category: "KAFKA",
    status: "Mohit",
    date: "05-04-2023",
  },
];

// Styled Table Cells for Header to match button color
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#3f51b5", // Same color as button
  color: theme.palette.common.white, // White text color
  fontWeight: "bold",
}));

const MasterTableWithSearch = () => {
  const [tableData, setTableData] = useState(initialTableData);
  const [searchTerm, setSearchTerm] = useState("");
  const [flag, setFlag] = useState({
    list: true,
    createdata: false,
    viewtable: false,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuPosition, setMenuPosition] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the table data based on the search term
  const filteredData = tableData.filter((table) =>
    table.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle between components based on button clicks
  const handleCreateDataClick = () => {
    setFlag({ list: false, createdata: true, viewtable: false });
  };

  const handleViewTableClick = () => {
    setFlag({ list: false, createdata: false, viewtable: true });
  };

  const handleBackToList = () => {
    setFlag({ list: true, createdata: false, viewtable: false });
  };

  const handleRightClick = (event, row) => {
    event.preventDefault();
    setSelectedRow(row);
    setMenuPosition({ top: event.clientY, left: event.clientX });
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuPosition(null);
  };

  return (
    <>
      {/* Render the Master Table List when flag.list is true */}
      {flag.list && (
        <Box>
          <Typography variant="h4" gutterBottom>
            Master Table List
          </Typography>

          {/* Search Bar and Buttons */}
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Search Master Table"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearch}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3f51b5", color: "white" }}
                onClick={handleCreateDataClick} // Navigate to Create Data
              >
                Create Data
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3f51b5", color: "white" }}
                onClick={handleViewTableClick} // Navigate to View Table
              >
                View Table
              </Button>
            </Grid>
          </Grid>

          {/* Table */}
          <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">
                    Connection Name
                  </StyledTableCell>
                  <StyledTableCell align="center">Created By</StyledTableCell>
                  <StyledTableCell align="center">
                    Modified Date
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((table) => (
                  <TableRow
                    key={table.id}
                    onContextMenu={(event) => handleRightClick(event, table)}
                  >
                    <TableCell align="center">{table.name}</TableCell>
                    <TableCell align="center">{table.category}</TableCell>
                    <TableCell align="center">{table.status}</TableCell>
                    <TableCell align="center">{table.date}</TableCell>
                  </TableRow>
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
              onClick={() => {
                handleClose();
                handleViewTableClick();
              }}
            >
              View Table
            </MenuItem>
            <MenuItem
              sx={{
                borderBottom: "1px solid #eee",
                padding: "10px",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
              onClick={handleClose}
            >
              Edit
            </MenuItem>
            <MenuItem
              sx={{
                padding: "10px",
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
              onClick={handleClose}
            >
              Delete
            </MenuItem>
          </Menu>
        </Box>
      )}

      {/* Render CreateData component when flag.createdata is true */}
      {flag.createdata && <CreateData onBack={handleBackToList} />}

      {/* Render ViewTables component when flag.viewtable is true */}
      {flag.viewtable && <ViewTables onBack={handleBackToList} />}
    </>
  );
};

export default MasterTableWithSearch;
