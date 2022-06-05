import { Box, Flex, Heading, Tag, Text } from "@chakra-ui/react"


export const Trending = () => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='center' px={['','','40px','60px','100px']} py='40px'>
        <Box w='280px'>
          <Tag variant='solid' colorScheme='blue' borderRadius='0'>
            Health
          </Tag>
          <Heading fontSize='18px' mb='20px' mt='10px'> News title that defines news item</Heading>
          <Text> Some random subtitle of the news post</Text>
        </Box>
        <Box w='280px'>
          <Tag variant='solid' colorScheme='blue' borderRadius='0'>
            Health
          </Tag>
          <Heading fontSize='18px' mb='20px' mt='10px'> News title that defines news item</Heading>
          <Text> Some random subtitle of the news post</Text>
        </Box>
        <Box w='280px'>
          <Tag variant='solid' colorScheme='blue' borderRadius='0'>
            Health
          </Tag>
          <Heading fontSize='18px' mb='20px' mt='10px'> News title that defines news item</Heading>
          <Text> Some random subtitle of the news post</Text>
        </Box>
        <Box w='280px'>
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
