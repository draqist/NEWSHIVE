import { Flex, Heading } from '@chakra-ui/react';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Trend } from './Trend';
import { Trending } from './types';

const Trending = () => {
  const [res, setRes] = useState<Trending[]>();
  useEffect(() => {
    Axios.get(
      `https://newsdata.io/api/1/news?apikey=${process.env.customKey}&language=en&category=politics,health,entertainment`,
    ).then((res) => {
      setRes(res.data.results);
    });
  }, []);

  return (
    <>
      <Heading
        my={['13px', '20px']}
        color="black"
        fontFamily="Oswald"
        fontWeight="400"
        px={['25px', '', '40px', '60px', '100px']}
      >
        {' '}
        Trending News{' '}
      </Heading>
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
        {res
          ?.filter((data, idx) => idx < 4)
          ?.map((data, id) => (
            <Trend
              key={id}
              title={data.title}
              subtitle={data.description}
              category={data.category}
              url={data?.link}
            />
          ))}
      </Flex>
    </>
  );
};
export default Trending;
