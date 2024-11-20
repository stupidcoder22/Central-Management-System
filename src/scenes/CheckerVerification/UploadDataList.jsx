import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useSelector } from "react-redux";
import CheckerTableData from "./Checkertabledata";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3f51b5",
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

function createUserData(
  email,
  action,
  description = "",
  category = "",
  addedBy = "",
  status = "",
  lastModified = ""
) {
  return {
    email,
    action,
    description,
    category,
    addedBy,
    status,
    lastModified,
  };
}

const initialRows = [
  createUserData(
    "Operations Master A",
    "Operations",
    "Description for Operations Master A",
    "Operations",
    "Maker 1",
    "Approved",
    "2024-10-10 10:00 AM"
  ),
  createUserData(
    "Finance Master A",
    "Edit",
    "Description for Finance Master A",
    "Finance",
    "Maker 2",
    "Pending",
    "2024-10-15 03:30 PM"
  ),
];

const UploadDataList = ({ onViewClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [rows, setRows] = useState(initialRows);

  const state = useSelector((state) => state.makerandchecker.makerdata.title);
  const productdata = useSelector(
    (state) => state.makerandchecker.makerdata.tabledata
  );

  // Sync Redux productdata with rows
  useEffect(() => {
    if (productdata && productdata.length > 0) {
      const newRows = productdata
        .map((data) => {
          // Only create rows for valid data
          if (
            data.email &&
            data.category &&
            data.status !== undefined &&
            data.lastModified
          ) {
            return createUserData(
              data.email || "Unknown Product",
              "Edit",
              data.description || "No Description",
              data.category || "Unknown Category",
              data.addedBy || "Unknown Maker",
              data.status || "Pending",
              data.lastModified || "N/A"
            );
          }
          return null; // Skip invalid rows
        })
        .filter((row) => row !== null); // Remove null entries

      setRows((prevRows) => {
        // Merge new rows with existing rows, avoiding duplicates
        const existingEmails = prevRows.map((row) => row.email);
        const uniqueRows = newRows.filter(
          (row) => !existingEmails.includes(row.email)
        );
        return [...prevRows, ...uniqueRows];
      });
    }
  }, [productdata]);

  // Add new state.title-based row
  useEffect(() => {
    if (state?.title) {
      const newRow = createUserData(
        state.title,
        "Edit",
        "Description for Product",
        "Product",
        "Maker 2",
        "Pending",
        "2024-10-15 03:30 PM"
      );

      setRows((prevRows) => {
        const isDuplicate = prevRows.some((row) => row.email === newRow.email);
        return isDuplicate ? prevRows : [...prevRows, newRow];
      });
    }
  }, [state]);

  // Filter rows based on search and status
  const filteredRows = rows.filter(
    (row) =>
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "" || row.status === statusFilter)
  );

  console.log(filteredRows);

  const [toggle, settoggle] = useState(true);

  return (
    <Box>
      {toggle ? (
        <Box>
          <Box sx={{ display: "flex", gap: "14px", mb: 2 }}>
            <TextField
              label="Search Master Table"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: "50%" }}
            />

            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>Status</InputLabel>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                label="Status"
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Approved">Approved</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Master Table
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Description
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Master Category
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Added By
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Status
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Added Date
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Actions
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <StyledTableRow key={row.email}>
                    <StyledTableCell align="center">
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.category}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.addedBy}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.status}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.lastModified}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ background: "#3f51b5" }}
                        onClick={() => {
                          settoggle(false);
                        }}
                      >
                        View Table
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <CheckerTableData />
      )}
    </Box>
  );
};

export default UploadDataList;
