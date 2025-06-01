import React, { createContext, useEffect, useState } from "react";

const UserDetailContext = createContext();

export const UserDetailProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    token: null,
    email: null,
    isAdmin: false, // <-- add this
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");
    const storedIsAdmin = localStorage.getItem("isAdmin") === "true"; // <-- add this

    if (storedToken && storedEmail) {
      setUserDetails({
        token: storedToken,
        email: storedEmail,
        isAdmin: storedIsAdmin, // <-- add this
      });
    }
  }, []);

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailContext.Provider>
  );
};

export default UserDetailContext;
