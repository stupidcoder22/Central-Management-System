import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 700,
  backgroundColor: "#3f51b5", // Blue background for header
  color: "#fff", // White text for header to contrast with blue
  padding: theme.spacing(1), // Custom padding
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover, // Hover effect for odd rows
  },
}));

const CheckerTableData = () => {
  const headers = ["Product Id", "Product Name", "Category", "City"];

  // Get product data from Redux store
  const productData = useSelector(
    (state) => state.makerandchecker.makerdata.tabledata
  );

  return (
    <Grid container>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="product table">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <StyledTableCell align="center" key={header}>
                    {header}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {productData.map((product) => (
                <StyledTableRow key={product.id}>
                  <TableCell align="center">{product.id}</TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.billingStreet}</TableCell>
                  <TableCell align="center">{product.billingCity}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default CheckerTableData;
