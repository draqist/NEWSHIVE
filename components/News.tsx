import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react"
import { Trending } from "./types"
import NextLink from 'next/link'

export const News = ({data}: any) => {
  return (
    <>
      <NextLink href={`${data.link}`} passHref>
        <Link fontSize={['16px', '', '12px', '14px', '16px']} _focus={{ outline: '0' }} textTransform='uppercase'>
          <Flex justifyContent='space-between' direction={['column','row']} alignItems='flex-start' pb={['0px','','50px']} borderTop='2px solid black' py='25px' w='100%'>
            <Flex w='620px' mb={['1rem', '0']} direction={['row', 'column']} justifyContent={['space-between', 'unset', 'unset']}>
              <Heading fontSize={['18px', '', '16px', '20px', '28px']}> {data.title} </Heading>
              {/* <NextLink href={`${data.link}`} passHref>
                <Link fontSize={['16px','','12px','14px','16px']} _focus={{outline: '0' }}     textTransform='uppercase'> Read more... <ExternalLinkIcon/> </Link>
              </NextLink> */}
            </Flex>
            <Stack direction={['column','row']} gap='2'>
              <Box w={['','','200px','240px','240px']} h='240px'>
                <Heading fontSize={['14px','','18px']} mb='24px'> {data.title} </Heading>
                <Box h='130px' mb={['','','10px']} overflow={'hidden'}>
                  <Text fontSize={['12px','','']}> {data.description} </Text>
                </Box>
                {/* <NextLink href='' >
                  <Link href={data.link} isExternal outline='0' _focus={{outline: 0}} textTransform='uppercase' fontWeight='300'> Read article <ExternalLinkIcon/> </Link>
                </NextLink> */}
              </Box>
              <Box w={['', '', '200px', '240px', '240px']} bgPosition='center' bgSize='cover' bgImage={`url(${data.image_url != null ? data.image_url : "news.jpg"})`} h='240px' />
            </Stack>
          </Flex>
        </Link>
      </NextLink>
    </>
  )
}
