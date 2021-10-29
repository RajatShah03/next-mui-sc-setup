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
import { styled } from "@mui/material/styles";
import Link from "next/link";

const MenuButton = styled(IconButton)(
  ({ theme }) => `
  margin-right: ${theme.spacing(2)};

  & .MuiSvgIcon-root {
    color: ${theme.palette.common.white};
  }
`
);

const NavContainer = styled("div")(
  ({ theme }) => `
  flex-grow: 1;
  display: flex;
  align-items: center;

  & .MuiTypography-h5 {
    margin-right: ${theme.spacing(2)};
  }
`
);

const NavLink = styled(Typography)(
  ({ theme }) => `
  text-decoration: none;
  margin: 0 ${theme.spacing(1)};
  cursor: pointer;
`
);

const StyledUserButton = styled(Button)(
  ({ theme }) => `
  border: none;
  text-transform: none;

  & .MuiSvgIcon-root {
    margin-right: ${theme.spacing(1)};
  }
`
);

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
        <MenuButton>
          <MenuIcon />
        </MenuButton>
        <NavContainer>
          <Typography variant="h5">LOGO</Typography>
          {links.map((link) => (
            <Link key={link.label} href={link.path} passHref={true}>
              <NavLink component="span">{link.label}</NavLink>
            </Link>
          ))}
        </NavContainer>
        <StyledUserButton
          variant="outlined"
          color="inherit"
          onClick={() => setOpen(true)}
        >
          <AccountCircle />
          <Typography>User Name</Typography>
        </StyledUserButton>
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
