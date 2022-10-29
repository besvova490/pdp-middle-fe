import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

// components
import App from "./react/App";

// helpers
import gqlClient from "./gql";

// assets
import "./assets/styles/index.scss";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={gqlClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
