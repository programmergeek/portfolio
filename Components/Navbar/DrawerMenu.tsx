import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const menuItems = [
  {
    name: "About",
    linkTo: "#about"
  },
  {
    name: "Skills",
    linkTo: "#skills"
  },
  {
    name: "Projects",
    linkTo: "#projects"
  },
  {
    name: "Contact",
    linkTo: "#contact"
  }
];

export const DrawerMenu: React.FC = () => {
  // state to determine if the drawer is open or closed
  const [isOpen, updateIsOpen] = useState<boolean>(false);

  // Accepts a boolean value to toggle the drawer menu.
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      // check if the key pressed is 'tab' or 'shift'
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      // 'if true do nothing'
      return;
    }
    updateIsOpen(open);
  };

  // menu shown when drawe is toggled open
  const menu = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <Link href={item.linkTo} underline="none" color="#000">
              <ListItemButton>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuRoundedIcon />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        {menu()}
      </Drawer>
    </Box>
  );
};
