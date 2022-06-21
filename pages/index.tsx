import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { Sections } from '../components/Sections'
import Trending  from '../components/Trending'

const Home: NextPage = () => {
  const sections = [
    {
        title: 'Politics'
      },
      {
        title: 'Health'
      },
      {
        title: 'Entertainment'
      },
      {
        title: 'Sports'
      }, 
      {
        title: 'Technology'
      },
    {
      title: 'Business'
    }, 
  ]
  return (
  
    <>
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
