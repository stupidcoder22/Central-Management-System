import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const PropertiesData = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        paddingTop: "10px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "40px",
        width: "94%",
        margin: "auto",
        marginTop: "10px",
      }}
    >
      <Typography
        sx={{
          fontSize: "26px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Properties: Amit
      </Typography>

      <TextField
        id="account-name"
        label="Account Name"
        variant="outlined"
        sx={{
          width: "100%",
          "& label": { color: "#888" },
        }}
      />
      <TextField
        id="full-name"
        label="Full Name"
        variant="outlined"
        sx={{
          width: "100%",
          "& label": { color: "#888" },
        }}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        sx={{
          width: "100%",
          "& label": { color: "#888" },
        }}
      />
      <TextField
        id="description"
        label="Description"
        variant="outlined"
        sx={{
          width: "100%",
          "& label": { color: "#888" },
        }}
      />

      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
          marginTop: "20px",
          color: "#555",
        }}
      >
        Enterprise Password Settings
      </Typography>

      <TextField
        id="password"
        label="Password"
        variant="outlined"
        sx={{
          width: "100%",
          "& label": { color: "#888" },
        }}
        type="password"
      />
      <TextField
        id="confirm-password"
        label="Confirm"
        variant="outlined"
        sx={{
          width: "100%",
          "& label": { color: "#888" },
        }}
        type="password"
      />
      <Box sx={{ display: "flex", gap: "15px", marginTop: "30px" }}>
        <Button
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
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
            borderColor: "#3f51b5",
            color: "#3f51b5",
            "&:hover": {
              backgroundColor: "#e3f2fd",
              borderColor: "#3f51b5",
            },
          }}
        >
          Save and Close
        </Button>
      </Box>
    </Box>
  );
};

export default PropertiesData;
