import "../styles/globals.css";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import React from "react";
function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster></Toaster>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
