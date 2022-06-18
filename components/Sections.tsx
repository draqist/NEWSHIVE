import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react"
import Axios  from "axios"
import { useEffect, useState } from "react"
import { CustomType } from "./types"
import NextLink from 'next/link'

export const Sections = (props: any) => {
  const [res, setRes] = useState<CustomType>()
  useEffect(() => {
    Axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${props.section.toLowerCase()}&apiKey=569c56ad91d341e3ad9ef7972d369313`)
      .then(res => {
        setRes(res.data.articles[0])
      })
  } , [])
  return (
    <>
      <Flex justifyContent='space-between' direction={['column','row']} alignItems='flex-start' mb={['0px','','50px']} borderTop='2px solid black' py='25px' w='100%'>
        <Flex mb={['1rem', '0']} direction={['row', 'column']} justifyContent={['space-between', 'unset', 'unset']} w='100%'>
          <Heading fontSize={['21px','','24px','36px','48px']}> {props.section } </Heading>
          <Text fontSize={['16px','','12px','14px','16px']} textTransform='uppercase'> See All <ExternalLinkIcon/> </Text>
        </Flex>
        <Stack direction={['column','row']} gap='2'>
          <Box w={['','','200px','240px','240px']} h='240px'>
            <Heading fontSize={['14px','','18px']} mb='24px'> {res?.title} </Heading>
            <Box h='100px' textOverflow=''>
              <Text fontSize={['12px','','']}> {res?.description} </Text>
            </Box>
            <NextLink href='' >
              <Link href={res?.url} isExternal outline='0' _focus={{outline: 0}} textTransform='uppercase' fontWeight='300'> Read article <ExternalLinkIcon/> </Link>
            </NextLink>
          </Box>
          <Box w={['', '', '200px', '240px', '240px']} bgPosition='center' bgSize='cover' bgImage={`url(${res?.urlToImage})`} h='240px' />
        </Stack>
      </Flex>
    </>
  )
}
