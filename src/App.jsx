import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Bookings from "./pages/Bookings";
import Favourite from "./pages/Favourite";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import Property from "./pages/Property";
import UserDetailContext from "./context/userDetailContext.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import { api } from "./utils/api";

const App = () => {
  const [userDetails, setUserDetails] = useState({
    Favourite: [],
    bookings: [],
    token: null,
    email: null,
    isAdmin: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 4 seconds
    }, 4000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  // Fetch user info (including isAdmin) after login or when token changes
  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userDetails.token) {
        try {
          const res = await api.get("/api/user/me", {
            headers: { Authorization: `Bearer ${userDetails.token}` },
          });

          setUserDetails((prev) => ({
            ...prev,
            email: res.data.email,
            isAdmin: res.data.isAdmin,
          }));
          localStorage.setItem("isAdmin", res.data.isAdmin);
          localStorage.setItem("email", res.data.email);
        } catch (e) {
          // Optionally handle error
        }
      }
    };
    fetchUserInfo();
  }, [userDetails.token]);

  const queryClient = new QueryClient();

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/listing">
                  <Route index element={<Listing />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/favourites" element={<Favourite />} />
                <Route path="/admin" element={<AdminPanel />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      
    </UserDetailContext.Provider>
  );
};

export default App;
