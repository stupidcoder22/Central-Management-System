import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OrganizeHome from "../../components/OrganizeHome";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ ml: 5, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Select Option</em>
          </MenuItem>
          <MenuItem value={10}>
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

          <MenuItem value={10}>
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

          <MenuItem value={10}>
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

          <MenuItem value={10}>
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

          <MenuItem value={10}>
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
        </Select>
      </FormControl>

      <OrganizeHome />
    </Box>
  );
  ``;
}
