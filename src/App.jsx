import React, { createContext, useEffect, useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Navbar, SideBar } from "./scenes";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const ToggledContext = createContext(null);

function App() {
  const [theme, colorMode] = useMode();
  const [toggled, setToggled] = useState(false);
  const values = { toggled, setToggled };
  const location = useLocation();
  const isAuth = JSON.parse(localStorage.getItem("userdata"));
  const navigation = useNavigate();
  const [age, setAge] = React.useState("Home");

  const updateSelectValue = (pathname) => {
    switch (pathname) {
      case "/home":
        setAge("Home");
        break;
      case "/userandgroups":
        setAge("User And Group");
        break;
      case "/mastercategoryhome":
        setAge("Master Category");
        break;
      case "/mastertablehome":
        setAge("Master Table");
        break;
      case "/makerupload":
        setAge("Maker Upload");
        break;
      case "/checkerverification":
        setAge("Checker Verification");
        break;
      case "/connections":
        setAge("Connections");
        break;
      case "/application":
        setAge("Application");
        break;
      default:
        setAge("");
        break;
    }
  };

  useEffect(() => {
    updateSelectValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    if (!isAuth?.flag) {
      navigation("/login");
    }
  }, [location.pathname, isAuth, navigation]);

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
                {!hideNavbar && <Navbar />}
                <Box sx={{ overflowY: "auto", flex: 1, maxWidth: "100%" }}>
                  {!hideNavbar && (
                    <FormControl sx={{ ml: 5, minWidth: 120 }}>
                      <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="Home">
                          <Link
                            to={"/home"}
                            style={{
                              color: "black",
                              textDecoration: "none",
                            }}
                          >
                            <em>Home</em>
                          </Link>
                        </MenuItem>
                        <MenuItem value={"User And Group"}>
                          <Link
                            to={"/userandgroups"}
                            style={{
                              color: "black",
                              textDecoration: "none",
                            }}
                          >
                            User and Group
                          </Link>
                        </MenuItem>

                        <MenuItem value={"Master Category"}>
                          <Link
                            to={"/mastercategoryhome"}
                            style={{
                              color: "black",
                              textDecoration: "none",
                            }}
                          >
                            Master Category
                          </Link>
                        </MenuItem>

                        <MenuItem value={"Master Table"}>
                          <Link
                            to={"/mastertablehome"}
                            style={{
                              color: "black",
                              textDecoration: "none",
                            }}
                          >
                            Master Table
                          </Link>
                        </MenuItem>

                        <MenuItem value={"Maker Upload"}>
                          <Link
                            to={"/makerupload"}
                            style={{
                              color: "black",
                              textDecoration: "none",
                            }}
                          >
                            Maker Upload
                          </Link>
                        </MenuItem>

                        <MenuItem value={"Checker Verification"}>
                          <Link
                            to={"/checkerverification"}
                            style={{
                              color: "black",
                              textDecoration: "none",
                            }}
                          >
                            Checker Verification
                          </Link>
                        </MenuItem>

                        <MenuItem value={"Connections"}>
                          <Link
                            to={"/connections"}
                            style={{
                              color: "black",
                              textDecoration: "none",
                            }}
                          >
                            Connections
                          </Link>
                        </MenuItem>

                        <MenuItem value={"Application"}>
                          <Link
                            to={"/application"}
                            style={{
                              color: "black",
                              textDecoration: "none",
                            }}
                          >
                            Application
                          </Link>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  )}
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
