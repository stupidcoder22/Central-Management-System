import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import GavelIcon from "@mui/icons-material/Gavel";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ApprovalIcon from "@mui/icons-material/Approval";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import TableChartIcon from "@mui/icons-material/TableChart";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const HomePage = () => {
  return (
    <Box
      sx={{
        padding: "40px",
        background: "#f0f2f5",
        height: "100vh",
      }}
    >
      <Grid container spacing={4}>
        {/* Column 1 - Organize */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{
              background: "#FFFFFF",
              padding: "15px 20px",
              borderRadius: "8px",
              textAlign: "left",
              fontWeight: "bold",
              color: "#333",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            Organize
          </Typography>

          <Box
            mt={4}
            display="flex"
            alignItems="center"
            justifyContent="left"
            sx={{
              padding: "10px 15px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              cursor: "pointer",
            }}
          >
            <GroupIcon
              sx={{ fontSize: "28px", color: "#3f51b5", marginRight: "15px" }}
            />
            <Typography>
              <Link
                to="/userandgroups"
                style={{
                  color: "#333",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                User and Groups
              </Link>
            </Typography>
          </Box>

          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="left"
            sx={{
              padding: "10px 15px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              cursor: "pointer",
            }}
          >
            <StorageIcon
              sx={{ fontSize: "28px", color: "#3f51b5", marginRight: "15px" }}
            />
            <Typography>
              <Link
                to="/mastercategoryhome"
                style={{
                  color: "#333",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                Master Category
              </Link>
            </Typography>
          </Box>

          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="left"
            sx={{
              padding: "10px 15px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              cursor: "pointer",
            }}
          >
            <TableChartIcon
              sx={{ fontSize: "28px", color: "#3f51b5", marginRight: "15px" }}
            />
            <Typography>
              <Link
                to="/mastertablehome"
                style={{
                  color: "#333",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                Master Table
              </Link>
            </Typography>
          </Box>

          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="left"
            sx={{
              padding: "10px 15px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              cursor: "pointer",
            }}
          >
            <FileUploadIcon
              sx={{ fontSize: "28px", color: "#3f51b5", marginRight: "15px" }}
            />
            <Typography>
              <Link
                to="/makerupload"
                style={{
                  color: "#333",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                Maker Upload
              </Link>
            </Typography>
          </Box>

          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="left"
            sx={{
              padding: "10px 15px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              cursor: "pointer",
            }}
          >
            <ApprovalIcon
              sx={{ fontSize: "28px", color: "#3f51b5", marginRight: "15px" }}
            />
            <Typography>
              <Link
                to="/checkerverification"
                style={{
                  color: "#333",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                Checker Verification
              </Link>
            </Typography>
          </Box>

          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="left"
            sx={{
              padding: "10px 15px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              cursor: "pointer",
            }}
          >
            <AccountTreeIcon
              sx={{ fontSize: "28px", color: "#3f51b5", marginRight: "15px" }}
            />
            <Typography>
              <Link
                to="/connections"
                style={{
                  color: "#333",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                Connection
              </Link>
            </Typography>
          </Box>
        </Grid>

        {/* Column 2 - Define */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{
              background: "#FFFFFF",
              padding: "15px 20px",
              borderRadius: "8px",
              textAlign: "left",
              fontWeight: "bold",
              color: "#333",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            Define
          </Typography>

          <Box
            mt={4}
            display="flex"
            alignItems="center"
            justifyContent="left"
            sx={{
              padding: "10px 15px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              cursor: "pointer",
            }}
          >
            <GavelIcon
              sx={{ fontSize: "28px", color: "#3f51b5", marginRight: "15px" }}
            />
            <Typography>
              <Link
                to="/home"
                style={{
                  color: "#333",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                Roles
              </Link>
            </Typography>
          </Box>
        </Grid>

        {/* Column 3 - Manage */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{
              background: "#FFFFFF",
              padding: "15px 20px",
              borderRadius: "8px",
              textAlign: "left",
              fontWeight: "bold",
              color: "#333",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            Manage
          </Typography>

          <Box
            mt={4}
            display="flex"
            alignItems="center"
            justifyContent="left"
            sx={{
              padding: "10px 15px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              cursor: "pointer",
            }}
          >
            <AppRegistrationIcon
              sx={{ fontSize: "28px", color: "#3f51b5", marginRight: "15px" }}
            />
            <Typography>
              <Link
                to="/application"
                style={{
                  color: "#333",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                Applications
              </Link>
            </Typography>
          </Box>

          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="left"
            sx={{
              padding: "10px 15px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              cursor: "pointer",
            }}
          >
            <AdminPanelSettingsIcon
              sx={{ fontSize: "28px", color: "#3f51b5", marginRight: "15px" }}
            />
            <Typography>
              <Link
                to="/home"
                style={{
                  color: "#333",
                  fontSize: "16px",
                  textDecoration: "none",
                }}
              >
                Auditing
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
