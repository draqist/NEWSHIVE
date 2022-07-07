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
        <meta name="description" content="An up-to-date news website on the current happenings in the world" />
        <meta
          name="Newshive"
          content="Get the latest,verified news from newshive"
        />
        <meta
          property="og:image" content='https://i.ibb.co/Z1QT3sf/newshive.png' />
        <meta
          property="og:description" content='DESCRIPTION OF YOUR SITE' />
        <meta property="og:url" content='https://newshive.vercel.app' />
        <meta property='og:image:width' content='1366' />
        <meta property='og:image:height' content='63  7' />

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
