import React, { useState } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import ConnectionList from "./ConnectionList";
import ConnectionMasterTable from "./ConnectionMasterTable";

const Connections = () => {
  const [selectedContent, setSelectedContent] = useState("Connection List");

  const menuItems = [
    { text: "Connection List", component: <ConnectionList /> },
    { text: "Master Table", component: <ConnectionMasterTable /> },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
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
          height: "fit-content",
          padding: "16px",
          position: "sticky",
          top: "20px",
        }}
      >
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
          overflowY: "auto",
          maxHeight: "100vh",
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

export default Connections;
