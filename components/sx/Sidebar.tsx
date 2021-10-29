import { AddBoxOutlined } from "@mui/icons-material";
import { Button, Divider, Paper, Stack } from "@mui/material";
import React, { Fragment } from "react";
import { SxProps } from "@mui/system";

const sidebarContainerSx = {
  borderRadius: 0,
  height: "100%",
  boxShadow: "none",
  py: 1,
  borderRight: "1.5px solid #eee",
  position: "fixed",
  left: "8px",
  right: "85%",
} as SxProps;

const sidebarItemsSx = {
  borderRadius: 0,
  py: 1,
  px: 0,
  textTransform: "none",
  justifyContent: "flex-start",
  "& .MuiSvgIcon-root": {
    color: "common.black",
    mr: 1,
  },
} as SxProps;

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
    <Paper sx={sidebarContainerSx}>
      <Stack>
        {items.map((item) => (
          <Fragment key={item.label}>
            <Button
              onClick={() => item.click(() => setLoading(true))}
              sx={sidebarItemsSx}
            >
              {item.icon}
              {item.label}
            </Button>
            <Divider />
          </Fragment>
        ))}
      </Stack>
    </Paper>
  );
};

export default Sidebar;
