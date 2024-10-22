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
      

      <OrganizeHome />
    </Box>
  );
  ``;
}
