import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  useTheme,
  Paper,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const isAuth = JSON.stringify(localStorage.getItem("userdata"));
  const navigation = useNavigate();
  const userdata = {
    username: "admin",
    pass: "admin",
  };

  useEffect(() => {
    if (isAuth?.flag) {
      navigation("/home");
    }
  }, [location.pathname]);

  const theme = useTheme();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    system: "",
    authentication: "Enterprise",
  });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.username === userdata.username &&
      formData.password === userdata.pass
    ) {
      localStorage.setItem("userdata", JSON.stringify({ flag: true }));
      navigation("/home");
    } else {
      // Handle login failure (e.g., display error message)
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 1, sm: 2 },
        overflowX: "hidden",
        alignContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: { xs: 3, sm: 5 },
          maxWidth: { xs: "90%", sm: 400 },
          width: "100%",
          borderRadius: 3,
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgb(102 145 166 / 30%);"
              : theme.palette.background.paper,
          boxSizing: "border-box",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            variant="h5"
            align="center"
            color="primary"
            sx={{ fontWeight: "bold" }}
          >
            Master Data Management
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary">
            Please login to your account
          </Typography>

          {/* Username Field */}
          <TextField
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            error={!!errors.username}
            helperText={errors.username}
            required
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="action" fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& label": {
                color:
                  theme.palette.mode === "dark"
                    ? "white"
                    : theme.palette.text.primary,
              },
              "& label.Mui-focused": {
                color: theme.palette.mode === "dark" ? "white" : "black",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.text.secondary,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.text.primary,
                },
                "&.Mui-focused fieldset": {
                  borderColor:
                    theme.palette.mode === "dark"
                      ? "white"
                      : theme.palette.primary.main,
                },
              },
            }}
          />

          {/* System Field (TextField) */}
          <TextField
            label="System"
            name="system"
            type="text"
            value={formData.system}
            onChange={handleInputChange}
            required
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="action" fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& label": {
                color:
                  theme.palette.mode === "dark"
                    ? "white"
                    : theme.palette.text.primary,
              },
              "& label.Mui-focused": {
                color: theme.palette.mode === "dark" ? "white" : "black",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.text.secondary,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.text.primary,
                },
                "&.Mui-focused fieldset": {
                  borderColor:
                    theme.palette.mode === "dark"
                      ? "white"
                      : theme.palette.primary.main,
                },
              },
            }}
          />

          <FormControl fullWidth required>
            <InputLabel>Authentication</InputLabel>
            <Select
              name="authentication"
              value={formData.authentication}
              onChange={handleInputChange}
              label="Authentication"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.dark,
                  },
                },
              }}
            >
              <MenuItem value="Enterprise">Enterprise</MenuItem>
              <MenuItem value="Windows AD">Windows AD</MenuItem>
            </Select>
          </FormControl>

          {/* Password Field */}
          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            error={!!errors.password}
            helperText={errors.password}
            required
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="action" fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.primary.main,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary.dark,
                },
              },
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{
              py: 1.5,
              mt: 1,
              borderRadius: 2,
              backgroundColor: theme.palette.primary.main,
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            {"Login"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
