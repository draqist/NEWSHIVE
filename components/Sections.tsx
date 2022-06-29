import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Trending } from './types';
import NextLink from 'next/link';

export const Sections = (props: any) => {
  const [res, setRes] = useState<Trending>();
  useEffect(() => {
    Axios.get(
      `https://newsdata.io/api/1/news?apikey=${
        process.env.maemoonah
      }&language=en&category=${props.section.toLowerCase()}`,
    ).then((res) => {
      setRes(res.data.results[1]);
    });
  }, [props.section]);
  return (
    <>
      <Flex
        justifyContent="space-between"
        direction={['column', 'row']}
        alignItems="flex-start"
        mb={['0px', '', '50px']}
        borderTop="2px solid black"
        py="25px"
        w="100%"
        color="black"
      >
        <Flex
          mb={['1rem', '0']}
          direction={['row', 'column']}
          justifyContent={['space-between', 'unset', 'unset']}
          w="100%"
        >
          <Heading fontSize={['21px', '', '24px', '36px', '48px']}>
            {' '}
            {props.section}{' '}
          </Heading>
          <NextLink href={`/${props.section.toLowerCase()}`} passHref>
            <Link
              fontSize={['16px', '', '12px', '14px', '16px']}
              _focus={{ outline: '0' }}
              textTransform="uppercase"
            >
              {' '}
              See All <ExternalLinkIcon />{' '}
            </Link>
          </NextLink>
        </Flex>
        <Stack direction={['column', 'row']} gap="2">
          <Box w={['', '', '200px', '240px', '240px']} h="240px">
            <Heading fontSize={['14px', '', '16px']} mb="14px">
              {' '}
              {res?.title}{' '}
            </Heading>
            <Box h="130px" mb={['', '', '10px']} overflow={'hidden'}>
              <Text fontSize={['12px', '', '']}> {res?.description} </Text>
            </Box>
            <NextLink href="">
              <Link
                href={res?.link}
                isExternal
                outline="0"
                _focus={{ outline: 0 }}
                textTransform="uppercase"
                fontWeight="300"
                color="twitter.600"
              >
                {' '}
                Read article <ExternalLinkIcon />{' '}
              </Link>
            </NextLink>
          </Box>
          <Box
            w={['', '', '200px', '240px', '240px']}
            bgPosition="center"
            bgSize="cover"
            bgImage={`url(${
              res?.image_url != null ? res.image_url : 'news.jpg'
            })`}
            h="240px"
          />
        </Stack>
      </Flex>
    </>
  );
};
