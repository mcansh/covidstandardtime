import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { differenceInDays, format } from 'date-fns';

import { addOrdinalSuffix } from '~/utils/add-ordinal-suffix';

const Index: NextPage = () => {
  const now = new Date();
  const march = new Date(2020, 2, 1);
  const weekday = format(now, 'eeee');
  const diff = differenceInDays(now, march);

  return (
    <>
      <Head>
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
      </Head>
      <div className="flex items-center justify-center h-full">
        <h1 className="px-4 text-2xl font-medium text-center sm:px-0 sm:text-3xl">
          Today is {weekday},{' '}
          <span className="whitespace-no-wrap sm:whitespace-normal">
            March {addOrdinalSuffix(diff)}, 2020
          </span>
        </h1>
      </div>
    </>
  );
};

export default Index;
