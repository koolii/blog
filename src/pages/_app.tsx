import React from 'react';
import { AppProps } from 'next/app';
import '../../styles/globals.css';

const App = (props: AppProps): JSX.Element => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default App;
