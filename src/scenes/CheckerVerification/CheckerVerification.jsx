import React, { useState } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import UploadDataList from "./UploadDataList";
import ValidateUpload from "./ValidateUpload";
import Notification from "./Notification";

const CheckerVerification = () => {
  const [selectedContent, setSelectedContent] = useState("Validate Data List");

  const menuItems = [
    { text: "Validate Data", component: <ValidateUpload /> },
    { text: "Validate Data List", component: <UploadDataList /> },
    { text: "Notification", component: <Notification /> },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh", // Make it full viewport height
        backgroundColor: "#f0f2f5",
        padding: "20px",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: 240,
          borderRight: "2px solid #ddd",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          height: "fit-content", // Sidebar height is based on its content
          padding: "16px",
          position: "sticky",
          top: "20px", // Ensures the sidebar stays in place on scroll
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333",
            textAlign: "left",
          }}
        >
          Manage Users
        </Typography>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => setSelectedContent(item.text)}
              sx={{
                borderRadius: "6px",
                marginBottom: "10px",
                padding: "10px 15px",
                backgroundColor:
                  selectedContent === item.text ? "#e3f2fd" : "#fff",
                color: selectedContent === item.text ? "#3f51b5" : "#333",
                transition: "background-color 0.3s ease",
                boxShadow:
                  selectedContent === item.text
                    ? "0 2px 10px rgba(0, 0, 0, 0.1)"
                    : "none",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                },
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          marginLeft: "20px",
          overflowY: "auto", // Enables vertical scrolling for content area
          maxHeight: "100vh", // Prevents content overflow beyond the viewport
        }}
      >
        <Box>
          {menuItems.find((item) => item.text === selectedContent)
            ?.component || <h1>Content not found</h1>}
        </Box>
      </Box>
    </Box>
  );
};

export default CheckerVerification;
