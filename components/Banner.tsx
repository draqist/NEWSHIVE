{
  /* eslint-disable  react/no-unescaped-entities */
}
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Heading, Link, Tag, Text } from '@chakra-ui/react';
import Axios from 'axios';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { startTransition, useEffect, useState } from 'react';
import { Trending } from './types';

function Banner({ category, domain }: { category: string; domain: string }) {
  const { pathname } = useRouter();
  let path = pathname.slice(1);
  let [res, setRes] = useState<Trending>();
  const d = new Date();
  useEffect(() => {
    startTransition(() => {
      Axios.get(
        `https://newsdata.io/api/1/news?apikey=${process.env.REQUEST_API}&language=en&category=${category}&domain=${domain}`,
      ).then((res) => {
        setRes(res.data.results[0]);
      });
    });
  }, [category, domain]);
  return (
    <>
      <Box
        w={['', '', '100%']}
        h={['600px', '', '450px']}
        bgImage={`url(${
          res?.image_url != null ? res.image_url : `${path}.jpg`
        })`}
        zIndex="1"
        color="white"
        px={['25px', '25px', '40px', '60px', '100px']}
        pos="relative"
        bgPosition="top center"
        bgSize="cover"
        bgRepeat="no-repeat"
        py="40px"
      >
        <Box
          pos="absolute"
          textAlign="left"
          bottom="40px"
          w={['', '', '600px']}
          right={['25px', '25px', '40px', '60px', '100px']}
          left={['25px', '25px', '40px', '60px', '100px']}
        >
          <Text textShadow={'1px 1px 2px rgba(0,0,0,.5)'}>
            <Tag
              variant="solid"
              textTransform="capitalize"
              colorScheme="red"
              borderRadius="0"
              mr="16px"
            >
              {res?.category[0]}
            </Tag>
            {/* @ts-ignore */}
            {res?.pubDate ? new Date(res?.pubDate).toUTCString() : d.toUTCString()}
          </Text>
          <Heading
            fontSize={['18px', '30px', '30px']}
            my="20px"
            textShadow={'1px 1px 2px rgba(0,0,0,.5)'}
          >
            {' '}
            {res?.title}{' '}
          </Heading>
          <Text
            fontSize={['16px', '', '']}
            fontFamily="Poppins"
            fontWeight="600"
            textShadow={'1px 1px 2px rgba(0,0,0,.5)'}
          >
            {res?.description}
          </Text>
          <NextLink href={`${res?.link}`} passHref>
            <Link
              isExternal
              mt="10px"
              outline="0"
              _focus={{ outline: 0 }}
              textTransform="uppercase"
              color="twitter.500"
              fontWeight="100"
              textShadow={'1px 1px 2px rgba(0,0,0,.5)'}
            >
              {' '}
              Read more.. <ExternalLinkIcon />{' '}
            </Link>
          </NextLink>
        </Box>
      </Box>
    </>
  );
}
export default Banner;
