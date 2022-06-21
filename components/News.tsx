import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react"
import { Trending } from "./types"
import NextLink from 'next/link'

export const News = ({data}: {data: Trending}) => {
  return (
      <>
        <Flex justifyContent='space-between' direction={['column','row']} alignItems='flex-start' pb={['0px','','50px']} borderTop='2px solid black' py='25px' w='100%'>
          <Flex w={['','','','370px','620px']} mb={['1rem', '0']} direction={['row', 'column']} justifyContent={['space-between', 'unset', 'unset']}>
            <Heading fontSize={['18px', '', '16px', '20px', '28px']} mb='0'> {data.title} </Heading>
          </Flex>
          <Stack direction={['column','row']} gap={['10b','','2']}>
            <Box w={['','','200px','240px','240px']} h={['150px','','240px']} mb={['26px','20px', '0']}>
              <Heading fontSize={['14px','','14px','14px']} mb={['24px', '', '10px']}> {data.title} </Heading>
              <Box h={['', '', '120px']} mb={['','','10px']} overflow={'clip'}>
                <Text fontSize={['12px','','']}> {data.description} </Text>
              </Box>
              <NextLink href='' >
                <Link href={data.link} isExternal display='block' mt={['1rem', '0','0']} outline='0' _focus={{outline: 0}} textTransform='uppercase' fontWeight='300'> Read article <ExternalLinkIcon/> </Link>
              </NextLink>
            </Box>
            <Box w={['', '', '200px', '240px', '240px']} bgPosition='center' bgSize='cover' bgImage={`url(${data.image_url != null ? data.image_url : "news.jpg"})`} h='240px' />
          </Stack>
        </Flex>
      </>
  )
}
