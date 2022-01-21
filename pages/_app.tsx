import withRedux from "next-redux-wrapper";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import React, { ReactElement, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeStore } from "@store/index";
import "../styles/app.scss";
import "../styles/all.css";

NProgress.configure({
  showSpinner: false,
  template:
    '<div class="bar" style="z-index:999999;" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
});
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, props }): ReactElement {
  // const { store } = props;

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);

  return (
    // <Provider store={store}>
    <>
      <Head>
        <title>Mega Console - Agent UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...props} />
      <ToastContainer newestOnTop />
    </>
    // </Provider>
  );
}

export default withRedux(makeStore)(App);
