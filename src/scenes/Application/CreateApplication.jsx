import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const CreateApplication = () => {
  return (
    <Box sx={{ width: "80%" }}>
      <Typography
        sx={{ fontSize: "24px", fontWeight: 700, textAlign: "center" }}
      >
        Create Application
      </Typography>
      <TextField
        fullWidth
        label="Enter Application Name"
        variant="outlined"
        sx={{ mb: 2, mt: 3 }}
      />
      <TextField
        fullWidth
        label="Enter Description"
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Enter Host Name"
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Enter Port"
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <Box sx={{ display: "flex", gap: 2 }}>
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
    </Box>
  );
};

export default CreateApplication;
