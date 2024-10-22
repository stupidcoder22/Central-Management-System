import {
  Box,
  Button,
  Checkbox,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Modal,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import UserSecurity from "./GroupEdit/UserSecurity";
import MasterCategory from "./GroupEdit/MasterCategory";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Styled Table Cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3f51b5", // Change to your desired header color
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

// User data creation
function createUserData(name, email, role, status, action) {
  return { name, email, role, status, action };
}

// Sample User Data
const rows = [
  createUserData("Asit", "Asit Modi", "User Group", "Admin", "Full Control"),
  createUserData(
    "Vinit",
    "Vinit Sharma",
    "User Group",
    "Maker",
    "Full Control (Inherited)"
  ),
  createUserData(
    "Hemant",
    "Hemant Chauhan",
    "User Group",
    "Checker",
    "Full Control"
  ),
];

function createUserData1(email, action, description = "") {
  return { email, action, description };
}

// Sample User Data
const rows2 = [
  createUserData1("Operations", "Edit", "Description for Operations"),
  createUserData1("Finance", "Edit", "Description for Finance"),
];

const CreateUser = () => {
  const [role, setRole] = React.useState("");
  const [activeTab, setActiveTab] = React.useState(0);

  // Role Modal State
  const [isRoleModalOpen, setRoleModalOpen] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState([]);

  // Master Category Modal State
  const [isMasterCategoryModalOpen, setMasterCategoryModalOpen] =
    useState(false);
  const [selectedMasterCategories, setSelectedMasterCategories] = useState([]);

  const rolesList = ["Admin", "Maker", "Checker"];
  const masterTablesList = ["Table A", "Table B", "Table C"];

  const handleRoleModalToggle = () => {
    setRoleModalOpen(!isRoleModalOpen);
  };

  const handleMasterCategoryModalToggle = () => {
    setMasterCategoryModalOpen(!isMasterCategoryModalOpen);
  };

  const handleRoleSelect = (role) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter((r) => r !== role));
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleNextPage = () => {
    setActiveTab((prevTab) => (prevTab < 2 ? prevTab + 1 : prevTab));
  };

  const handleMasterCategorySelect = (category) => {
    if (selectedMasterCategories.includes(category)) {
      setSelectedMasterCategories(
        selectedMasterCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedMasterCategories([...selectedMasterCategories, category]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: "12px",
        // boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        padding: "",
        width: "90%",
        maxWidth: "1200px",
        margin: "auto",
        marginTop: "20px",
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
        Create New User
      </Typography>

      {/* Tabs for different sections */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          marginBottom: "20px",
          width: "100%",
          "& .MuiTabs-indicator": {
            backgroundColor: "#3f51b5",
          },
        }}
        variant="fullWidth"
        TabIndicatorProps={{ style: { height: "4px" } }}
      >
        <Tab
          label="Properties"
          sx={{ textTransform: "none", fontWeight: "bold" }}
        />
        <Tab
          label="Security"
          sx={{ textTransform: "none", fontWeight: "bold" }}
        />
        <Tab
          label="Member Of"
          sx={{ textTransform: "none", fontWeight: "bold" }}
        />
      </Tabs>

      {/* Tab Content */}
      {activeTab === 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "100%",
          }}
        >
          {/* First Row: Account Name & Full Name */}
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              width: "100%",
            }}
          >
            <TextField
              id="account-name"
              label="Account Name"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "#888" },
                "& .MuiOutlinedInput-root": { borderRadius: "8px" },
              }}
            />
            <TextField
              id="full-name"
              label="Full Name"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputLabel-root": { color: "#888" },
                "& .MuiOutlinedInput-root": { borderRadius: "8px" },
              }}
            />
          </Box>

          {/* Email Field */}
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiInputLabel-root": { color: "#888" },
              "& .MuiOutlinedInput-root": { borderRadius: "8px" },
            }}
          />

          {/* Description Field */}
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

          {/* Password Section */}
          <Typography
            sx={{
              width: "100%",
              fontWeight: "600",
              fontSize: "18px",
              color: "#333",
              marginTop: "30px",
              marginBottom: "15px",
            }}
          >
            Enterprise Password Settings
          </Typography>

          {/* Third Row: Password & Confirm Password */}
          <Box
            sx={{
              display: "flex",
              gap: "20px", // Spacing between the fields
              width: "100%",
            }}
          >
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              sx={{ flex: 1, "& label": { color: "#888" } }}
              type="password"
            />
            <TextField
              id="confirm-password"
              label="Confirm Password"
              variant="outlined"
              sx={{ flex: 1, "& label": { color: "#888" } }}
              type="password"
            />
          </Box>

          {/* Submit and Next Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "10px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3f51b5",
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#303f9f" },
              }}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              onClick={handleNextPage}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "8px",
                borderColor: "#3f51b5",
                color: "#3f51b5",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                  borderColor: "#3f51b5",
                },
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}

      {activeTab === 1 && (
        <Box
          sx={{
            padding: "0px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            marginBlock: "0px",
          }}
        >
          <Box mb={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#3f51b5",
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    marginRight: "10px", // Space between buttons
                    "&:hover": { backgroundColor: "#303f9f" },
                  }}
                  onClick={handleRoleModalToggle}
                >
                  Add Roles
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#3f51b5",
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    "&:hover": { backgroundColor: "#303f9f" },
                  }}
                >
                  Remove
                </Button>
              </Box>
            </Box>
          </Box>

          <List>
            {selectedRoles.map((item, index) => (
              <ListItem key={index}>
                <Typography variant="body1">{item}</Typography>
              </ListItem>
            ))}
          </List>

          <Modal open={isRoleModalOpen} onClose={handleRoleModalToggle}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: 24,
                width: "400px",
              }}
            >
              <Typography variant="h6">Select Roles</Typography>
              <List>
                {rolesList.map((role, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Checkbox
                        checked={selectedRoles.includes(role)}
                        onChange={() => handleRoleSelect(role)}
                      />
                    </ListItemIcon>
                    <ListItemText primary={role} />
                  </ListItem>
                ))}
              </List>
              <Button
                onClick={handleRoleModalToggle}
                variant="contained"
                sx={{ marginTop: "20px", textTransform: "none" }}
              >
                Done
              </Button>
            </Box>
          </Modal>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Name
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Full Name
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Type
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Role
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Access
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.email}>
                    <StyledTableCell component="th" scope="row" align="center">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.role}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.status}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.action}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
      {activeTab === 2 && (
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              mb: 2,
              justifyContent: "start",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3f51b5",
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#303f9f" },
              }}
              onClick={handleMasterCategoryModalToggle}
            >
              Add Master Category
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3f51b5",
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#303f9f" },
              }}
            >
              Remove
            </Button>
          </Box>

          <List>
            {selectedMasterCategories.map((item, index) => (
              <ListItem key={index}>
                <Typography variant="body1">{item}</Typography>
              </ListItem>
            ))}
          </List>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Master Category
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Description
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Master Table
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
                    Actions
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row) => (
                  <StyledTableRow key={row.email}>
                    <StyledTableCell align="center">
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="outlined"
                        sx={{
                          color: "#868DFB",
                          borderColor: "#868DFB",
                          textTransform: "none",
                          borderRadius: "8px",
                          padding: "10px 20px",
                        }}
                      >
                        View
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#3f51b5",
                          textTransform: "none",
                          fontWeight: "bold",
                          padding: "10px 20px",
                          borderRadius: "8px",
                          "&:hover": { backgroundColor: "#303f9f" },
                        }}
                      >
                        Edit
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Modal
            open={isMasterCategoryModalOpen}
            onClose={handleMasterCategoryModalToggle}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: 24,
                width: "400px",
              }}
            >
              <Typography variant="h6">Select Master Category</Typography>
              <List>
                {masterTablesList.map((category, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Checkbox
                        checked={selectedMasterCategories.includes(category)}
                        onChange={() => handleMasterCategorySelect(category)}
                      />
                    </ListItemIcon>
                    <ListItemText primary={category} />
                  </ListItem>
                ))}
              </List>
              <Button
                onClick={handleMasterCategoryModalToggle}
                variant="contained"
                sx={{ marginTop: "20px", textTransform: "none" }}
              >
                Done
              </Button>
            </Box>
          </Modal>
        </Box>
      )}
    </Box>
  );
};

export default CreateUser;
