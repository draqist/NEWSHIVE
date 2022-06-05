import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Link } from "@chakra-ui/react";

const Navbar = () => {
  return ( 
    <Flex h='80px' justifyContent='center' alignItems='center' bg='brand.bg' px='100px' borderBottom='1px solid black'>
      {/* <Box>
        <IconButton icon={ <SearchIcon/> }/>
      </Box> */}
      <Flex justifyContent='space-between' fontWeight='400' color='gray.600' fontSize='18px' alignItems='center'  w='100%'>
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
        <Box>
          <Link textTransform='uppercase' href='#something'>
            Investigation
          </Link>
        </Box>
      </Flex>
      {/* <Box></Box> */}
    </Flex>
  );
}

export default Navbar;