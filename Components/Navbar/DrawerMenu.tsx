import React, { useState } from "react";
import { Box, List, ListItem, ListItemButton } from "@mui/material";

export const DrawerMenu: React.FC = () => {
  const [isOpen, updateIsOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    updateIsOpen(open);
  };

  return <Box></Box>;
};
