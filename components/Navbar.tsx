import { CloseIcon,SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, Link, Stack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import NextLink from 'next/link'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [search, setSearch] = useState(false)
  let display = 'box'
  search ? display = 'none' : 'box'
  return ( 
    <>
      <Flex h='70px' w='100%' position='fixed' justifyContent='center' alignItems='center' bg='brand.bg' px={['', '', '40px', '60px', '100px']} zIndex='30'  boxShadow='lg' display={['none', 'flex', 'flex']} >
        
        <Flex justifyContent='space-between' fontWeight='400' color='gray.600' fontSize={['','','11px','16px','18px']} alignItems='center'  w='100%'>
          <Box>
            <NextLink href='/technology' passHref>
              <Link _focus={{outline: 0, }} textTransform='uppercase' >
                Technology
              </Link>
            </NextLink>
          </Box>
          <Box>
            <NextLink href='/sports' passHref>
              <Link _focus={{outline: 0, }} textTransform='uppercase' >
                Sports
              </Link>
            </NextLink>
          </Box>
          <Box>
            <NextLink href='/health' passHref>
              <Link _focus={{outline: 0, }} textTransform='uppercase'>
                Health
              </Link>
            </NextLink>
          </Box>
          <NextLink href='/' passHref>
            <Link _focus={{outline: 0}} fontSize={['','','22px','28px','36px']} letterSpacing='-3px' color='gray.700'>
              DRAQBUREAU
            </Link>
          </NextLink>
          <Box>
            <NextLink href='/entertainment' passHref>
              <Link _focus={{outline: 0, }} textTransform='uppercase'>
                Entertainment
              </Link>
            </NextLink>
          </Box>
          <Box>
            <NextLink href='/business' passHref>
              <Link _focus={{outline: 0, }} textTransform='uppercase'>
                Business
              </Link>
            </NextLink>
          </Box>
          <Box>
            <NextLink href='/politics' passHref>
              <Link _focus={{outline: 0, }} textTransform='uppercase'>
              Politics & Finance
              </Link>
            </NextLink>
          </Box>
        </Flex>
      </Flex>
      <Flex h='70px' w='100%' position='fixed' justifyContent='space-between' alignItems='center' bg='brand.bg' px={['20px']} zIndex='30' borderBottom='1px solid #718096' display={['flex', 'none', 'none']}>
        <SearchIcon fontSize='20px' onClick={() => setSearch(true)} />
        {
          search && 
          <Flex justifyContent='space-between' alignItems='center' as={motion.div } initial={{ opacity: 0, y:"-5vh"}} animate={{ opacity: 1, y: 0, transition:{ duration: .25, ease: "easeInOut"}}} flexBasis='87%'>
              <Input w='95%' variant='unstyled' borderBottom='1px solid black' px='12px' pb='6px' borderRadius='0' h='50px' placeholder='What do you want to know?' />
              <CloseIcon onClick={() => setSearch(false)} ml='12px'/>
          </Flex>
        }
        <Box display={display} fontSize={['24px']} letterSpacing='-2px' color='gray.700'>
            DRAQBUREAU
        </Box>
        <Button display={display} _focus={{ outline: '0' }}
          onClick={() => setNav(!nav)} variant='unstyled'>
          <Stack transform='rotate(-180deg)' >
            <Box w='26px' h='2px' bg='black'/>
            <Box w='32px' h='2px' bg='black'/>
          </Stack>
        </Button>
        {
          nav &&
          <AnimatePresence exitBeforeEnter={true}>
            <Stack as={motion.div} initial={{ opacity: 0, y: '-70vh' }} animate={{ opacity: 1, y: 0, transition: { duration: .5, ease: "easeOut" } }} exit={{ y: '100vh', opacity: 0, transition:{duration: .65}}} h='100vh' textAlign='center' position='absolute' top='0' gap='16px' bg='brand.bg' color='gray.700' w='100vw' left='0' fontSize='20px'>
              <Box mx='auto' as='button' onClick={() => setNav(!nav)} p='30px' color='red.300' fontSize='24px' textTransform='uppercase'>
                {/* Close  */}
                <CloseIcon/>
              </Box>
              
              <Box _hover={{ color: 'gray.300' }} borderBottom='2px solid' p='20px' textTransform='uppercase'>
                <NextLink href='/technology' passHref>
                  <Link _focus={{outline: 0}} href='#' onClick={() => setNav(!nav)}>
                    Technology
                  </Link>
                </NextLink>
              </Box>
              <Box _hover={{ color: 'gray.300' }} borderBottom='2px solid' p='20px' textTransform='uppercase'>
                <NextLink href='/sports' passHref>
                  <Link _focus={{outline: 0}} href='#' onClick={() => setNav(!nav)}>
                    Sports
                  </Link>
                </NextLink>
              </Box>
              <Box _hover={{ color: 'gray.300' }} borderBottom='2px solid' p='20px' textTransform='uppercase'>
                <NextLink href='/health' passHref>
                  <Link _focus={{outline: 0}} href='#' onClick={() => setNav(!nav)}>
                    Health
                  </Link>
                </NextLink>
              </Box>
              <Box _hover={{ color: 'gray.300' }} borderBottom='2px solid' p='20px' textTransform='uppercase'>
                <NextLink href='/entertainment' passHref>
                  <Link _focus={{outline: 0}} href='#' onClick={() => setNav(!nav)}>
                    Entertainment
                  </Link>
                </NextLink>
              </Box>
              {/* <Box _hover={{ color: 'gray.300' }} borderBottom='2px solid' p='20px' textTransform='uppercase'>
                <NextLink href='/'>
                  <Link _focus={{outline: 0}} href='#' onClick={() => setNav(!nav)}>
                    Categories
                  </Link>
                </NextLink>
              </Box> */}
              <Box _hover={{ color: 'gray.300' }} borderBottom='2px solid' p='20px' textTransform='uppercase'>
                <NextLink href='/business' passHref>
                  <Link _focus={{outline: 0}} href='#news' onClick={() => setNav(!nav)}>
                    Business
                  </Link>
                </NextLink>
              </Box>
              <Box _hover={{ color: 'gray.300' }} borderBottom='2px solid' p='20px' textTransform='uppercase'>
                <NextLink href='/politics' passHref>
                  <Link _focus={{outline: 0}} href='#' onClick={() => setNav(!nav)}>
                    Politics
                  </Link>
                </NextLink>
              </Box>
            </Stack>
        </AnimatePresence>
        }
      </Flex>
    </>
  );
}

export default Navbar;