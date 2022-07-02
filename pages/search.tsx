import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Axios from 'axios';
import { Suspense, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Navbar from '../components/Navbar';
import { News } from '../components/News';
import SearchSpinner from '../components/SearchSpinner';
import { pager, searchData, SearchQueryText } from '../states';

const SearchResults = () => {
  const [page, setPage] = useRecoilState(pager)
  const [data, setData] = useRecoilState(searchData);
  const query = useRecoilValue(SearchQueryText);
  let dis = false;
  if (page === 1) {
    dis = true;
  }
  const pagerRef = useRef<HTMLDivElement>(null);
  function scrollToref() {
    // @ts-ignore
    pagerRef?.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    Axios.get(
      `https://newsdata.io/api/1/news?apikey=${process.env.REQUEST_API}&q=${query}&language=en&page=${page}`,
    ).then((response) => {
      setData(response.data.results);
    });
  }, [query, page])
  return (
    <Box bg="brand.bg" color="black">
      <Navbar />
      <Suspense fallback={<SearchSpinner />}>
        <Box
          pos="relative"
          top="80px"
          px={['25px', '', '40px', '60px', '100px']}
          pt={['10px', '', '30px']}
          ref={pagerRef}
          mb='40px'
        >
          <Heading mb="30px"> Search Results: {data?.length} </Heading>

          {data?.map((data, id) => (
            <Box key={id}>
              <News data={data} />
            </Box>
          ))}
        </Box>
      </Suspense>
      <Flex
        px={['25px', '', '40px', '60px', '100px']}
        py={['20px', '', '30px']}
        justifyContent={['space-between', '', 'center']}
        gap={['', '', '500']}
        alignItems="center"
        mt='60px'
      >
        <Button
          px="20px"
          w="110px"
          py="10px"
          isDisabled={dis}
          colorScheme="blue"
          onClick={() => {
            setPage(page - 1);
            scrollToref();
          }}
        >
          {' '}
          Previous{' '}
        </Button>
        <Button
          w="110px"
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
export default SearchResults;
