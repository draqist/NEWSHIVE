{/* eslint-disable  react/no-unescaped-entities */ }
import { Box, Heading, Tag, Text } from '@chakra-ui/react'
import Axios  from 'axios'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { CustomType } from './types'

export const Banner = () => {
  const [res, setRes] = useState<CustomType>()
  useEffect(() => {
    Axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=569c56ad91d341e3ad9ef7972d369313')
      .then(res => {
        setRes(res.data.articles[4])
      })
  }, [])
  moment.defaultFormat = "DD.MM.YYYY HH:mm";
  return (
    <>
      <Box w={['', '', '100%']} h={['600px', '', '450px']} bg={`url(${res?.urlToImage})`}  zIndex='1'  color='white' px={['25px', '25px', '40px', '60px', '100px']} pos='relative' bgPosition='center' bgSize='cover'  bgRepeat='no-repeat' py='40px'>
        <Box pos='absolute' textAlign='left' bottom='40px' w={['','','600px']} right={['25px', '25px', '40px', '60px', '100px']} left={['25px', '25px', '40px', '60px', '100px']}>
          <Text>
            <Tag variant='solid' colorScheme='red' borderRadius='0' mr='16px'>
                General
            </Tag>
            {moment(res?.publishedAt).toDate().toString()}
          </Text>
          <Heading fontSize={['18px', '30px', '30px']} my='20px'> {res?.title} </Heading>
          <Text fontSize={['16px', '', '']} fontFamily='Poppins' fontWeight='600'>{res?.description}</Text>
        </Box>
      </Box>
    </>
  )
}
