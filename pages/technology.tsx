import { Box, Heading } from '@chakra-ui/react';
import Axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import { News } from '../components/News';
import { Trending } from '../components/types';

const Tech: NextPage = () => {
  const [res, setRes] = useState<Trending[]>();
  const { pathname } = useRouter();
  let path = pathname.slice(1);

  useEffect(() => {
    Axios.get(
      `https://newsdata.io/api/1/news?apikey=${process.env.customKey}&language=en&category=${path}&domain=techcrunch`,
    ).then((res) => {
      setRes(res.data.results);
      console.log(res.data.results);
    });
  }, [path]);

  return (
    <Box bg="brand.bg" h="100%" color="black">
      <Navbar />
      <Box>
        <Banner category={path} domain="techcrunch" />
      </Box>
      <Box px={['25px', '', '40px', '60px', '100px']} mt={['20px', '', '30px']}>
        <Heading mb="30px"> Tech News </Heading>
        {res?.map((data, id) => (
          <News data={data} key={id} />
        ))}
      </Box>
    </Box>
  );
};
export default Tech;
