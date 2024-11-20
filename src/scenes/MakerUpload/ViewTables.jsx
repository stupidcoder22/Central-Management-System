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
  IconButton,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch } from "react-redux";
import { makeSaveData } from "../../store/MakerandCheckerSlice";

// Styled Table Header for consistent theme color
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "#3f51b5", // Same color as your button theme
  color: theme.palette.common.white, // White text for contrast
  fontWeight: "bold",
}));

const ViewTables = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableCell, setEditableCell] = useState(null); // { rowIndex, colIndex }
  const [updatedCells, setUpdatedCells] = useState({}); // Track updated cells
  const [originalValue, setOriginalValue] = useState(""); // Track original value
  const [tableData, setTableData] = useState([
    {
      id: "0010H00002QT5z7QAF",
      name: "Product A",
      billingStreet: "Category A",
      billingCity: "SPRINGFIELD",
      billingState: "IL",
    },
    {
      id: "0010H00002QT5z8QAF",
      name: "Product B",
      billingStreet: "Category B",
      billingCity: "PEORIA",
      billingState: "AZ",
    },
    {
      id: "0010H00002QT5z9QAF",
      name: "Product C",
      billingStreet: "Category C",
      billingCity: "ALBUQUERQUE",
      billingState: "NM",
    },
    {
      id: "0010H00002QT6z0QAF",
      name: "Product D",
      billingStreet: "Category D",
      billingCity: "ARCATA",
      billingState: "CA",
    },
  ]);

  const headers = ["Product Id", "Product Name", "Category", "City"];

  const filteredData = tableData.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.billingCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.billingState.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditClick = (rowIndex, colIndex) => {
    const key = Object.keys(tableData[rowIndex])[colIndex];
    setOriginalValue(tableData[rowIndex][key]); // Store the original value
    setEditableCell({ rowIndex, colIndex });
  };

  const handleCancelClick = () => {
    const { rowIndex, colIndex } = editableCell;
    const updatedData = [...tableData];
    const key = Object.keys(tableData[rowIndex])[colIndex];
    updatedData[rowIndex][key] = originalValue; // Restore original value

    setTableData(updatedData);
    setEditableCell(null);
  };

  const handleSaveClick = (rowIndex, colIndex, newValue) => {
    const updatedData = [...tableData];
    const key = Object.keys(tableData[rowIndex])[colIndex];
    updatedData[rowIndex][key] = newValue;

    setTableData(updatedData);
    setUpdatedCells((prev) => ({
      ...prev,
      [`${rowIndex}-${colIndex}`]: true,
    }));
    setEditableCell(null);
  };

  const dispatch = useDispatch();

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
              setIsEditMode((prev) => !prev);
              if (isEditMode) {
                dispatch(makeSaveData(tableData));
              }
            }}
          >
            {isEditMode ? "Save Modify Data" : "Modify Table"}
          </Button>
        </Box>

        <TableContainer sx={{ maxHeight: 440, overflowX: "auto" }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <StyledTableCell key={index}>{header}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((row, rowIndex) => (
                  <TableRow key={row.id}>
                    {Object.values(row)
                      .slice(0, 4)
                      .map((cell, colIndex) => (
                        <TableCell
                          key={colIndex}
                          sx={{
                            backgroundColor: updatedCells[
                              `${rowIndex}-${colIndex}`
                            ]
                              ? "#d1e3f9"
                              : "inherit",
                          }}
                        >
                          {editableCell &&
                          editableCell.rowIndex === rowIndex &&
                          editableCell.colIndex === colIndex ? (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <TextField
                                defaultValue={cell}
                                variant="standard"
                                sx={{ flex: 1, mr: 1 }}
                                onChange={(e) => {
                                  const updatedData = [...tableData];
                                  const key = Object.keys(tableData[rowIndex])[
                                    colIndex
                                  ];
                                  updatedData[rowIndex][key] = e.target.value;
                                  setTableData(updatedData);
                                }}
                              />
                              <IconButton
                                onClick={() =>
                                  handleSaveClick(
                                    rowIndex,
                                    colIndex,
                                    tableData[rowIndex][
                                      Object.keys(row)[colIndex]
                                    ]
                                  )
                                }
                              >
                                <SaveIcon />
                              </IconButton>
                              <IconButton onClick={handleCancelClick}>
                                <CancelIcon />
                              </IconButton>
                            </Box>
                          ) : (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              {cell}
                              {isEditMode && (
                                <IconButton
                                  onClick={() =>
                                    handleEditClick(rowIndex, colIndex)
                                  }
                                >
                                  <EditIcon />
                                </IconButton>
                              )}
                            </Box>
                          )}
                        </TableCell>
                      ))}
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
