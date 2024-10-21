import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Input,
  Paper,
  Modal,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const categories = ["Finance", "Operation", "HR", "Sales", "Marketing"];
const tables = ["Users", "Orders", "Products", "Transactions"];

const CreateData = () => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [openTableModal, setOpenTableModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTables, setSelectedTables] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleTableChange = (table) => {
    setSelectedTables((prev) =>
      prev.includes(table)
        ? prev.filter((item) => item !== table)
        : [...prev, table]
    );
  };

  const selectAllCategories = () => {
    setSelectedCategories(categories);
  };

  const selectNoneCategories = () => {
    setSelectedCategories([]);
  };

  const selectAllTables = () => {
    setSelectedTables(tables);
  };

  const selectNoneTables = () => {
    setSelectedTables([]);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f4f6f8",
        height: "100vh",
        padding: "30px",
      }}
    >
      {/* Page Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Upload Data
        </Typography>
      </Box>

      <Paper
        sx={{
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>
          Import Bulk Data From Database
        </Typography>

        {/* Upload Destination Section */}
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          Upload To
        </Typography>
        <Button
          variant="outlined"
          sx={{ marginRight: "10px", borderColor: "#3f51b5", color: "#3f51b5" }}
          onClick={() => setOpenCategoryModal(true)}
        >
          Select Master Category
        </Button>
        <Button
          variant="outlined"
          sx={{ borderColor: "#3f51b5", color: "#3f51b5" }}
          onClick={() => setOpenTableModal(true)}
        >
          Select Master Table
        </Button>

        {/* Selected Categories and Tables */}
        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="subtitle1">
            Selected Categories: {selectedCategories.join(", ") || "None"}
          </Typography>
          <Typography variant="subtitle1">
            Selected Tables: {selectedTables.join(", ") || "None"}
          </Typography>
        </Box>

        {/* Server Connection Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              marginTop: "15px",
              backgroundColor: "#3f51b5",
              color: "white",
              textTransform: "none",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#303f9f" },
              marginBottom: "20px",
            }}
          >
            Connect Server
          </Button>
        </Box>

        <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
          Or
        </Typography>

        {/* Upload Bulk Data Section */}
        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderColor: "#3f51b5",
            color: "#3f51b5",
            textTransform: "none",
            fontWeight: "bold",
            padding: "15px 20px",
            borderRadius: "8px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
          startIcon={<span>&#128228;</span>} // Upload icon
        >
          Click to Upload Bulk Data
        </Button>

        <Input
          type="file"
          fullWidth
          disableUnderline
          sx={{
            border: "1px solid #c4c4c4",
            borderRadius: "8px",
            padding: "8px 10px",
            marginBottom: "20px",
          }}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#3f51b5",
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            padding: "15px 20px",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#303f9f" },
          }}
        >
          Submit
        </Button>
      </Paper>

      {/* Category Modal */}
      <Modal
        open={openCategoryModal}
        onClose={() => setOpenCategoryModal(false)}
      >
        <Box
          sx={{
            width: 400,
            bgcolor: "background.paper",
            padding: 4,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            Select Master Category
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3f51b5",
                color: "white",
                textTransform: "none",
                padding: "5px 10px",
                borderRadius: "4px",
                "&:hover": { backgroundColor: "#303f9f" },
              }}
              onClick={selectAllCategories}
            >
              Select All
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f44336", // Red color for "Select None"
                color: "white",
                textTransform: "none",
                padding: "5px 10px",
                borderRadius: "4px",
                "&:hover": { backgroundColor: "#d32f2f" },
              }}
              onClick={selectNoneCategories}
            >
              Select None
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {categories.map((category) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                }
                label={category}
                sx={{ marginRight: "10px" }} // Margin to space out the items
              />
            ))}
          </Box>
          <Button
            variant="contained"
            onClick={() => setOpenCategoryModal(false)}
            sx={{
              marginTop: "20px",
              backgroundColor: "#3f51b5",
              color: "white",
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>

      {/* Table Modal */}
      <Modal open={openTableModal} onClose={() => setOpenTableModal(false)}>
        <Box
          sx={{
            width: 400,
            bgcolor: "background.paper",
            padding: 4,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            Select Master Table
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3f51b5",
                color: "white",
                textTransform: "none",
                padding: "5px 10px",
                borderRadius: "4px",
                "&:hover": { backgroundColor: "#303f9f" },
              }}
              onClick={selectAllTables}
            >
              Select All
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f44336", // Red color for "Select None"
                color: "white",
                textTransform: "none",
                padding: "5px 10px",
                borderRadius: "4px",
                "&:hover": { backgroundColor: "#d32f2f" },
              }}
              onClick={selectNoneTables}
            >
              Select None
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {tables.map((table) => (
              <FormControlLabel
                key={table}
                control={
                  <Checkbox
                    checked={selectedTables.includes(table)}
                    onChange={() => handleTableChange(table)}
                  />
                }
                label={table}
                sx={{ marginRight: "10px" }} // Margin to space out the items
              />
            ))}
          </Box>
          <Button
            variant="contained"
            onClick={() => setOpenTableModal(false)}
            sx={{
              marginTop: "20px",
              backgroundColor: "#3f51b5",
              color: "white",
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default CreateData;
