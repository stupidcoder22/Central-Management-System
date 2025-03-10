import React, { useState } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import CreateData from "./CreateData";
import UploadDataList from "./UploadDataList";
import MakerNotification from "./MakerNotification";

const MakerUpload = () => {
  const [selectedContent, setSelectedContent] = useState("Upload Data List");

  const [rightSidebar, setrightSidebar] = useState(false);

  const [title, settitle] = useState("");

  const toggleSidebar = ({ flag, text }) => {
    console.log(text);
    if (text) {
      setrightSidebar(flag);
      settitle(text);
    } else {
      doOpposite();
    }
  };

  const doOpposite = () => {
    console.log("aaya");
    setrightSidebar(!rightSidebar);
  };

  const menuItems = [
    // { text: "Create Data", component: <CreateData /> },
    {
      text: "Upload Data List",
      component: <UploadDataList toggleSidebar={toggleSidebar} />,
    },
    { text: "Notification", component: <MakerNotification /> },
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

      {/* Right Sidebar */}

      {rightSidebar && (
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
            ml: 2,
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: 2 }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Row Count:</strong> 1,000
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Unique Values:</strong>
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="TRIM" />
            </ListItem>
            <ListItem>
              <ListItemText primary="DeDuplicate" />
            </ListItem>
          </List>

          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: 2 }}
          >
            Additional options for data analysis can be added here.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default MakerUpload;
