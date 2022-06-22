import { Box, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { Sections } from '../components/Sections'
import { Splash } from '../components/Splash'
import Trending from '../components/Trending'
import {sections, transition} from '../extra'

const Home: NextPage = () => {
  return (
    <>
      <Splash/>
      <Box bg='brand.bg'>
        <Navbar />
        <Box bgColor='#363434ba'>
          <Banner category={'top'} domain='cnn' />
        </Box>
        <Trending />
        <Box px={['25px', '', '40px', '60px', '100px']} mt={['20px','','60px']} mb={['','','40px']}>
          {
            sections.map((sec, id) => <Sections key={id} section={ sec.title }/>)
          }
        </Box>
        <Newsletter />
        <Footer />
        {/*  */}
      </Box>
    </>
  )
}

export default Home
