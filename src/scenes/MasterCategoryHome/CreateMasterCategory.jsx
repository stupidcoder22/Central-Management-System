import React, { useState } from "react";
import {
  Grid,
  TextField,
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

// Sample table data
const tableData = [
  { id: 1, name: "Table 1" },
  { id: 2, name: "Table 2" },
  { id: 3, name: "Table 3" },
  { id: 4, name: "Table 4" },
];

const CreateMasterCategory = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTables, setSelectedTables] = useState([]);

  // Toggle the modal
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Handle the table selection
  const handleTableSelect = (event, tableId) => {
    if (event.target.checked) {
      setSelectedTables([...selectedTables, tableId]);
    } else {
      setSelectedTables(selectedTables.filter((id) => id !== tableId));
    }
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent="left"
      style={{ padding: "20px" }}
    >
      <Grid item xs={12}>
        <h2>Create Master Category</h2>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Enter Master Category Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Enter Description" variant="outlined" />
      </Grid>

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
            // fontWeight: "bold",
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
      {selectedTables.length > 0 && (
        <Grid item xs={12} style={{ marginTop: "20px" }}>
          <Typography variant="subtitle1">Selected Tables:</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {selectedTables.map((tableId) => (
              <Chip
                key={tableId}
                label={`Table ${tableId}`}
                color="primary"
                style={{ marginTop: "5px" }}
              />
            ))}
          </Box>
        </Grid>
      )}

      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#3f51b5",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          Create Master Category
        </Button>
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
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Choose the tables you want to associate with this category:
            </Typography>
            <Grid container spacing={2}>
              {tableData.map((table) => (
                <Grid item xs={12} key={table.id}>
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
                          checked={selectedTables.includes(table.id)}
                          onChange={(event) =>
                            handleTableSelect(event, table.id)
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

export default CreateMasterCategory;
