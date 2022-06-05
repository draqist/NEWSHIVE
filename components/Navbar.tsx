import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Link, Stack } from "@chakra-ui/react";

const Navbar = () => {
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
        <Box>
          <Stack transform='rotate(-180deg)'>
            <Box w='26px' h='2px' bg='black'/>
            <Box w='32px' h='2px' bg='black'/>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}

export default Navbar;