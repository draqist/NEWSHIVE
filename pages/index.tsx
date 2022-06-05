import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import Navbar from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { Sections } from '../components/Sections'
import { Trending } from '../components/Trending'

const Home: NextPage = () => {
  const sections:Array<object> = [
    {
      title: 'Technology'
    },
    {
      title: 'Politics & Finance'
    },
    {
      title: 'Health'
    },
    {
      title: 'Entertainment'
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
        <Box px={['', '', '40px', '60px', '100px']} mt='60px'>
          {
            sections.map((sec, id) => <Sections key={id} section={ sec.title }/>)
          }
        </Box>
        <Newsletter/>
      </Box>
    </>
  )
}

export default Home
