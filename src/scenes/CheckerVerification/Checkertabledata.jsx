import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 700,
  backgroundColor: theme.palette.grey[200],
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const CheckerTableData = () => {
  const headers = ["Product Id", "Product Name", "Category", "City"];

  // Get product data from Redux store
  const productData = useSelector(
    (state) => state.makerandchecker.makerdata.tabledata
  );

  return (
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
  );
};

export default CheckerTableData;
