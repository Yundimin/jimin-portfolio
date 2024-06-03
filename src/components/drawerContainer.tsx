import React from "react";

import { menuItems } from "./header";

const DrawerContainer = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const drawerBtn = () => {
    setOpenDrawer(!openDrawer);
  };

  return <></>;
};

export default DrawerContainer;
