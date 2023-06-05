import React from 'react';
import Head from 'next/head';
import '../styles/styles.css';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta
        name="My Portfolio"
        content="My portfolio website."
        />
        <title>Chris Long</title>
      </Head>
     <Component {...pageProps} />
   </div>
  )
}