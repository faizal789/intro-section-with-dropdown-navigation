import React from "react";
import MenuMobileContext from "./MobileMenuContext";

const MobileMenuProvider = ({ children }) => {
  const [menuMobile, setMenuMobile] = React.useState(false);
  return (
    <MenuMobileContext.Provider value={{ menuMobile, setMenuMobile }}>
      {children}
    </MenuMobileContext.Provider>
  );
};

export default MobileMenuProvider;
