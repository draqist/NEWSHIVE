{/* eslint-disable  react/no-unescaped-entities */ }
import { EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Link as CLink, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import Link  from 'next/link'
import { routes } from '../extra'

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
        <Flex flexBasis={['none','','60%','65%','65%']} w='100%' justifyContent='space-between' alignItems='flex-start'>
          <Box fontWeight='300'>
            <Heading fontFamily='Oswald' fontSize={['', '', '16px', '20px', '20px']} fontWeight='400'>Categories</Heading>
            {
              routes.map((sec, id) => (
                <NextLink key={id} href={`/${sec.title.toLowerCase()}`} passHref>
                  <CLink>
                    <Text mt='14px'>{ sec.title} </Text>
                  </CLink>
                </NextLink>
              ))
            }
          </Box>
          <Box fontWeight='300'>
            <Heading fontFamily='Oswald' fontSize={['','','16px','20px','20px']} fontWeight='400'>About</Heading>
            <Text mt='14px'>About DRAQBUREAU</Text>
            <Text mt='14px'>Contact</Text>
          </Box>
          <Box fontWeight='300'>
            <Heading fontFamily='Oswald' fontSize={['','','16px','20px','20px']} fontWeight='400'>Follow us</Heading>
            <Link href='https://twitter.com/Hackth8r'>
              <Text my='14px' cursor='pointer'> Twitter <ExternalLinkIcon ml='6px' /> </Text>
            </Link>
            <Link href='https://github.com/Draqode'>
              <Text mb='14px' cursor='pointer'> Github <ExternalLinkIcon ml='6px' /> </Text>
            </Link>
            <Link href='https://draq.hashnode.dev' >
              <Text cursor='pointer'> Hashnode <ExternalLinkIcon ml='6px' /></Text>
            </Link>
          </Box>
        </Flex>
      </Flex>
        <Text px={['25px', '', '40px', '60px', '100px']} color='gray.600' pb='20px'> 2022 DRAQBUREAU - All Rights Reserved</Text>
    </>
  )
}
