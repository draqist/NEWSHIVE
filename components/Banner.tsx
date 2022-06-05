import { Box, Heading, Tag, Text } from '@chakra-ui/react'

export const Banner = () => {
  return (
    <Box w='100%'  h={['600px','','450px']} bgImage="url('/bg.svg')" color='white' px={['25px', '', '40px', '60px', '100px']} pos='relative' bgPosition='right' py='40px'>
      <Box pos='absolute' textAlign='left' bottom='40px' w={['','','600px']}>
        <Text>
          <Tag variant='solid' colorScheme='red' borderRadius='0' mr='10px'>
              Health
            </Tag>
          This is the tag that'll contain the timeline of the news</Text>
        <Heading fontSize={['20px', '30px', '30px']} my='20px'> This is some random text to sit in the place of the heading content </Heading>
        <Text> This is the subtitle text that is to sit at the bottom of the header text</Text>
      </Box>
    </Box>
  )
}
