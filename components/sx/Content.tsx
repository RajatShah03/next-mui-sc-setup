import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Box, SxProps } from "@mui/system";

const outerBoxSx = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  mt: 1,
} as SxProps;

const innerBoxSx = {
  ...outerBoxSx,
  mb: 6,
} as SxProps;

const cardActionsSx = {
  py: 1,
  px: 2,
  justifyContent: "space-between",
} as SxProps;

const RENDER_N: number = 10;

const Content = () => {
  return (
    <Box sx={outerBoxSx}>
      {[...Array(RENDER_N).keys()].map((e) => (
        <Box key={e.toString()} sx={innerBoxSx}>
          <Typography variant="h5" gutterBottom>
            Heading One
          </Typography>
          <br />
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Grid key={item} item sm={12} md={3} lg={4} xl={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Title</Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant="subtitle2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt nihil hic aliquam pariatur provident iste.
                    </Typography>
                  </CardContent>
                  <CardActions sx={cardActionsSx}>
                    <Typography variant="h4">21</Typography>
                    <Button>Click</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Content;
