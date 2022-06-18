import { Box, Flex, Heading, Tag, Text } from "@chakra-ui/react"
import  Axios  from "axios"
import { useEffect, useState } from "react"
import { Trend } from "./Trend"
import {CustomType} from './types'


export const Trending = () => {
  const [res, setRes] = useState<CustomType[]>()
  useEffect(() => {
    Axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&technology&apiKey=5e099fe95f5c4548b585877d8e4517ee')
      .then(res => {
        setRes(res.data.articles)
        console.log(res.data.articles)
      })
  } , [])
  
  return (
    <>
      <Heading my={['13px','20px']} fontFamily='Oswald' fontWeight='400' px={['25px','','40px','60px','100px']}> Trending News </Heading>
      <Flex justifyContent='space-between' alignItems={['flex-start','','flex-start']} px={['25px','','40px','60px','100px']} pb='40px' flexGrow='1' direction={['column','column', 'row']} mt={['14px','30px']} w='100%'>
        {
          res?.filter((data, idx) => idx < 4)?.map((data, id) => <Trend key={id} title={data.title} subtitle={ data.description }/>)
        }
      </Flex>
    </>
  )
}
