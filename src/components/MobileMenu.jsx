import React, { useContext } from "react";
import MenuMobileContext from "../MobileMenuContext";

const MobileMenu = () => {
  const { setMenuMobile } = useContext(MenuMobileContext);
  const [toggleDropdownFeatures, setToggleDropdownFeatures] =
    React.useState(false);
  const [toggleDropdownCompany, setToggleDropdownCompany] =
    React.useState(false);
  return (
    <section className="fixed top-0 right-0 h-screen w-8/12 p-4 bg-white">
      <img
        onClick={() => setMenuMobile(false)}
        src="images/icon-close-menu.svg"
        className="ml-auto mb-8 cursor-pointer"
        alt=""
      />
      <div className="flex flex-col gap-4">
        <div
          onClick={() => setToggleDropdownFeatures(!toggleDropdownFeatures)}
          className="flex gap-2 items-center cursor-pointer"
        >
          <span>Features</span>
          {toggleDropdownFeatures ? (
            <img src="images/icon-arrow-up.svg" alt="arrow up" />
          ) : (
            <img src="images/icon-arrow-down.svg" alt="arrow down" />
          )}
        </div>
        {toggleDropdownFeatures && (
          <div className="ml-7 flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <img src="images/icon-todo.svg" width={18} alt="" />
              <span>Todo List</span>
            </div>
            <div className="flex gap-3 items-center">
              <img src="images/icon-calendar.svg" width={18} alt="" />
              <span>Calendar</span>
            </div>
            <div className="flex gap-3 items-center">
              <img src="images/icon-reminders.svg" width={18} alt="" />
              <span>Reminders</span>
            </div>
            <div className="flex gap-3 items-center">
              <img src="images/icon-planning.svg" width={18} alt="" />
              <span>Planning</span>
            </div>
          </div>
        )}
        <div
          onClick={() => setToggleDropdownCompany(!toggleDropdownCompany)}
          className="flex gap-2 items-center cursor-pointer"
        >
          <span>Company</span>
          {toggleDropdownCompany ? (
            <img src="images/icon-arrow-up.svg" alt="arrow up" />
          ) : (
            <img src="images/icon-arrow-down.svg" alt="arrow down" />
          )}
        </div>
        {toggleDropdownCompany && (
          <div className="ml-7 flex flex-col gap-4">
            <span>History</span>
            <span>Our Team</span>
            <span>Blog</span>
          </div>
        )}
        <span className="cursor-pointer">Careers</span>
        <span className="cursor-pointer">About</span>
        <div className="flex mt-8 flex-col gap-2 text-center w-8/12 mx-auto">
          <span className="cursor-pointer">Login</span>
          <span className="border-2 py-2 rounded-xl  cursor-pointer">
            Register
          </span>
        </div>
      </div>
    </section>
  );
};

export default MobileMenu;
