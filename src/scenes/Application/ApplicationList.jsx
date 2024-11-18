import { Box, Button, Menu, MenuItem } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import CreateApplication from "./CreateApplication";
import AssignMasterTable from "./AssignMasterTable";
import AssignUserApplcation from "./AssignUserApplcation";

// Styled Table Cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3f51b5", // Header color
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Styled Table Rows
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Updated User data creation
function createUserData(
  masterTable,
  category,
  description,
  lastModified,
  action,
  createdBy,
  createdDate
) {
  return {
    masterTable,
    category,
    description,
    lastModified,
    action,
    createdBy,
    createdDate,
  };
}

const rows = [
  createUserData(
    "Operations Master 1",
    "Operations",
    "Description for Operations",
    "02-04-2023",
    "Modify",
    "Jane Smith",
    "05-11-2020"
  ),
  createUserData(
    "Finance Master 1",
    "Finance",
    "Description for Finance",
    "01-04-2023",
    "Modify",
    "Sam Johnson",
    "10-2-2019"
  ),
  createUserData(
    "HR Master 1",
    "HR",
    "Description for HR",
    "07-04-2023",
    "Modify",
    "Emily Davis",
    "21-2-2023"
  ),
];

const ApplicationList = () => {
  const [toggleButtons, settoggleButtons] = React.useState({
    createApplication: false,
    assignMastertale: false,
    assignUser: false,
    default: true,
  });

  const [menuPosition, setMenuPosition] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedRow, setSelectedRow] = React.useState(null);

  // Handlers for context menu
  const handleRightClick = (event, row) => {
    event.preventDefault();
    setMenuPosition({ top: event.clientY, left: event.clientX });
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleClose = (text) => {
    setAnchorEl(null);
    setMenuPosition(null);
    setSelectedRow(null);
    if (text === "user") {
      changeUser();
    }

    if (text === "master") {
      changemasterTable();
    }
  };

  // Button toggle handlers
  const changeapplication = () => {
    settoggleButtons({
      createApplication: true,
      assignMastertale: false,
      assignUser: false,
      default: false,
    });
  };
  const changemasterTable = () => {
    settoggleButtons({
      createApplication: false,
      assignMastertale: true,
      assignUser: false,
      default: false,
    });
  };
  const changeUser = () => {
    settoggleButtons({
      createApplication: false,
      assignMastertale: false,
      assignUser: true,
      default: false,
    });
  };

  return (
    <Box>
      <Box mb={2}>
        <Box sx={{ display: "flex", gap: "64px" }}>
          {toggleButtons.default && (
            <Box sx={{ display: "flex", gap: "14px" }}>
              <Button
                variant="contained"
                sx={{ background: "#3F51B5" }}
                onClick={changeapplication}
              >
                Create Application
              </Button>
              <Button
                variant="contained"
                sx={{ background: "#3F51B5" }}
                onClick={changemasterTable}
              >
                Assign Master Table
              </Button>
              <Button
                variant="contained"
                sx={{ background: "#3F51B5" }}
                onClick={changeUser}
              >
                Assign User
              </Button>
              <Button variant="contained" sx={{ background: "red" }}>
                Remove
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {toggleButtons.default && (
        <Box sx={{ overflowX: "auto" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Name
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Description
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Master Category
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Master Table
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Last Date Modified
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Users
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Created By
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Created Date
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow
                    key={row.masterTable}
                    onContextMenu={(event) => handleRightClick(event, row)} // Right-click handler
                    style={{ cursor: "context-menu" }}
                  >
                    <StyledTableCell align="center">
                      {row.masterTable}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        sx={{ background: "#3F51B5" }}
                      >
                        Modify
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        sx={{ background: "#3F51B5" }}
                      >
                        Modify
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.lastModified}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        sx={{ background: "#3F51B5" }}
                      >
                        {row.action}
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.createdBy}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.createdDate}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {/* Right-Click Context Menu */}
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
        <MenuItem onClick={() => handleClose("master")}>
          <Link
            to="/application"
            style={{ textDecoration: "none", color: "#333" }}
          >
            Assign Master Table
          </Link>
        </MenuItem>
        <MenuItem onClick={() => handleClose("user")}>
          <Link
            to="/application"
            style={{ textDecoration: "none", color: "#333" }}
          >
            Assign User
          </Link>
        </MenuItem>
        <MenuItem onClick={() => handleClose()} style={{ color: "red" }}>
          Remove
        </MenuItem>
      </Menu>

      {toggleButtons.createApplication && <CreateApplication />}
      {toggleButtons.assignMastertale && <AssignMasterTable />}
      {toggleButtons.assignUser && <AssignUserApplcation />}
    </Box>
  );
};

export default ApplicationList;
