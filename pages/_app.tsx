import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import {createContext} from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const SearchResults = createContext([])
  return (
    <ChakraProvider theme={theme}>
      <SearchResults.Provider value={[]}>
        <Component {...pageProps} />
      </SearchResults.Provider>
    </ChakraProvider>
  )
}

export default MyApp
