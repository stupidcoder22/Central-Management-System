import React, { useState } from "react";
import {
  Grid,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Checkbox,
  FormControlLabel,
  Typography,
  Chip,
} from "@mui/material";

// Sample table data for both categories
const tableData = [
  { id: 1, name: "Table 1" },
  { id: 2, name: "Table 2" },
  { id: 3, name: "Table 3" },
  { id: 4, name: "Table 4" },
];

const AssignMasterTable = () => {
  const [openModal, setOpenModal] = useState(true);
  const [selectedTables, setSelectedTables] = useState({
    finance: [],
    operation: [],
  });

  // Toggle the modal
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Handle the table selection for specific category
  const handleTableSelect = (event, tableId, category) => {
    const categoryTables = selectedTables[category];

    if (event.target.checked) {
      setSelectedTables({
        ...selectedTables,
        [category]: [...categoryTables, tableId],
      });
    } else {
      setSelectedTables({
        ...selectedTables,
        [category]: categoryTables.filter((id) => id !== tableId),
      });
    }
  };

  // Handle "Check All" functionality for a category
  const handleCheckAll = (category) => {
    const allTableIds = tableData.map((table) => table.id);
    setSelectedTables({
      ...selectedTables,
      [category]:
        selectedTables[category].length === tableData.length ? [] : allTableIds,
    });
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent="left"
      style={{ padding: "20px" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          mt: "30px",
          ml: "26px",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={handleOpenModal}
          sx={{
            backgroundColor: "#3f51b5",
            textTransform: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            color: "white",
            "&:hover": { backgroundColor: "#303f9f" },
          }}
        >
          Select Master Tables
        </Button>
      </Box>

      {/* Display Selected Tables */}
      {Object.values(selectedTables).some(
        (category) => category.length > 0
      ) && (
        <Grid item xs={12} style={{ marginTop: "20px" }}>
          <Typography variant="subtitle1">Selected Tables:</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {Object.keys(selectedTables).map((category) =>
              selectedTables[category].map((tableId) => (
                <Chip
                  key={`${category}-${tableId}`}
                  label={`${
                    category.charAt(0).toUpperCase() + category.slice(1)
                  } - Table ${tableId}`}
                  color="primary"
                  style={{ marginTop: "5px" }}
                />
              ))
            )}
          </Box>
        </Grid>
      )}

      <Grid item xs={12}>
        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: "#3f51b5",
              textTransform: "none",
              // fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "white",
              "&:hover": { backgroundColor: "#303f9f" },
            }}
          >
            Save
          </Button>

          <Button
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: "#3f51b5",
              textTransform: "none",
              // fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "white",
              "&:hover": { backgroundColor: "#303f9f" },
            }}
          >
            Save and Close
          </Button>

          <Button
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: "#3f51b5",
              textTransform: "none",
              // fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "white",
              "&:hover": { backgroundColor: "#303f9f" },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Grid>

      {/* Modal for selecting tables */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Select Master Tables</DialogTitle>
        <DialogContent>
          {["finance", "operation"].map((category) => (
            <Box key={category} sx={{ marginBottom: "20px" }}>
              <Typography variant="subtitle1" gutterBottom>
                {category.charAt(0).toUpperCase() + category.slice(1)}:
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleCheckAll(category)}
                  sx={{ marginLeft: "10px" }}
                >
                  {selectedTables[category].length === tableData.length
                    ? "Uncheck All"
                    : "Check All"}
                </Button>
              </Typography>
              <Grid container spacing={2}>
                {tableData.map((table) => (
                  <Grid item xs={12} key={`${category}-${table.id}`}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body1">{table.name}</Typography>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedTables[category].includes(
                              table.id
                            )}
                            onChange={(event) =>
                              handleTableSelect(event, table.id, category)
                            }
                          />
                        }
                        label=""
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleCloseModal();
            }}
            color="primary"
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
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default AssignMasterTable;
