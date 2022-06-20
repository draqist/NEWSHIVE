import { Box, Heading } from '@chakra-ui/react'
import Axios  from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Banner } from '../components/Banner'
import Navbar from '../components/Navbar'
import { News } from '../components/News'
import { Trending, TrendingArray } from '../components/types'


const Business = () => {
  const [res, setRes] = useState<Trending[]>()
  const { pathname } = useRouter()
  let path = pathname

  useEffect(() => {
    Axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.customKey}&language=en&category=${path.slice(1)}`)
      .then(res => {
        setRes(res.data.results)
        console.log(res.data.results)
      })
  }, [path])
  
  return (
    <Box bg='brand.bg' h='100%'>
      <Navbar/>
      <Box>
        <Banner/>
      </Box>
      <Box px={['25px', '', '40px', '60px', '100px']} mt={['20px', '', '30px']}>
        <Heading mb='30px'> Business News </Heading>
        {
          res?.map((data, id) => <News data={data} key={id}/>
          )
        }
      </Box>
    </Box>
  )
}
export default Business