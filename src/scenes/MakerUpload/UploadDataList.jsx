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
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Sample table data
const initialTableData = [
  {
    id: 1,
    name: "Finance",
    category: "Financial",
    status: "Active",
    date: "02-04-2023",
  },
  {
    id: 2,
    name: "Operations",
    category: "Operational",
    status: "Inactive",
    date: "01-04-2023",
  },
  {
    id: 3,
    name: "HR",
    category: "Human Resources",
    status: "Active",
    date: "07-04-2023",
  },
  {
    id: 4,
    name: "Marketing",
    category: "Sales",
    status: "Inactive",
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

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the table data based on the search term
  const filteredData = tableData.filter((table) =>
    table.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Master Table List
      </Typography>

      {/* Search Bar and Buttons */}
      <Grid container spacing={3} alignItems="center" mt={0.5}>
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
          sx={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#3f51b5", color: "white" }}
          >
            Create Data
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#3f51b5", color: "white" }}
          >
            Update Master
          </Button>
        </Grid>
      </Grid>

      {/* Table */}
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table aria-label="master table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Master Table
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Master Category
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Status
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Modified Date
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((table) => (
              <TableRow key={table.id}>
                <TableCell align="center">{table.name}</TableCell>
                <TableCell align="center">{table.category}</TableCell>
                <TableCell align="center">{table.status}</TableCell>
                <TableCell align="center">{table.date}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ backgroundColor: "#3f51b5" }}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MasterTableWithSearch;
