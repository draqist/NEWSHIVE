import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';

const SearchSpinner = () => {
  return (
    <Center h="100vh" w="100vw" bg="brand.bg">
      <Spinner
        color="gray.700"
        w={'40px'}
        h={'40px'}  
        thickness="2px"
      />
    </Center>
  );
};

export default SearchSpinner;
