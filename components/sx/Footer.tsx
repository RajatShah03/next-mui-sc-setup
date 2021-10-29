import React from "react";
import { Typography } from "@mui/material";
import { Box, SxProps } from "@mui/system";

const footerContainerSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "static",
  bottom: 0,
  left: 0,
  right: 0,
  padding: 2,
  zIndex: "modal",
} as SxProps;

const Footer = () => {
  return (
    <Box sx={footerContainerSx}>
      <Typography variant="body2" color="text.secondary">
        Footer sc
      </Typography>
    </Box>
  );
};

export default Footer;
