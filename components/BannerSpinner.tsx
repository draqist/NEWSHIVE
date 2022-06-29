import { Center, Spinner } from '@chakra-ui/react';
import React from 'react';

const BannerSpinner = () => {
  return (
    <Center
      w={['', '', '100%']}
      h={['600px', '', '450px']}
      zIndex="3"
      color="white"
      px={['25px', '25px', '40px', '60px', '100px']}
      pos="relative"
      py="40px"
      bgColor="brand.bg"
    >
      <Spinner
        color="gray.700"
        w={['40px', '40px', '40px', '40px', '40px']}
        h={['40px', '40px', '40px', '40px', '40px']}
        thickness="2px"
      />
    </Center>
  );
};

export default BannerSpinner;
