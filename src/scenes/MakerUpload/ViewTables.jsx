import React, { useState } from "react";
import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Table Header for consistent theme color
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#3f51b5", // Same color as your button theme
  color: theme.palette.common.white, // White text for contrast
  fontWeight: "bold",
}));

const ViewTables = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(null);
  // "Product Id",
  //                   "Product Name",
  //                   "Product Category",
  //                   "Price",
  const tableData = [
    {
      headername: "Product Id",
      id: "0010H00002QT5z7QAF",
      name: "Product A",
      type: "1020",
      billingStreet: "Category A",
      billingCity: "SPRINGFIELD",
      billingState: "IL",
      billingPostalCode: "627690001",
      billingCountry: "US",
    },
    {
      headername: "Product Name",
      id: "0010H00002QT5z8QAF",
      name: "Product B",
      type: "1000",
      billingStreet: "Category B",
      billingCity: "PEORIA",
      billingState: "AZ",
      billingPostalCode: "853814252",
      billingCountry: "US",
    },
    {
      headername: "Product Category",
      id: "0010H00002QT5z9QAF",
      name: "Product C",
      type: "1876",
      billingStreet: "Category  C",
      billingCity: "ALBUQUERQUE",
      billingState: "NM",
      billingPostalCode: "871064971",
      billingCountry: "US",
    },
    {
      headername: "Product Price",
      id: "0010H00002QT6z0QAF",
      name: "Product D",
      type: "1243",
      billingStreet: "Category D",
      billingCity: "ARCATA",
      billingState: "CA",
      billingPostalCode: "955214734",
      billingCountry: "US",
    },
  ];

  const filteredData = tableData.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.billingCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.billingState.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle column header click
  const handleColumnClick = (index) => {
    setSelectedColumnIndex(index);
    toggleSidebar({ flag: true, text: tableData[index].headername });
  };

  return (
    <Box>
      <CardContent>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            label="Search by Name, City or State"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ marginBottom: 2, width: "30%" }}
          />

          <Button
            variant="contained"
            sx={{ backgroundColor: "#3f51b5", color: "white" }}
            onClick={() => {
              toggleSidebar({ flag: true });
              setSelectedColumnIndex();
            }}
          >
            Right Sidebar
          </Button>
        </Box>

        <TableContainer sx={{ maxHeight: 440, overflowX: "auto" }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                {[
                  "Product Id",
                  "Product Name",
                  "Product Category",
                  "Price",
                ].map((header, index) => (
                  <StyledTableCell
                    key={index}
                    onClick={() => handleColumnClick(index)}
                    sx={{
                      cursor: "pointer",
                      backgroundColor:
                        selectedColumnIndex === index ? "#2c387e" : "#3f51b5",
                    }}
                  >
                    {header}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((row) => (
                  <TableRow key={row.id}>
                    {[row.id, row.name, row.billingStreet, row.type].map(
                      (cell, index) => (
                        <TableCell
                          key={index}
                          sx={{
                            backgroundColor:
                              selectedColumnIndex === index
                                ? "#d1e3f9"
                                : "inherit",
                          }}
                        >
                          {cell}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Box>
  );
};

export default ViewTables;
