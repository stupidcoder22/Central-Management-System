import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

export default function Dialog() {
  const [anchorPosition, setAnchorPosition] = useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setAnchorPosition({
      top: event.clientY,
      left: event.clientX,
    });
  };

  const handleClose = () => {
    setAnchorPosition(null);
  };

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: "pointer" }}>
      {/* Username or any element you want to trigger the context menu */}
      <span>Right-click on Username</span>

      {/* Material UI Menu */}
      <Menu
        open={Boolean(anchorPosition)}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          anchorPosition
            ? { top: anchorPosition.top, left: anchorPosition.left }
            : undefined
        }
        keepMounted
      >
        <MenuItem onClick={handleClose}>Refresh</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </div>
  );
}
