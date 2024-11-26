import React, { useState, useEffect } from "react";
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
  backgroundColor: "#3f51b5",
  color: "#fff",
  padding: theme.spacing(1),
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover, // Hover effect for odd rows
  },
}));

// The original table data (static, non-updated)
const originalTableData = [
  {
    id: "0010H00002QT5z7QAF",
    name: "Product A",
    billingStreet: "Category A",
    billingCity: "SPRINGFIELD",
    billingState: "IL",
  },
  {
    id: "0010H00002QT5z8QAF",
    name: "Product B",
    billingStreet: "Category B",
    billingCity: "PEORIA",
    billingState: "AZ",
  },
  {
    id: "0010H00002QT5z9QAF",
    name: "Product C",
    billingStreet: "Category C",
    billingCity: "ALBUQUERQUE",
    billingState: "NM",
  },
  {
    id: "0010H00002QT6z0QAF",
    name: "Product D",
    billingStreet: "Category D",
    billingCity: "ARCATA",
    billingState: "CA",
  },
];

const CheckerTableData = () => {
  const headers = ["Product Id", "Product Name", "Category", "City"];

  const productData = useSelector(
    (state) => state.makerandchecker.makerdata.tabledata
  );

  const [updatedCells, setUpdatedCells] = useState({});

  useEffect(() => {
    const updated = {};
    productData.forEach((updatedRow, rowIndex) => {
      const originalRow = originalTableData[rowIndex];
      if (originalRow) {
        Object.keys(updatedRow).forEach((key, colIndex) => {
          if (updatedRow[key] !== originalRow[key]) {
            updated[`${rowIndex}-${colIndex}`] = true;
          }
        });
      }
    });
    setUpdatedCells(updated);
  }, [productData]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" mb={3}>
          Product Data Table
        </Typography>
      </Grid>
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
              {productData.map((product, rowIndex) => (
                <StyledTableRow key={product.id}>
                  {Object.values(product)
                    .slice(0, 4)
                    .map((cell, colIndex) => (
                      <TableCell
                        key={colIndex}
                        align="center"
                        sx={{
                          backgroundColor: updatedCells[
                            `${rowIndex}-${colIndex}`
                          ]
                            ? "#d1e3f9"
                            : "inherit",
                        }}
                      >
                        <Typography>{cell}</Typography>
                      </TableCell>
                    ))}
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
