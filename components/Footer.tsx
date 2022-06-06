{/* eslint-disable  react/no-unescaped-entities */ }
import { EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <>
    
      <Flex justifyContent='space-between' py='40px' alignItems='flex-start' px={['25px', '', '40px', '60px', '100px']} direction ={['column', 'column', 'row']}>
        <Box flexBasis='25%' fontSize={['','','','','']} textAlign='left' fontWeight='300' mb={['40px', '','']}>
        <Box fontSize={['','','28px','30px','36px']} letterSpacing='-3px' fontWeight='500' color='gray.700' mb='6px'>
          DRAQBUREAU
        </Box>
          <Text> <strong> DraqBureau </strong>  produces innovative and essential investigative journalism, opinions and analysis. Keeping you up-to-date with the latest news in all aspects of worldly affairs. <br />
            Our mission: Truth above all. The world's best reporting.
          </Text>
          <Text pt='40px' fontWeight='300'>
            +23481-1303-1188 <br />
            abdullahabdulfatah526@gmail.com
          </Text>
        </Box>
        <Flex flexBasis={['none','','65%']} w='100%' justifyContent='space-between' alignItems='flex-start'>
          <Box fontWeight='300'>
            <Heading fontFamily='Oswald' fontSize={['','','16px','20px','20px']} fontWeight='400'>Categories</Heading>
            <Text mt='14px'>Technology</Text>
            <Text mt='14px'>Sports</Text>
            <Text mt='14px'>Health</Text>
            <Text mt='14px'>Entertainment</Text>
            <Text mt='14px'>Business</Text>
            <Text mt='14px'> Politics & Finance</Text>
          </Box>
          <Box fontWeight='300'>
            <Heading fontFamily='Oswald' fontSize={['','','16px','20px','20px']} fontWeight='400'>About</Heading>
            <Text mt='14px'>About DRAQBUREAU</Text>
            <Text mt='14px'>Contact</Text>
          </Box>
          <Box fontWeight='300'>
            <Heading fontFamily='Oswald' fontSize={['','','16px','20px','20px']} fontWeight='400'>Follow us</Heading>
            <Text mt='14px'>Twitter <ExternalLinkIcon ml='6px'/> </Text>
            <Text mt='14px'>Instagrm <ExternalLinkIcon ml='6px'/> </Text>
            <Text mt='14px'>Health</Text>
          </Box>
        </Flex>
      </Flex>
        <Text px={['25px', '', '40px', '60px', '100px']} color='gray.600'> 2022 DRAQBUREAU - All Rights Reserved</Text>
    </>
  )
}
