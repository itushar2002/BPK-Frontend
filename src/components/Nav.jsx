import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdAddHome, MdHomeWork, MdPermContactCalendar } from "react-icons/md";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import AddPropertyModal from "./AddPropertyModal";
import useAuthCheck from "../hooks/useAuthCheck";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import UserDetailContext from "../context/userDetailContext";

const Nav = ({ containerStyles }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();

  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };
  const { userDetails } = useContext(UserDetailContext);

  return (
    <nav className={`${containerStyles} `}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "active-link flex items-center justify-center gap-x-1 rounded-full !px-2 !py-1"
            : "flex items-center justify-center gap-x-1 rounded-full !px-2 !py-1"
        }
      >
        <MdHomeWork />
        <div>Home</div>
      </NavLink>
      <NavLink
        to={"/listing"}
        className={({ isActive }) =>
          isActive
            ? "active-link flex items-center justify-center gap-x-1 rounded-full !px-2 !py-1"
            : "flex items-center justify-center gap-x-1 rounded-full !px-2 !py-1"
        }
      >
        <RiCheckboxMultipleBlankFill />
        <div>Listing</div>
      </NavLink>
      <NavLink
        to={"mailto:itusharjha2002@gmail.com"}
        className={
          "flex items-center justify-center gap-x-1 rounded-full !px-2 !py-1 cursor-pointer"
        }
      >
        <MdPermContactCalendar />
        <div>Contact</div>
      </NavLink>
      {userDetails?.isAdmin && (
        <NavLink
          to="/admin"
          className="flex items-center justify-center gap-x-1 rounded-full !px-2 !py-1 cursor-pointer bg-yellow-500 text-white font-bold"
        >
          <span role="img" aria-label="admin">
            🛡️
          </span>
          <div>Admin Panel</div>
        </NavLink>
      )}
      <div
        onClick={handleAddPropertyClick}
        className={
          "flex items-center justify-center gap-x-1 rounded-full !px-2 !py-1 cursor-pointer"
        }
      >
        <MdAddHome />
        <div>add property</div>
      </div>
      <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />
    </nav>
  );
};

export default Nav;
