import { Box, Flex, Heading, Tag, Text } from "@chakra-ui/react"


export const Trending = () => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems={['flex-start','','center']} px={['25px','','40px','60px','100px']} py='40px' flexGrow='1' direction={['column','column', 'row']} w='100%'>
        <Box flexBasis={['100%','','23%']} mt={['20px', '', '0']} >
          <Tag variant='solid' colorScheme='blue' borderRadius='0'>
            Health
          </Tag>
          <Heading fontSize='18px' mb='20px' mt='10px'> News title that defines news item</Heading>
          <Text> Some random subtitle of the news post</Text>
        </Box>
        <Box flexBasis={['100%','','23%']} mt={['20px', '', '0']}>
          <Tag variant='solid' colorScheme='blue' borderRadius='0'>
            Health
          </Tag>
          <Heading fontSize='18px' mb='20px' mt='10px'> News title that defines news item</Heading>
          <Text> Some random subtitle of the news post</Text>
        </Box>
        <Box flexBasis={['100%','','23%']} mt={['20px', '', '0']}>
          <Tag variant='solid' colorScheme='blue' borderRadius='0'>
            Health
          </Tag>
          <Heading fontSize='18px' mb='20px' mt='10px'> News title that defines news item</Heading>
          <Text> Some random subtitle of the news post</Text>
        </Box>
        <Box flexBasis={['100%','','23%']} mt={['20px', '', '0']}>
          <Tag variant='solid' colorScheme='blue' borderRadius='0'>
            Health
          </Tag>
          <Heading fontSize='18px' mb='20px' mt='10px'> News title that defines news item</Heading>
          <Text> Some random subtitle of the news post</Text>
        </Box>
      </Flex>
    </>
  )
}
