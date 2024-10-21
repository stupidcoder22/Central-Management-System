import React, { createContext, useEffect, useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Navbar, SideBar } from "./scenes";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const ToggledContext = createContext(null);

function App() {
  const [theme, colorMode] = useMode();
  const [toggled, setToggled] = useState(false);
  const values = { toggled, setToggled };
  const location = useLocation();
  const isAuth = JSON.parse(localStorage.getItem("userdata"));
  const navigation = useNavigate();

  useEffect(() => {
    if (!isAuth?.flag) {
      navigation("/login");
    }
  }, [location.pathname, isAuth, navigation]);

  // Hide sidebar and navbar on login and register pages
  const hideSidebar =
    location.pathname === "/login" || location.pathname === "/register";
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToggledContext.Provider value={values}>
            <Box sx={{ display: "flex", height: "100vh", maxWidth: "100%" }}>
              {!hideSidebar && <SideBar />}
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  maxWidth: "100%",
                }}
              >
                {/* Conditionally render Navbar based on current page */}
                {!hideNavbar && <Navbar />}
                <Box sx={{ overflowY: "auto", flex: 1, maxWidth: "100%" }}>
                  <Outlet />
                </Box>
              </Box>
            </Box>
          </ToggledContext.Provider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
