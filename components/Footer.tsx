import { EmailIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <Flex justifyContent='space-between' alignItems='flex-start' px={['', '', '40px', '60px', '100px']}>
      <Box>
        <EmailIcon fontSize='56px' />
        <Text> DraqBureau  produces innovative and essential investigative journalism, opinions</Text>
      </Box>
      <Box></Box>
    </Flex>
  )
}
