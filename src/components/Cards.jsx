import React from "react";
import { Box, Grid, Paper, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom styled component for the card container
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? theme.palette.primary.main : theme.palette.background.paper,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    boxShadow: theme.shadows[8],
  },
}));

export default function Cards() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid
        container
        spacing={3}  // Use uniform spacing
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>  {/* xs=12 (1 card), sm=6 (2 cards), md=4 (3 cards) */}
            <Item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="iframe"
                  height="140"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  title="YouTube Video"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Title {index + 1}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet deserunt voluptatem hic labore veritatis vel.
                  </Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
