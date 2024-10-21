import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const CreateUser = () => {
  const [role, setRole] = React.useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
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
        Create New User
      </Typography>

      {/* First Row: Account Name & Full Name */}
      <Box
        sx={{
          display: "flex",
          gap: "20px", // Spacing between the fields
          width: "100%", // Full width of the form
        }}
      >
        <TextField
          id="account-name"
          label="Account Name"
          variant="outlined"
          sx={{
            flex: 1, // Flex to make it take equal space
            "& label": { color: "#888" },
          }}
        />
        <TextField
          id="full-name"
          label="Full Name"
          variant="outlined"
          sx={{
            flex: 1,
            "& label": { color: "#888" },
          }}
        />
      </Box>

      {/* Second Row: Email */}
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        sx={{
          width: "100%",
          "& label": { color: "#888" },
        }}
      />

      {/* Role Selection */}
      <FormControl sx={{ width: "100%" }}>
        <Select
          value={role}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            backgroundColor: "#f9f9f9",
            "& .MuiSelect-select": { padding: "12px" },
          }}
        >
          <MenuItem value="">
            <em>Select Role</em>
          </MenuItem>
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Maker</MenuItem>
          <MenuItem value={30}>Checker</MenuItem>
        </Select>
      </FormControl>

      {/* Description Field */}
      <TextField
        id="description"
        label="Description"
        variant="outlined"
        sx={{
          width: "100%",
          "& label": { color: "#888" },
        }}
      />

      {/* Password Section */}
      <Typography
        sx={{
          width: "100%",
          fontWeight: "600",
          fontSize: "18px",
          color: "#333",
          marginTop: "30px",
          marginBottom: "15px",
        }}
      >
        Enterprise Password Settings
      </Typography>

      {/* Third Row: Password & Confirm Password */}
      <Box
        sx={{
          display: "flex",
          gap: "20px", // Spacing between the fields
          width: "100%",
        }}
      >
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          sx={{ flex: 1, "& label": { color: "#888" } }}
          type="password"
        />
        <TextField
          id="confirm-password"
          label="Confirm Password"
          variant="outlined"
          sx={{ flex: 1, "& label": { color: "#888" } }}
          type="password"
        />
      </Box>

      {/* Buttons */}
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

export default CreateUser;
