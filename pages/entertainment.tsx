import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import BannerSpinner from '../components/BannerSpinner';
import Navbar from '../components/Navbar';
import { News } from '../components/News';
import { Trending } from '../components/types';
import { entertainment } from '../states';

interface BannerProps {
  category: string;
  domain: string;
}
const DynamicBanner = lazy(() => import('../components/Banner'));
const Entertainment: NextPage = () => {
  const [res, setRes] = useState<Trending[]>();
  const { pathname } = useRouter();
  let path = pathname.slice(1);
  const [page, setPage] = useRecoilState(entertainment);
  let dis = false;
  if (page === 1) {
    dis = true;
  }
  useEffect(() => {
    Axios.get(
      `https://newsdata.io/api/1/news?apikey=${process.env.maemoonah}&language=en&category=${path}&page=${page}`,
    ).then((res) => {
      setRes(res.data.results);
    });
  }, [path, page]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  function scrollToref() {
    // @ts-ignore
    titleRef?.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <Box bg="brand.bg" h="100%" color="black">
      <Navbar />
      <Suspense fallback={<BannerSpinner />}>
        <DynamicBanner category={path} domain="cnn" />
      </Suspense>
      <Box
        ref={titleRef}
        px={['25px', '', '40px', '60px', '100px']}
        mt={['20px', '', '30px']}
      >
        <Heading mb="30px"> Entertainment News </Heading>
        {res?.map((data, id) => (
          <News data={data} key={id} />
        ))}
      </Box>
      <Flex
        px={['25px', '', '40px', '60px', '100px']}
        py={['20px', '', '30px']}
        justifyContent={['space-between', '', 'center']}
        gap={['', '', '500']}
        alignItems="center"
      >
        <Button
          px="20px"
          w="90px"
          py="10px"
          isDisabled={dis}
          colorScheme="blue"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {' '}
          Previous{' '}
        </Button>
        <Button
          w="90px"
          px="40px"
          py="10px"
          colorScheme="purple"
          onClick={() => {
            setPage(page + 1);
            scrollToref();
          }}
        >
          {' '}
          Next{' '}
        </Button>
      </Flex>
    </Box>
  );
};
export default Entertainment;
