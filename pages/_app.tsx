import { Provider } from 'react-redux';
import {store} from '@store/store';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { ReactElement, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { makeStore } from '@store/index';
import '../styles/app.scss';
import '../styles/all.css';

NProgress.configure({
  showSpinner: false,
  template:
    '<div class="bar" style="z-index:999999;" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
});
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, props }): ReactElement {
  // const { store } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== undefined) {
      require('bootstrap/dist/js/bootstrap');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Trending Tools</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
      <ToastContainer newestOnTop />
    </>
    // </Provider>
  );
}

// export default withRedux(makeStore)(App);
export default App;
