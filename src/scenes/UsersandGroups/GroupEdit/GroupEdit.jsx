import React, { useState } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import UserSecurity from "./UserSecurity";
import PropertiesData from "./PropertiesData";
import MasterCategory from "./MasterCategory";
import MasterTable from "../MasterTable";

const GroupEdit = () => {
  const [selectedContent, setSelectedContent] = useState("Properties");

  const menuItems = [
    { text: "Properties", component: <PropertiesData /> },
    { text: "User Security", component: <UserSecurity /> },
    {
      text: "Master Category",
      component: (
        <MasterCategory onViewClick={() => setSelectedContent("MasterTable")} />
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh", // Full viewport height
        backgroundColor: "#f0f2f5",
        padding: "20px",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: 240, // Consistent width with UserandGroups
          borderRight: "2px solid #ddd",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          height: "fit-content", // Adjust based on content
          padding: "16px",
          position: "sticky",
          top: "20px", // Stays in view on scroll
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
          Edit Group
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

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          marginLeft: "20px",
          overflowY: "auto", // Enable scrolling for content
          maxHeight: "100vh", // Prevents content overflow
        }}
      >
        {selectedContent === "MasterTable" ? (
          <MasterTable />
        ) : (
          menuItems.find((item) => item.text === selectedContent)
            ?.component || <h1>Content not found</h1>
        )}
      </Box>
    </Box>
  );
};

export default GroupEdit;
