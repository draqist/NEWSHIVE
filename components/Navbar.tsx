import { CloseIcon,SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Link, Stack, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import {AnimatePresence,motion} from 'framer-motion'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return ( 
    <>
      <Flex h='70px' w='100%' position='fixed' justifyContent='center' alignItems='center' bg='brand.bg' px={['', '', '40px', '60px', '100px']} zIndex='30' borderBottom='1px solid #718096' display={['none', 'flex', 'flex']}>
        {/* w='100%' position='fixed' considering this for later, might have to make the navbar a fixed position nav */}
        <Flex justifyContent='space-between' fontWeight='400' color='gray.600' fontSize={['','','14px','18px','18px']} alignItems='center'  w='100%'>
          <Box>
            <Link textTransform='uppercase' href='#something'>
              Technology
            </Link>
          </Box>
          <Box>
            <Link textTransform='uppercase' href='#something'>
              Sports
            </Link>
          </Box>
          <Box>
            <Link textTransform='uppercase' href='#something'>
              Health
            </Link>
          </Box>
          <Box fontSize={['','','28px','30px','36px']} letterSpacing='-3px' color='gray.700'>
            DRAQBUREAU
          </Box>
          <Box>
            <Link textTransform='uppercase' href='#something'>
              Entertainment
            </Link>
          </Box>
          <Box>
            <Link textTransform='uppercase' href='#something'>
              Business
            </Link>
          </Box>
          <Box>
            <Link textTransform='uppercase' href='#something'>
            Politics & Finance
            </Link>
          </Box>
        </Flex>
      </Flex>
      <Flex h='70px' w='100%' position='fixed' justifyContent='space-between' alignItems='center' bg='brand.bg' px={['20px']} zIndex='30' borderBottom='1px solid #718096' display={['flex', 'none', 'none']}>
        <SearchIcon fontSize='20px' />
        <Box fontSize={['24px']} letterSpacing='-2px' color='gray.700'>
            DRAQBUREAU
        </Box>
        <Button _focus={{ outline: '0' }}
          onClick={() => setNav(!nav)}>
          <Stack transform='rotate(-180deg)' >
            <Box w='26px' h='2px' bg='black'/>
            <Box w='32px' h='2px' bg='black'/>
          </Stack>
        </Button>
        {
          nav &&
          <AnimatePresence>
            <Stack as={motion.div} initial={{ opacity: 0, y: '-70vh' }} animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }} exit={{ y: '70vh'}} h='60vh' textAlign='center' position='absolute' top='0' gap='16px' bg='brand.bg' color='gray.700' w='100vw' left='0' fontSize='20px'>
              <Box mx='auto' as='button' onClick={() => setNav(!nav)} p='30px' color='red.300' fontSize='24px' textTransform='uppercase'>
                {/* Close  */}
                <CloseIcon/>
              </Box>
              
              <Box _hover={{ color: 'gray.300' }} borderBottom='2px solid' p='20px' textTransform='uppercase'>
                <Link href='#'>
                  Categories
                </Link>
              </Box>
              <Box _hover={{ color: 'gray.300' }} borderBottom='2px solid' p='20px' textTransform='uppercase'>
                <Link href='#'>
                  News
                </Link>
              </Box>
              <Box _hover={{ color: 'gray.300' }} borderBottom='2px solid' p='20px' textTransform='uppercase'>
                <Link href='#'>
                  About
                </Link>
              </Box>
            </Stack>
        </AnimatePresence>
        }
      </Flex>
    </>
  );
}

export default Navbar;