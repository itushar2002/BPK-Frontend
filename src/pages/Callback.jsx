import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to homepage after successful login
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) return <div>Loading authentication...</div>;
  if (error) return <div>Authentication error: {error.message}</div>;

  return <div>Login successful! Redirecting...</div>;
};

export default Callback;
