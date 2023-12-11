import React, { useContext } from "react";
import DropdownFeatures from "./DropdownFeatures";
import DropdownCompany from "./DropdownCompany";
import MobileMenu from "./MobileMenu";
import MenuMobileContext from "../MobileMenuContext";
const Header = () => {
  const { menuMobile, setMenuMobile } = useContext(MenuMobileContext);
  const [toggleDropdownFeatures, setToggleDropdownFeatures] =
    React.useState(false);
  const [toggleDropdownCompany, setToggleDropdownCompany] =
    React.useState(false);
  return (
    <header className="py-5 px-7">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          <img src="images/logo.svg" alt="logo" />
          <ul className="flex gap-8 max-[800px]:hidden text-medium-gray-neutral">
            <li
              onClick={() => setToggleDropdownFeatures(!toggleDropdownFeatures)}
              className="hover:text-almost-black-neutral cursor-pointer flex items-center gap-2 relative"
            >
              <span
                className={`${
                  toggleDropdownFeatures ? " text-almost-black-neutral" : ""
                }`}
              >
                Features
              </span>
              {toggleDropdownFeatures ? (
                <>
                  <img src="images/icon-arrow-up.svg" alt="arrow up" />
                  <DropdownFeatures></DropdownFeatures>
                </>
              ) : (
                <img src="images/icon-arrow-down.svg" alt="arrow down" />
              )}
            </li>
            <li
              onClick={() => setToggleDropdownCompany(!toggleDropdownCompany)}
              className="hover:text-almost-black-neutral relative cursor-pointer flex items-center gap-2"
            >
              <span
                className={`${
                  toggleDropdownCompany ? " text-almost-black-neutral" : ""
                }`}
              >
                Company
              </span>
              {toggleDropdownCompany ? (
                <>
                  <img src="images/icon-arrow-up.svg" alt="arrow up" />
                  <DropdownCompany></DropdownCompany>
                </>
              ) : (
                <img src="images/icon-arrow-down.svg" alt="arrow down" />
              )}
            </li>
            <li className="hover:text-almost-black-neutral cursor-pointer">
              Careers
            </li>
            <li className="hover:text-almost-black-neutral cursor-pointer">
              About
            </li>
          </ul>
        </div>
        <div>
          <img
            onClick={() => setMenuMobile(true)}
            src="images/icon-menu.svg"
            className={`hidden max-[800px]:block cursor-pointer`}
            alt=""
          />
          <ul className="flex gap-8 items-center max-[800px]:hidden text-medium-gray-neutral">
            <li className="cursor-pointer hover:text-almost-black-neutral">
              Login
            </li>
            <li className="cursor-pointer hover:text-almost-black-neutral hover:border-almost-black-neutral border-2 border-medium-gray-neutral py-2 px-4 rounded-xl">
              Register
            </li>
          </ul>
        </div>
        {menuMobile && <MobileMenu></MobileMenu>}
      </nav>
    </header>
  );
};

export default Header;
