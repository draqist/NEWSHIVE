import { Box, Center, Flex, Spinner, Tag } from '@chakra-ui/react';
import React from 'react';

const TrendSpinner = () => {
  return (
    <>
      <Flex
        color="black"
        justifyContent="space-between"
        alignItems={['flex-start', '', 'flex-start']}
        px={['25px', '', '40px', '60px', '100px']}
        pb="40px"
        flexGrow="1"
        direction={['column', 'column', 'row']}
        mt={['14px', '30px']}
        w="100%"
      >
        <Center
          color="black"
          flexBasis={['100%', '', '23%']}
          mt={['20px', '', '0']}
          h="200px"
          bgColor="rgba(0,0,0,.1)"
        >
          <Spinner color="gray.700" w={'40px'} h={'40px'} thickness="2px" />
        </Center>
        <Center
          color="black"
          flexBasis={['100%', '', '23%']}
          mt={['20px', '', '0']}
          h="200px"
          bgColor="rgba(0,0,0,.1)"
        >
          <Spinner color="gray.700" w={'40px'} h={'40px'} thickness="2px" />
        </Center>
        <Center
          color="black"
          flexBasis={['100%', '', '23%']}
          mt={['20px', '', '0']}
          h="200px"
          bgColor="rgba(0,0,0,.1)"
        >
          <Spinner color="gray.700" w={'40px'} h={'40px'} thickness="2px" />
        </Center>
        <Center
          color="black"
          flexBasis={['100%', '', '23%']}
          mt={['20px', '', '0']}
          h="200px"
          bgColor="rgba(0,0,0,.1)"
        >
          <Spinner color="gray.700" w={'40px'} h={'40px'} thickness="2px" />
        </Center>
      </Flex>
    </>
  );
};

export default TrendSpinner;
