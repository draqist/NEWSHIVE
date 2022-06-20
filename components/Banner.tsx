{/* eslint-disable  react/no-unescaped-entities */ }
import { Box, Heading, Tag, Text } from '@chakra-ui/react'
import Axios  from 'axios'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { Trending } from './types'

export const Banner = () => {
  
  let [res, setRes] = useState<Trending>()
  useEffect(() => {
    Axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.customKey}&language=en&category=world,top&domain=cnn`)
      .then(res => {
        setRes(res.data.results[1])
      })
  }, [])
  return (
    <>
      <Box w={['', '', '100%']} h={['600px', '', '450px']} bg={`url(${res?.image_url})`}   zIndex='1'  color='white' px={['25px', '25px', '40px', '60px', '100px']} pos='relative' bgPosition='top center' bgSize='cover'  bgRepeat='no-repeat' py='40px'>
        <Box pos='absolute' textAlign='left' bottom='40px' w={['','','600px']} right={['25px', '25px', '40px', '60px', '100px']} left={['25px', '25px', '40px', '60px', '100px']}>
          <Text>
            <Tag variant='solid' textTransform='capitalize' colorScheme='red' borderRadius='0' mr='16px'>
                {res?.category}
            </Tag>
            {/* @ts-ignore */}
            {new Date(res?.pubDate).toUTCString()}
          </Text>
          <Heading fontSize={['18px', '30px', '30px']} my='20px'> {res?.title} </Heading>
          <Text fontSize={['16px', '', '']} fontFamily='Poppins' fontWeight='600'>{res?.description}</Text>
        </Box>
      </Box>
    </>
  )
}
