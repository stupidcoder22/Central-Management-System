/* eslint-disable react/prop-types */
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { tokens } from "../../../theme";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { MenuOutlined } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import Item from "./Item";
import { ToggledContext } from "../../../App";
import logo from "../../../assets/images/natural-disaster.png";
import { useNavigate } from "react-router-dom";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import PersonIcon from "@mui/icons-material/Person";
import StorageIcon from "@mui/icons-material/Storage";
import ApprovalIcon from "@mui/icons-material/Approval";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import TableChartIcon from "@mui/icons-material/TableChart";
import PolylineIcon from "@mui/icons-material/Polyline";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const { toggled, setToggled } = useContext(ToggledContext);
  const navigation = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Sidebar
      backgroundColor={colors.primary[400]}
      rootStyles={{
        border: 0,
        height: "100%",
        position: "relative",
      }}
      collapsed={collapsed}
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="md"
    >
      <Menu
        menuItemStyles={{
          button: { ":hover": { background: "transparent" } },
        }}
      >
        <MenuItem
          rootStyles={{
            margin: "10px 0 20px 0",
            color: colors.gray[100],
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                alignItems="center"
                gap="12px"
                sx={{ transition: ".3s ease" }}
              >
                <img
                  style={{ width: "30px", height: "30px", borderRadius: "8px" }}
                  src={logo}
                  alt="Argon"
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  textTransform="capitalize"
                  color={colors.greenAccent[500]}
                >
                  CMS
                </Typography>
              </Box>
            )}
            <IconButton>
              <MenuOutlined />
            </IconButton>
          </Box>
        </MenuItem>
      </Menu>

      <Box mb={5} pl={collapsed ? undefined : "5%"}>
        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Main" : " "}
        </Typography>{" "}
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item title="Home" path="/home" colors={colors} icon={<HomeIcon />} />

          <Item
            title="Group"
            path="/userandgroups"
            colors={colors}
            icon={<SupervisedUserCircleIcon />}
          />

          <Item
            title="Master Database"
            path="/mastercategoryhome"
            colors={colors}
            icon={<StorageIcon />}
          />
          <Item
            title="Master Database"
            path="/mastertablehome"
            colors={colors}
            icon={<TableChartIcon />}
          />
          <Item
            title="Master Database"
            path="/makerupload"
            colors={colors}
            icon={<FileUploadIcon />}
          />
          <Item
            title="Checker Verification"
            path="/checkerverification"
            colors={colors}
            icon={<ApprovalIcon />}
          />
          <Item
            title="Connections"
            path="/connections"
            colors={colors}
            icon={<PolylineIcon />}
          />
        </Menu>
        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Pages" : " "}
        </Typography>
      </Box>
    </Sidebar>
  );
};

export default SideBar;
