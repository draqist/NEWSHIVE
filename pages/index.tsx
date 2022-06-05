import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Box bg='brand.bg' h='100vh'>
        <Navbar/>
      </Box>
    </>
  )
}

export default Home
