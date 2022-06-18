import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import Axios  from "axios"
import { useEffect, useState } from "react"
import { CustomType } from "./types"

export const Sections = (props: any) => {
  const [res, setRes] = useState<CustomType>()
  useEffect(() => {
    Axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.section.toLowerCase()}&apiKey=5e099fe95f5c4548b585877d8e4517ee`)
      .then(res => {
        setRes(res.data.articles[0])
        console.log(res.data.articles)
      })
  } , [])
  return (
    <>
      <Flex justifyContent='space-between' alignItems='flex-start' mb={['0px','','50px']} borderTop='2px solid black' py='25px' w='100%'>
        <Box>
          <Heading fontSize={['','','24px','36px','48px']}> {props.section } </Heading>
          <Text fontSize={['10px','','12px','14px','16px']} textTransform='uppercase'> See All <ExternalLinkIcon/> </Text>
        </Box>
        <Stack direction='row' gap='2'>
          <Box w={['','','200px','240px','240px']} h='240px'>
            <Heading fontSize={['14px','','18px']} mb='24px'> {res?.title} </Heading>
            <Box h='100px' textOverflow=''>
              <Text fontSize={['12px','','']}> {res?.content} </Text>
            </Box>
            <Text textTransform='uppercase' fontWeight='300'> Read article <ExternalLinkIcon/> </Text>
          </Box>
          <Box w={['', '', '200px', '240px', '240px']} bgImage={`url(${res?.urlToImage})`} h='240px' ></Box>
        </Stack>
      </Flex>
    </>
  )
}
