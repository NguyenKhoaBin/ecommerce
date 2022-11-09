import "../styles/globals.css";
import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import React from "react";
import { store } from "../app/store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Toaster></Toaster>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
