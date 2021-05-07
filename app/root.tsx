import * as React from 'react';
import type { LinksFunction, LoaderFunction, RouteComponent } from 'remix';
import { Meta, Links, Scripts, useRouteData, LiveReload } from 'remix';
import { Outlet, useLocation } from 'react-router-dom';
import * as Fathom from 'fathom-client';

import stylesUrl from './styles/global.css';
import type { ErrorBoundaryComponent } from '@remix-run/react/routeModules';

let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

function Document({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  React.useEffect(() => {
    Fathom.load('KACCORGG', {
      excludedDomains: ['localhost'],
      url: 'https://kiwi.mcan.sh/script.js',
    });
  }, []);

  React.useEffect(() => {
    Fathom.trackPageview({
      url: location.pathname,
    });
  }, [location.pathname]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Meta />
        <Links />
        <title>Covid Standard Time</title>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Covid Standard Time" />
        <meta name="description" content="What day is it?" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#fff" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content="https://covidstandardtime.vercel.app"
        />
        <meta name="twitter:title" content="Covid Standard Time" />
        <meta name="twitter:description" content="What day is it?" />
        <meta
          name="twitter:image"
          content="https://covidstandardtime.vercel.app/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@loganmcansh" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Covid Standard Time" />
        <meta property="og:description" content="What day is it?" />
        <meta property="og:site_name" content="Covid Standard Time" />
        <meta
          property="og:url"
          content="https://covidstandardtime.vercel.app"
        />
        <meta
          property="og:image"
          content="https://covidstandardtime.vercel.app/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="application-name" content="Covid Standard Time" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

const App: RouteComponent = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  );
};

const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <Document>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  );
};

export default App;
export { ErrorBoundary, links };
