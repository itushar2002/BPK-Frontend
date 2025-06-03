import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Callback = () => {
  const { isLoading, error } = useAuth0();

  if (isLoading) return <div>Loading authentication...</div>;
  if (error) return <div>Authentication error: {error.message}</div>;
  clg

  // Optionally, you can redirect or show a success message here
  return <div>Login successful! Redirecting...</div>;
};

export default Callback;
