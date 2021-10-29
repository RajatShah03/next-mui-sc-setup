import React, { useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { Box, SxProps } from "@mui/system";

const mainContainerSx = {
  py: 7,
} as SxProps;

const sidebarGridItemSx = {
  display: {
    xs: "none",
    sm: "none",
    md: "block",
  },
} as SxProps;

const loaderContainerSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70vh",
} as SxProps;

const Main = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 2000);
    }
  }, [isLoading]);

  return (
    <Box sx={mainContainerSx}>
      <Grid container columnSpacing={4}>
        <Grid item md={2} sx={sidebarGridItemSx}>
          <Sidebar setLoading={setIsLoading} />
        </Grid>
        <Grid item xs={12} md={10}>
          {isLoading ? (
            <Box sx={loaderContainerSx}>
              <CircularProgress />
            </Box>
          ) : (
            <Content />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
