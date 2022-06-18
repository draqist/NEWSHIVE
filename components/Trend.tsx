import { Box, Heading, Tag, Text } from '@chakra-ui/react'
import React from 'react'

export const Trend = ({ title, subtitle, category }: { title: string, subtitle: string, category: [string] }) => {
  return (
    <Box flexBasis={['100%', '', '23%']} mt={['20px', '', '0']}>
      <Tag variant='solid' colorScheme='blue' borderRadius='0'>
        {category[0].toUpperCase()}
      </Tag>
      <Box h='68px' textOverflow='ellipsis' mb={['10px',]}>
        <Heading fontSize='14px' mb={['10px', '', '20px']} mt={['10px','16px']} fontWeight='600'> {title} </Heading>
      </Box>
      <Text fontSize={['12px', '', '']} fontWeight='400' > {subtitle} </Text>
    </Box>
  )
}
