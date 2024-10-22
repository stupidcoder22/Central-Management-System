import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const CreateConnections = () => {
  const [connectionType, setConnectionType] = useState("");

  const handleConnectionTypeChange = (event) => {
    setConnectionType(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: 3,
      }}
    >
      {/* Form Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "50%",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "30px",
            textAlign: "left",
            width: "100%",
          }}
        >
          Create New Connection
        </Typography>

        <TextField
          id="account-name"
          label="Connection Name"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiInputLabel-root": { color: "#888" },
            "& .MuiOutlinedInput-root": { borderRadius: "8px" },
          }}
        />

        <TextField
          id="description"
          label="Description"
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiInputLabel-root": { color: "#888" },
            "& .MuiOutlinedInput-root": { borderRadius: "8px" },
          }}
        />

        <FormControl fullWidth required>
          <InputLabel>Connection Type</InputLabel>
          <Select
            value={connectionType}
            onChange={handleConnectionTypeChange}
            name="authentication"
            label="Authentication"
          >
            <MenuItem value="MS-SQL Server">MS-SQL Server</MenuItem>
            <MenuItem value="Oracle">Oracle</MenuItem>
            <MenuItem value="MYSQL">MYSQL</MenuItem>
          </Select>
        </FormControl>

        {/* Conditionally render the additional fields if MS-SQL Server is selected */}
        {connectionType === "MS-SQL Server" && (
          <>
            <TextField
              id="host-name"
              label="Host Name"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "#888" },
                "& .MuiOutlinedInput-root": { borderRadius: "8px" },
              }}
            />
            <TextField
              id="port"
              label="Port"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "#888" },
                "& .MuiOutlinedInput-root": { borderRadius: "8px" },
              }}
            />
            <TextField
              id="db"
              label="DB (Optional)"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "#888" },
                "& .MuiOutlinedInput-root": { borderRadius: "8px" },
              }}
            />
            <TextField
              id="user-name"
              label="User Name"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "#888" },
                "& .MuiOutlinedInput-root": { borderRadius: "8px" },
              }}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "#888" },
                "& .MuiOutlinedInput-root": { borderRadius: "8px" },
              }}
            />
            <TextField
              id="authentication"
              label="Authentication"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "#888" },
                "& .MuiOutlinedInput-root": { borderRadius: "8px" },
              }}
            />

            {/* Check Connection Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3f51b5",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px",
                width: "200px",
                mt: 2,
                "&:hover": {
                  backgroundColor: "#303f9f",
                },
              }}
            >
              Check Connection
            </Button>
          </>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            mt: 4,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "8px",
              padding: "10px 20px",
              borderColor: "#3f51b5",
              color: "#3f51b5",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Cancel
          </Button>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3f51b5",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#303f9f",
                },
              }}
            >
              Add Master Table
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3f51b5",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px 20px",
                "&:hover": {
                  backgroundColor: "#303f9f",
                },
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateConnections;
