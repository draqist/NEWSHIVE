import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Link } from "@chakra-ui/react";

const Navbar = () => {
  return ( 
    <Flex h='70px' justifyContent='center' alignItems='center' bg='brand.bg' px={['', '', '40px', '60px', '100px']} zIndex='30' borderBottom='1px solid #718096'>
      {/* w='100%' position='fixed' considering this for later, might have to make the navbar a fixed position nav */}
      {/* <Box>
        <IconButton icon={ <SearchIcon/> }/>
      </Box> */}
      <Flex justifyContent='space-between' fontWeight='400' color='gray.600' fontSize={['','','14px','18px','18px']} alignItems='center'  w='100%'>
        <Box>
          <Link textTransform='uppercase' href='#something'>
            Technology
          </Link>
        </Box>
        <Box>
          <Link textTransform='uppercase' href='#something'>
            Politics & Finance
          </Link>
        </Box>
        <Box>
          <Link textTransform='uppercase' href='#something'>
            Health
          </Link>
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
        {/* <Box>
          <Link textTransform='uppercase' href='#something'>
            Investigation
          </Link>
        </Box> */}
      </Flex>
      {/* <Box></Box> */}
    </Flex>
  );
}

export default Navbar;