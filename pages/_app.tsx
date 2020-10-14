import 'styles/index.css';

import React from 'react';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import * as Fathom from 'fathom-client';

Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

const App = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    Fathom.load('KACCORGG', {
      excludedDomains: ['localhost'],
      url: 'https://kiwi.mcan.sh/script.js',
    });
  }, []);

  return <Component {...pageProps} />;
};

export default App;
