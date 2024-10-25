import React, { useState } from "react";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Table Header for consistent theme color
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#3f51b5", // Same color as your button theme
  color: theme.palette.common.white, // White text for contrast
  fontWeight: "bold",
}));

const ViewTables = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tableData = [
    {
      id: "0010H00002QT5z7QAF",
      name: "Macys",
      type: "Customer - Direct",
      billingStreet: "800 EAST CARPENTER",
      billingCity: "SPRINGFIELD",
      billingState: "IL",
      billingPostalCode: "627690001",
      billingCountry: "US",
    },
    {
      id: "0010H00002QT5z8QAF",
      name: "Happy Hippo INC",
      type: "Customer - Direct",
      billingStreet: "13128 N 94TH DR",
      billingCity: "PEORIA",
      billingState: "AZ",
      billingPostalCode: "853814252",
      billingCountry: "US",
    },
    {
      id: "0010H00002QT5z9QAF",
      name: "ABCO Foods",
      type: "Customer - Direct",
      billingStreet: "201 CEDAR ST SE",
      billingCity: "ALBUQUERQUE",
      billingState: "NM",
      billingPostalCode: "871064971",
      billingCountry: "US",
    },
    {
      id: "0010H00002QT6z0QAF",
      name: "Bonanza Beauty",
      type: "Customer - Direct",
      billingStreet: "1600 WEEDT WAY",
      billingCity: "ARCATA",
      billingState: "CA",
      billingPostalCode: "955214734",
      billingCountry: "US",
    },
    {
      id: "0010H00002QT6z1QAF",
      name: "Country Club Markets",
      type: "Customer - Direct",
      billingStreet: "741 PRESIDENT PL",
      billingCity: "SMYRNA",
      billingState: "TN",
      billingPostalCode: "371674971",
      billingCountry: "US",
    },
    {
      id: "0010H00002QT6z2QAF",
      name: "Foxmoor",
      type: "Customer - Direct",
      billingStreet: "7434 S STATE ST",
      billingCity: "MIDVALE",
      billingState: "UT",
      billingPostalCode: "840472014",
      billingCountry: "US",
    },
    {
      id: "0010H00002QT6z3QAF",
      name: "On Cue",
      type: "Customer - Direct",
      billingStreet: "135 W RAVINE RD",
      billingCity: "KINGSPORT",
      billingState: "TN",
      billingPostalCode: "376630347",
      billingCountry: "US",
    },
    {
      id: "0010H00002QT6z4QAF",
      name: "Pointers",
      type: "Customer - Direct",
      billingStreet: "29645 W 14 MILE RD",
      billingCity: "FARMINGTON HILLS",
      billingState: "MI",
      billingPostalCode: "483341666",
      billingCountry: "US",
    },
    {
      id: "0010H00002QT6z5QAF",
      name: "Standard Brands F",
      type: "Customer - Direct",
      billingStreet: "U.S. NAVAL HOSPITAL",
      billingCity: "FPO",
      billingState: "AP",
      billingPostalCode: "96350",
      billingCountry: "US",
    },
    {
      id: "0010H00002QT6z6QAF",
      name: "Luria's CO",
      type: "Customer - Direct",
      billingStreet: "2931 N TENAYA WAY",
      billingCity: "LAS VEGAS",
      billingState: "NV",
      billingPostalCode: "891284056",
      billingCountry: "US",
    },
    {
      id: "0010H00002QT6z7QAF",
      name: "Schweggmann's INC",
      type: "Customer - Direct",
      billingStreet: "PO BOX 5038",
      billingCity: "SIOUX FALLS",
      billingState: "SD",
      billingPostalCode: "571175038",
      billingCountry: "US",
    },
    {
      id: "0010H00002QT6z8QAF",
      name: "JON F. Lawhon",
      type: "Customer - Direct",
      billingStreet: "8880 BRADBURY CT",
      billingCity: "ELKO",
      billingState: "NV",
      billingPostalCode: "898015808",
      billingCountry: "US",
    },
  ];

  // Filtered data based on search term
  const filteredData = tableData.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.billingCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.billingState.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <CardContent>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "left" }}>
          <TextField
            label="Search by Name, City or State"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ marginBottom: 2, width: "30%" }}
          />
        </Box>

        <TableContainer sx={{ maxHeight: 440, overflowX: "auto" }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Type</StyledTableCell>
                <StyledTableCell>Billing Street</StyledTableCell>
                <StyledTableCell>Billing City</StyledTableCell>
                <StyledTableCell>Billing State</StyledTableCell>
                <StyledTableCell>Billing Postal</StyledTableCell>
                <StyledTableCell>Billing Country</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.billingStreet}</TableCell>
                    <TableCell>{row.billingCity}</TableCell>
                    <TableCell>{row.billingState}</TableCell>
                    <TableCell>{row.billingPostalCode}</TableCell>
                    <TableCell>{row.billingCountry}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} align="center">
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
