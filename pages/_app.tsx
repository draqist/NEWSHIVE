import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id='analytics' strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.AnalyticsKey}`} />

      <Script id='analytics-script' strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.AnalyticsKey}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <ChakraProvider theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
