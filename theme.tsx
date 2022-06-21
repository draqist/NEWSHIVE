import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    bg: '#F7EFDE'
  },
}

const theme = extendTheme({
  config: {
    initialColorMode: 'dark'
  },
  colors,
  fonts: {
    heading: `'Clash Display', 'Aktura', 'Poppins','Cabinet Grotesk' ,sans-serif`,
    body: `'Oswald', sans-serif`,
  },
})

export default theme