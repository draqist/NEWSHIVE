// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import theme from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <link
          href="https://api.fontshare.com/v2/css?f[]=oswald@300,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <title>NEWSHIVE</title>
        <meta name="description" content="Newshive is a news web application where you get the latest news on health, finance, sports, politics and entertainment"/>
        <meta property="og:url" content="https://newshive.live"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="NEWSHIVE"/>
        <meta property="og:description" content="Newshive is a news web application where you get the latest news on health, finance, sports, politics and entertainment"/>
        <meta property="og:image" content="https://i.ibb.co/Z1QT3sf/newshive.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="newshive.live"/>
        <meta property="twitter:url" content="https://newshive.live"/>
        <meta name="twitter:title" content="NEWSHIVE"/>
        <meta name="twitter:description" content="Newshive is a news web application where you get the latest news on health, finance, sports, politics and entertainment"/>
        <meta name="twitter:image" content="https://i.ibb.co/Z1QT3sf/newshive.png"/>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
