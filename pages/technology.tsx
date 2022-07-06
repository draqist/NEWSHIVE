import { Heading } from '@chakra-ui/react';
import Axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { News } from '../components/News';
import PageSectionLayout from '../components/PageSectionLayout';
import { Trending } from '../components/types';
import { resultTally, tech } from '../states';

const Tech: NextPage = () => {
  const [res, setRes] = useState<Trending[]>();
  const { pathname } = useRouter();
  let path = pathname.slice(1);
  const [page, setPage] = useRecoilState(tech);
  let [tally, setTally] = useRecoilState(resultTally);
  useEffect(() => {
    Axios.get(
      `https://newsdata.io/api/1/news?apikey=${process.env.REQUEST_API}&language=en&category=${path}&domain=techcrunch&page=${page}`,
    ).then((res) => {
      setRes(res.data.results);
      setTally(Math.ceil(res.data.totalResults / 10));
    });
  }, [path, page]);
  let dis = false;
  if (page === 1) {
    dis = true;
  }

  return (
    <PageSectionLayout path={path} dis={dis} page={page} setPage={setPage}>
      <Heading mb="30px"> Technology </Heading>
      {res?.map((data, id) => (
        <News data={data} key={id} />
      ))}
    </PageSectionLayout>
  );
};
export default Tech;
