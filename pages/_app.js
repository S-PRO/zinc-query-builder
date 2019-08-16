import React from 'react'; // eslint-disable-line
import Head from 'next/head';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import configureStore from '../store';
import Layout from '../components/layouts/Layout';

/* global window */

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    const PageLayout = Component.Layout || Layout;

    return (
      <Container>
        <Head>
          <title>Next js app</title>
        </Head>
        <Provider store={store}>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
