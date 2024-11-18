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

// Sample user data
const tableData = [
  { id: 1, name: "Jane Smith" },
  { id: 2, name: "Sam Johnson" },
  { id: 3, name: "Emily Davis" },
  { id: 4, name: "Chris Lee" },
];

const AssignUserApplication = () => {
  const [openModal, setOpenModal] = useState(true);
  const [selectedTables, setSelectedTables] = useState([]);

  // Toggle the modal
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Handle the user selection
  const handleTableSelect = (event, user) => {
    if (event.target.checked) {
      // Add selected user (with both id and name)
      setSelectedTables([...selectedTables, user]);
    } else {
      // Remove the user based on their id
      setSelectedTables(
        selectedTables.filter((selected) => selected.id !== user.id)
      );
    }
  };

  // Handle "Check All" functionality
  const handleCheckAll = () => {
    if (selectedTables.length === tableData.length) {
      setSelectedTables([]); // Uncheck all
    } else {
      setSelectedTables(tableData); // Select all users (id and name)
    }
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
          Select User
        </Button>
      </Box>

      {/* Display Selected Users */}
      {selectedTables.length > 0 && (
        <Grid item xs={12} style={{ marginTop: "20px" }}>
          <Typography variant="subtitle1">Selected Users:</Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {selectedTables.map((user) => (
              <Chip
                key={user.id}
                label={user.name} // Display the user name
                color="primary"
                style={{ marginTop: "5px" }}
              />
            ))}
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

      {/* Modal for selecting users */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Select Users</DialogTitle>
        <DialogContent>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography variant="subtitle1" gutterBottom>
              User Name:
              <Button
                size="small"
                color="primary"
                onClick={handleCheckAll}
                sx={{ marginLeft: "10px" }}
              >
                {selectedTables.length === tableData.length
                  ? "Uncheck All"
                  : "Check All"}
              </Button>
            </Typography>
            <Grid container spacing={2}>
              {tableData.map((user) => (
                <Grid item xs={12} key={user.id}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">{user.name}</Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedTables.some(
                            (selected) => selected.id === user.id
                          )}
                          onChange={(event) => handleTableSelect(event, user)}
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

export default AssignUserApplication;
