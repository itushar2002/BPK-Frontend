import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-0zoy7it3pf1rqnr4.us.auth0.com"
      clientId="HyJLSBEo7g3x2OfiCxWlzGaMCgLd0IDV"
      authorizationParams={{
        redirect_uri: "https://www.bhopalpropertyking.com/callback",
        audience: "https://api.bhopalpropertyking.com", // <-- move audience here!
        scope: "openid profile email",
      }}
    >
      <MantineProvider>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </StrictMode>
);
