import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { MdClose, MdMenu } from "react-icons/md";
import userIcon from "../assets/user.svg";
import LogoImg from "../assets/logo.png.png";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "./profileMenu";
const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  useEffect(
    () => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          // close the menu when scrolling occurs if menu is open
          if (menuOpened) {
            setMenuOpened(false);
          }
        }
        // detect scrolling
        setActive(window.scrollY > 40);
      };
      window.addEventListener("scroll", handleScroll);
      // cleanup function to remove the event listener

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [menuOpened] // dependecy array ensures that the effect runs when the menuOpened state changes
  );

  // const [isMobile, setIsMobile] = useState(false);

  return (
    <header className=" !mx-auto max-w-[1440px] !px-6 !lg:px-12 fixed top-1 z-99 left-0 right-0">
      <div
        id="container "
        className={`${
          active ? "!py-0" : "!py-1"
        } !mx-auto max-w-[1440px] !px-6 !lg:px-12 bg-white transition-all duration-200 rounded-full ring-1 ring-slate-900/5`}
      >
        <div id="content " className="flex items-center justify-between !py-2">
          <Link to={"/"}>
            <div className="flex items-center gap-x-1">
              <img src={LogoImg} className="h-[60px] w-[60px]" alt="" />
              <h5 className=" font-[900] !mt-2 hidden sm:block md:text-[18px">
                Bhopal
                <span className="font-[400] text-[18px]">PropertyKing</span>
              </h5>
            </div>
            {/* <span className="font-[900] text-[24px]">
              Bhopal<span className="font-[600] text-[20px]">PropertyKing</span>
            </span> */}
          </Link>
          {/* Nav */}
          <div id="nav" className="flex items-center justify-center gap-x-4">
            {/* Desktop  */}
            <Nav
              containerStyles={
                "hidden xl:flex gap-x-5 xl:gap-x-10 capitalize text-[15px] font-[500] ring-1 ring-slate-900/10 rounded-full !p-2 bg-[#f2f2f2]"
              }
            />
            {/* Mobile */}
            <Nav
              containerStyles={
                menuOpened
                  ? "flex item-start flex-col gap-y-8 capitalize fixed top-20 !p-12 right-8 bg-white rounded-3xl shadow-md w-64  text-[16px] font-[500] ring-1 ring-slate-900/5 transition-all duration-300 z-50"
                  : "flex item-start flex-col gap-y-8 capitalize fixed top-20 !p-12 right-[100%] bg-white rounded-3xl shadow-md w-64  text-[16px] font-[500] ring-1 ring-slate-900/5 transition-all duration-300 "
              }
            />
          </div>
          {/* Button */}
          <div
            id="btns"
            className="flex items-center justify-between gap-x-3 sm:gap-x-5 text-[16px] font-[700]"
          >
            {!menuOpened ? (
              <MdMenu
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-3xl hover:text-[#946b2d]"
              />
            ) : (
              <MdClose
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-3xl hover:text-[#946b2d]"
              />
            )}
            {!isAuthenticated ? (
              <button
                onClick={loginWithRedirect}
                className=" medium-14 bg-[#946b2d] ring-1 ring-slate-900/5 text-white !px-7 !py-2 rounded-full flex items-center justify-center font-[500] text-[16px]"
              >
                <img src={userIcon} alt="" height={22} width={22} />
                <span>Login</span>
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
