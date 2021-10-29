import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const FooterContainer = styled("footer")(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  position: static;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${theme.spacing(2)};
  z-index: ${theme.zIndex.modal}
`
);

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2" color="text.secondary">
        Footer sc
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
