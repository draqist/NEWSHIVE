import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"

export const Sections = (props: any) => {
  return (
    <>
      <Flex justifyContent='space-between' alignItems='flex-start' mb='50px' borderTop='2px solid black' py='25px' w='100%'>
        <Box>
          <Heading fontSize={['','','24px','36px','48px']}> {props.section } </Heading>
          <Text fontSize={['','','12px','14px','16px']} textTransform='uppercase'> See All <ExternalLinkIcon/> </Text>
        </Box>
        <Stack direction='row' gap='2'>
          <Box w={['','','200px','240px','240px']} h='240px'>
            <Heading fontSize='18px' mb='24px'> Some random news title </Heading>
            <Box h='100px' textOverflow=''>
              <Text> Some random news more info </Text>
            </Box>
            <Text textTransform='uppercase' fontWeight='300'> Read article <ExternalLinkIcon/> </Text>
          </Box>
          <Box w={['','','200px','240px','240px']} h='240px' bg='green.300'></Box>
        </Stack>
      </Flex>
    </>
  )
}
