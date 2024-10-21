import React, { useState } from "react";
import { Box, List, ListItem, ListItemText, Divider } from "@mui/material";
import CreateMasterCategory from "./CreateMasterCategory";
import MasterCategoryList from "./MasterCategoryList";
import MasterCategorySecurity from "./MasterCategorySecurity";

const MasterCategoryHome = () => {
  const [selectedContent, setSelectedContent] = useState(
    "Create Master Category"
  );

  const menuItems = [
    { text: "Create Master Category", component: <CreateMasterCategory /> },
    { text: "Master Category List", component: <MasterCategoryList /> },
    { text: "Master Category Security", component: <MasterCategorySecurity /> },
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 230,
          borderRight: "1px solid #ddd",
          padding: "16px",
          height: "100vh",
          position: "sticky",
          top: 0, // Sticks to the top when scrolling
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Added shadow for modern look
        }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => setSelectedContent(item.text)}
              sx={{
                backgroundColor:
                  selectedContent === item.text ? "#3f51b5" : "transparent",
                "&:hover": {
                  backgroundColor: "#d3d3d3",
                },
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  color: selectedContent === item.text ? "white" : "black",
                }}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          padding: "16px",
          height: "100vh",
          overflowY: "auto", // Allows scrolling for the main content
          backgroundColor: "#f9f9f9", // Background color for main content
        }}
      >
        {menuItems.find((item) => item.text === selectedContent)?.component || (
          <h1>Content not found</h1>
        )}
      </Box>
    </Box>
  );
};

export default MasterCategoryHome;
