import { Heading, useToast } from '@chakra-ui/react';
import Axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { News } from '../components/News';
import PageSectionLayout from '../components/PageSectionLayout';
import { Trending } from '../components/types';
import { politics, resultTally } from '../states';

export default function Politics() {
  const [res, setRes] = useState<Trending[]>();
  const [error, setError] = useState<boolean>(false);
  const { pathname } = useRouter();
  let path = pathname.slice(1);
  let [page, setPage] = useRecoilState(politics);
  let [tally, setTally] = useRecoilState(resultTally);
  let dis = false;
  if (page === 1) {
    dis = true;
  }
  const Toast = useToast();
  useEffect(() => {
    Axios.get(
      `https://newsdata.io/api/1/news?apikey=${process.env.REQUEST_API}&language=en&category=${path}&page=${page}`,
    )
      .then((res) => {
        setRes(res.data.results);
        setTally(res.data.totalResults);

      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [path, page]);
  return (
    <>
      <PageSectionLayout path={path} dis={dis} page={page} setPage={setPage}>
        <Heading mb="30px"> Politics </Heading>
        {error &&
          Toast({
            title: 'Apologies!, API Request failed',
            description: 'The API request limit has been exhausted ',
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'bottom',
            containerStyle: {
              width: '350px',
              maxWidth: '100%',
            },
          })}
        {res?.map((data, id) => (
          <News data={data} key={id} />
        ))}
      </PageSectionLayout>
    </>
  );
}
