import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CreateUser from "./CreateUser";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3f51b5", // Darker primary color for table header
    color: theme.palette.common.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "16px 20px", // Increased padding for a more modern look
    color: "#333", // Darker text for better readability
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f9f9f9", // Light gray background for odd rows
  },
  "&:hover": {
    backgroundColor: "#e3f2fd", // Hover effect to indicate row interaction
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createUserData(name, email, role, status, action) {
  return { name, email, role, status, action };
}

const rows = [
  createUserData("John Doe", "john@example.com", "Admin", "Active", "Edit"),
  createUserData(
    "Jane Smith",
    "jane@example.com",
    "Editor",
    "Inactive",
    "Edit"
  ),
  createUserData("Sam Johnson", "sam@example.com", "Viewer", "Active", "Edit"),
  createUserData(
    "Emily Davis",
    "emily@example.com",
    "Admin",
    "Pending",
    "Edit"
  ),
  createUserData("Chris Lee", "chris@example.com", "Viewer", "Active", "Edit"),
];

export default function UserTable() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuPosition, setMenuPosition] = useState(null);
  const [toggle, settoggle] = useState(true);

  const handleRightClick = (event, user) => {
    event.preventDefault();
    setMenuPosition({ top: event.clientY, left: event.clientX });
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuPosition(null);
  };

  return (
    <>
      {toggle ? (
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            // mt: 3,
          }}
        >
          <Button
            onClick={() => settoggle(!true)}
            variant="contained"
            sx={{
              backgroundColor: "#3f51b5",
              textTransform: "none",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#303f9f" },
              mb: 3,
            }}
          >
            Create User
          </Button>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>User Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Role</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.email}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    onContextMenu={(event) => handleRightClick(event, row)}
                    style={{ cursor: "context-menu" }}
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <StyledTableCell align="right">{row.role}</StyledTableCell>
                  <StyledTableCell align="right">{row.status}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#3f51b5",
                        textTransform: "none",
                        fontWeight: "bold",
                        borderRadius: "6px",
                        padding: "6px 12px",
                        "&:hover": {
                          backgroundColor: "#303f9f",
                        },
                      }}
                    >
                      <Link
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                        to={"/usergroupedit"}
                      >
                        {row.action}
                      </Link>
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <CreateUser />
      )}

      {/* Context Menu for Right Click */}
      <Menu
        anchorReference="anchorPosition"
        anchorPosition={
          menuPosition
            ? { top: menuPosition.top, left: menuPosition.left }
            : undefined
        }
        open={Boolean(menuPosition)}
        onClose={handleClose}
        PaperProps={{
          style: {
            padding: "10px",
            width: "200px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <MenuItem
          sx={{
            borderBottom: "1px solid #eee",
            padding: "10px",
            "&:hover": { backgroundColor: "#e3f2fd" },
          }}
          onClick={handleClose}
        >
          <Link
            to="/usergroupedit"
            style={{ textDecoration: "none", color: "#333" }}
          >
            Properties
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            borderBottom: "1px solid #eee",
            padding: "10px",
            "&:hover": { backgroundColor: "#e3f2fd" },
          }}
          onClick={handleClose}
        >
          <Link
            to="/usergroupedit"
            state={{ tab: "User Security" }}
            style={{ textDecoration: "none", color: "#333" }}
          >
            User Securities
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            borderBottom: "1px solid #eee",
            padding: "10px",
            "&:hover": { backgroundColor: "#e3f2fd" },
          }}
          onClick={handleClose}
        >
          <Link
            to="/usergroupedit"
            style={{ textDecoration: "none", color: "#333" }}
          >
            Master Category
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            borderBottom: "1px solid #eee",
            padding: "10px",
            "&:hover": { backgroundColor: "#e3f2fd" },
          }}
          onClick={handleClose}
        >
          <Link
            to="/usergroupedit"
            style={{ textDecoration: "none", color: "#333" }}
          >
            Profile Values
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            padding: "10px",
            "&:hover": { backgroundColor: "#e3f2fd" },
          }}
          onClick={handleClose}
        >
          <Link
            to="/usergroupedit"
            style={{ textDecoration: "none", color: "#333" }}
          >
            Delete
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}
