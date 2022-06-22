import { CloseIcon,SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, Link, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import  Axios  from "axios";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [search, setSearch] = useState(false)
  const [data, setData] = useState([])
  const { pathname } = useRouter()
  let path=pathname.slice(1)
  let display = 'box'
  search ? display = 'none' : 'box'

  function SearchQuery() {
      Axios.get(`https://newsdata.io/api/1/news?apikey=${process.env.customKey}&language=en&category=${path}`)
        .then(res => {
          return setData(res.data.results)
        })
  }
  return ( 
    
      <>
        <Flex h='70px' w='100%' position='fixed' justifyContent='center' alignItems='center' bg='brand.bg' px={['', '', '40px', '60px', '100px']} zIndex='30'  boxShadow='md' display={['none', 'flex', 'flex']} >
          
          <Flex justifyContent='space-between' fontWeight='400' color='gray.600' fontSize={['','','11px','16px','18px']} alignItems='center'  w='100%'>
            <Flex justifyContent='space-between' alignItems='center' flexBasis='33.3%'>
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
            </Flex>
            <NextLink href='/' passHref>
              <Link _focus={{outline: 0}} fontSize={['','','22px','28px','36px']} letterSpacing='-1px' color='gray.700'>
                DRAQBUREAU
              </Link>
            </NextLink>
            <Flex justifyContent='space-between' alignItems='center' flexBasis='33.3%'>
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
        </Flex>
        <Flex h='70px' w='100%' position='fixed' justifyContent='space-between' alignItems='center' bg='brand.bg' px={['20px']} zIndex='30' boxShadow='xl' display={['flex', 'none', 'none']}>
          <Box display={display}>
            <SearchIcon fontSize='20px' color='black' onClick={() => setSearch(true)} />
          </Box>
          {
            search && 
            <Flex justifyContent='space-between' alignItems='center' as={motion.div } initial={{ opacity: 0, y:"-5vh"}} animate={{ opacity: 1, y: 0, transition:{ duration: .25, ease: "easeIn"}}} flexBasis='100%'>
                <Input w='100%' variant='unstyled' borderBottom='1px solid black' px='12px' pb='6px' borderRadius='0' h='50px' placeholder={`Search the latest news on ${path}?`} />
                <Box mx='10px'>
                  <SearchIcon fontSize='20px' onClick={() => SearchQuery }/>
                </Box>
                <CloseIcon onClick={() => setSearch(false)} ml='12px'/>
            </Flex>
          }
        <Box display={display} fontSize={['24px']} letterSpacing='-2px' color='gray.700'>
          <Link href='/'>
              DRAQBUREAU
          </Link>
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
            <>
              <Stack as={motion.div} initial={{ opacity: 0, y: '-70vh' }} animate={{ opacity: 1, y: 0, transition: { duration: .5, ease: "easeOut" } }} exit={{ y: '100vh', opacity: 0, transition:{duration: .5}}} h='100vh' textAlign='center' position='absolute' top='0' gap='16px' bg='brand.bg' color='gray.700' w='100vw' left='0' fontSize='20px'>
                <Box mx='auto' as='button' onClick={() => setNav(!nav)} p='30px' color='red.300' fontSize='24px' textTransform='uppercase'>
                  {/* Close  */}
                  <CloseIcon/>
                </Box>
                
                <Box _hover={{ color: 'gray.300' }} color='gray.600' borderBottom='2px solid' p='20px' textTransform='uppercase'>
                  <NextLink href='/technology' passHref>
                    <Link _focus={{outline: 0}} href='#' onClick={() => setNav(!nav)}>
                      Technology
                    </Link>
                  </NextLink>
                </Box>
                <Box _hover={{ color: 'gray.300' }} color='gray.600' borderBottom='2px solid' p='20px' textTransform='uppercase'>
                  <NextLink href='/sports' passHref>
                    <Link _focus={{outline: 0}} href='#' onClick={() => setNav(!nav)}>
                      Sports
                    </Link>
                  </NextLink>
                </Box>
                <Box _hover={{ color: 'gray.300' }} color='gray.600' borderBottom='2px solid' p='20px' textTransform='uppercase'>
                  <NextLink href='/health' passHref>
                    <Link _focus={{outline: 0}} href='#' onClick={() => setNav(!nav)}>
                      Health
                    </Link>
                  </NextLink>
                </Box>
                <Box _hover={{ color: 'gray.300' }} color='gray.600' borderBottom='2px solid' p='20px' textTransform='uppercase'>
                  <NextLink href='/entertainment' passHref>
                    <Link _focus={{outline: 0}} href='#' onClick={() => setNav(!nav)}>
                      Entertainment
                    </Link>
                  </NextLink>
                </Box>
                <Box _hover={{ color: 'gray.300' }} color='gray.600' borderBottom='2px solid' p='20px' textTransform='uppercase'>
                  <NextLink href='/business' passHref>
                    <Link _focus={{outline: 0}} href='#news' onClick={() => setNav(!nav)}>
                      Business
                    </Link>
                  </NextLink>
                </Box>
                <Box _hover={{ color: 'gray.300' }} color='gray.600' borderBottom='2px solid' p='20px' textTransform='uppercase'>
                  <NextLink href='/politics' passHref>
                    <Link _focus={{outline: 0}} href='#' onClick={() => setNav(!nav)}>
                      Politics
                    </Link>
                  </NextLink>
                </Box>
              </Stack>
          </>
          }
        </Flex>
      </>
  );
}

export default Navbar;