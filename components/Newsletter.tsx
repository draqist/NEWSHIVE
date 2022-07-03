import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { MdOutlineEmail } from 'react-icons/md';

export const Newsletter = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      my="40px"
      bg="black"
      h={['', '', '260px']}
      px={['15px', '', '']}
      id="news"
    >
      <Box color="brand.bg" textAlign="center">
        <Heading my="20px">
          {' '}
          Subscribe to{' '}
          <Text as="span" fontFamily="Oswald" textTransform="uppercase">
            {' '}
            NEWSHIVE{' '}
          </Text>{' '}
        </Heading>
        <Text fontSize="20px">
          {' '}
          Engaging copy for member subscription with the CTA to enter email and
          subscribe{' '}
        </Text>
        <Box
          color="unset"
          justifyContent="center"
          mx={['', '', 'auto']}
          h="40px"
          display="flex"
          alignItems="center"
          w={['', '', '80%']}
          border="1px solid "
          my="40px"
          pl="10px"
        >
          <MdOutlineEmail fontSize="30px" />
          <Input
            placeholder="Enter your email to subscribe"
            border="0"
            outline="0"
            _focus={{ border: 0, outline: 0 }}
          />
          <Button
            fontWeight="300"
            fontSize={['12px', '12px', '']}
            _focus={{ outline: '0' }}
            h="100%"
            bg="brand.bg"
            color="black"
            textTransform="uppercase"
            borderRadius="none"
          >
            {' '}
            Subscribe{' '}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
