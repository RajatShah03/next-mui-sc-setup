import { AddBoxOutlined } from "@mui/icons-material";
import { Button, Divider, Paper, Stack } from "@mui/material";
import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";

const SidebarContainer = styled(Paper)(
  ({ theme }) => `
  border-radius: 0;
  height: 100%;
  box-shadow: none;
  padding: ${theme.spacing(1)} 0;
  border-right: 1.5px solid #eee;
  position: fixed;
  left: ${theme.spacing(1)};
  right: 85%
`
);

const SidebarItems = styled(Button)(
  ({ theme }) => `
  border-radius: 0;
  padding: ${theme.spacing(1)} 0;
  text-transform: none;
  justify-content: flex-start;

  & .MuiSvgIcon-root {
    color: ${theme.palette.common.black};
    margin-right: ${theme.spacing(1)}
  }
`
);

const items = [
  {
    label: "MenuItem One",
    icon: <AddBoxOutlined />,
    click: (cb) => {
      cb();
    },
  },
  {
    label: "MenuItem Two",
    icon: <AddBoxOutlined />,
    click: (cb) => {
      cb();
    },
  },
  {
    label: "MenuItem Three",
    icon: <AddBoxOutlined />,
    click: (cb) => {
      cb();
    },
  },
  {
    label: "MenuItem Four",
    icon: <AddBoxOutlined />,
    click: (cb) => {
      cb();
    },
  },
  {
    label: "MenuItem Five",
    icon: <AddBoxOutlined />,
    click: (cb) => {
      cb();
    },
  },
];

const Sidebar = ({ setLoading }): JSX.Element => {
  return (
    <SidebarContainer>
      <Stack>
        {items.map((item) => (
          <Fragment key={item.label}>
            <SidebarItems onClick={() => item.click(() => setLoading(true))}>
              {item.icon}
              {item.label}
            </SidebarItems>
            <Divider />
          </Fragment>
        ))}
      </Stack>
    </SidebarContainer>
  );
};

export default Sidebar;
