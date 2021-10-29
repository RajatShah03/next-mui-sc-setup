import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { Box, SxProps } from "@mui/system";

const menuButtonSx = {
  mr: 2,
  "& .MuiSvgIcon-root": {
    color: "common.white",
  },
} as SxProps;

const navContainerSx = {
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  "& .MuiTypography-h5": {
    mr: 2,
  },
} as SxProps;

const navLinkSx = {
  textDecoration: "none",
  mx: 1,
  cursor: "pointer",
} as SxProps;

const userButtonSx = {
  border: "none",
  textTransform: "none",
  "& .MuiSvgIcon-root": {
    mr: 1,
  },
} as SxProps;

const links = [
  {
    label: "Linkone",
    path: "/home",
  },
  {
    label: "Linktwo",
    path: "/home",
  },
  {
    label: "Linkthree",
    path: "/home",
  },
  {
    label: "Linkfour",
    path: "/home",
  },
];

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton sx={menuButtonSx}>
          <MenuIcon />
        </IconButton>
        <Box sx={navContainerSx}>
          <Typography variant="h5">LOGO</Typography>
          {links.map((link) => (
            <Link key={link.label} href={link.path} passHref={true}>
              <Typography sx={navLinkSx} component="span">
                {link.label}
              </Typography>
            </Link>
          ))}
        </Box>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => setOpen(true)}
          sx={userButtonSx}
        >
          <AccountCircle />
          <Typography>User Name</Typography>
        </Button>
        <Menu
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => setOpen(false)}>Profile</MenuItem>
          <MenuItem onClick={() => setOpen(false)}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
