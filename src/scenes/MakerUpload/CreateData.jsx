import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  OutlinedInput,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const connections = {
  Salesforce: ["Module Selection"],
  SQL: ["SQL Query"],
  MongoDB: ["NoSQL Query"],
};

const columnOptions = [
  "Type",
  "ParentId",
  "BillingStreet",
  "BillingCity",
  "BillingState",
  "BillingPostalCode",
  "BillingCountry",
  "ShippingStreet",
  "ShippingCity",
  "ShippingState",
  "ShippingPostalCode",
];

const sampleData = [
  {
    id: 1,
    Name: "Macys",
    Type: "Customer",
    BillingStreet: "800 EAST CARPENTER",
    BillingCity: "SPRINGFIELD",
    BillingState: "IL",
    BillingPostalCode: "62789421",
    BillingCountry: "US",
    ShippingStreet: "",
    ShippingCity: "",
    ShippingState: "",
    ShippingPostalCode: "",
  },
  {
    id: 2,
    Name: "Happy Hippo INC",
    Type: "Customer",
    BillingStreet: "13128 N 94TH DR",
    BillingCity: "PEORIA",
    BillingState: "AZ",
    BillingPostalCode: "85345324",
    BillingCountry: "US",
    ShippingStreet: "",
    ShippingCity: "",
    ShippingState: "",
    ShippingPostalCode: "",
  },
];

const CreateData = ({ changeFlag }) => {
  const [selectedConnection, setSelectedConnection] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [showSample, setShowSample] = useState(false);

  const handleConnectionChange = (event) => {
    const connection = event.target.value;
    setSelectedConnection(connection);
  };

  const handleColumnChange = (event) => {
    const { value } = event.target;
    setSelectedColumns(typeof value === "string" ? value.split(",") : value);
  };

  const handleViewSample = () => {
    setShowSample(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: "60%",
          paddingInline: "20px",
        }}
      >
        {/* Title */}
        <Typography variant="h5" sx={{ color: "#3f51b5", mb: 2 }}>
          Add a new dataset
        </Typography>

        {/* Initial Form Inputs */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
          {/* Dataset Name */}
          <TextField label="Dataset name" fullWidth required />

          {/* Description */}
          <TextField label="Description" fullWidth multiline rows={3} />

          {/* Connection */}
          <FormControl fullWidth>
            <InputLabel>Connection</InputLabel>
            <Select
              value={selectedConnection}
              onChange={handleConnectionChange}
              input={<OutlinedInput label="Connection" />}
            >
              {Object.keys(connections).map((conn) => (
                <MenuItem key={conn} value={conn}>
                  {conn}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Render additional fields after connection is selected */}
        {selectedConnection && (
          <>
            {/* Type */}
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Type</InputLabel>
              <Select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)} // Handle Type selection
                input={<OutlinedInput label="Type" />}
              >
                <MenuItem value="Module Selection">Module Selection</MenuItem>
                <MenuItem value="SQL Query">SQL Query</MenuItem>
              </Select>
            </FormControl>

            {/* Column Selection */}
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Column Selection</InputLabel>
              <Select
                multiple
                value={selectedColumns}
                onChange={handleColumnChange}
                input={<OutlinedInput label="Column Selection" />}
                renderValue={(selected) => selected.join(", ")}
              >
                {columnOptions.map((column) => (
                  <MenuItem key={column} value={column}>
                    <Checkbox checked={selectedColumns.indexOf(column) > -1} />
                    {column}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Sample Table */}
            {showSample && (
              <TableContainer
                component={Paper}
                sx={{
                  mb: 3,
                  maxWidth: "100%",
                  overflowX: "auto", // Enable horizontal scrolling
                }}
              >
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ backgroundColor: "#3f51b5", color: "white" }}
                      >
                        Sr. No
                      </TableCell>
                      <TableCell
                        sx={{ backgroundColor: "#3f51b5", color: "white" }}
                      >
                        ID
                      </TableCell>
                      <TableCell
                        sx={{ backgroundColor: "#3f51b5", color: "white" }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        sx={{ backgroundColor: "#3f51b5", color: "white" }}
                      >
                        Type
                      </TableCell>
                      {selectedColumns.map((col) => (
                        <TableCell
                          key={col}
                          sx={{ backgroundColor: "#3f51b5", color: "white" }}
                        >
                          {col}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sampleData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell> {/* Sr. No */}
                        <TableCell>{row.id}</TableCell> {/* ID */}
                        <TableCell>{row.Name}</TableCell> {/* Name */}
                        <TableCell>{row.Type}</TableCell> {/* Type */}
                        {selectedColumns.map((col) => (
                          <TableCell key={col}>{row[col] || ""}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            {/* Buttons below table */}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3f51b5", mr: 2 }}
                onClick={handleViewSample}
              >
                View Sample
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3f51b5" }}
                onClick={() => changeFlag({ createdata: true })}
              >
                Validate
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default CreateData;
