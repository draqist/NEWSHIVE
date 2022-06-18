import { Box } from '@chakra-ui/react'
import  Axios  from 'axios'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { Sections } from '../components/Sections'
import { Trending } from '../components/Trending'

const Home: NextPage = () => {
  const sections = [
    // {
      //   title: 'Politics & Finance'
      // },
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
        <Banner />
        <Trending />
        <Box px={['25px', '', '40px', '60px', '100px']} mt={['20px','','60px']}>
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
