import { Box, Heading, Text } from '@chakra-ui/react'

export const Banner = () => {
  return (
    <Box w='100%'  h='450px' bgImage="url('/bg.svg')" color='white' px={['', '', '40px', '60px', '100px']} pos='relative' bgPosition='right' py='40px'>
      <Box pos='absolute' textAlign='left' bottom='40px' w='600px'>
        <Text> This is the tag that'll contain the timeline of the news</Text>
        <Heading my='20px'> This is some random text to sit in the place of the heading content </Heading>
        <Text> This is the subtitle text that is to sit at the bottom of the header text</Text>
      </Box>
    </Box>
  )
}
