import React, { useState } from "react";
import { Box, List, ListItem, ListItemButton } from "@mui/material";

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

  return <Box></Box>;
};
