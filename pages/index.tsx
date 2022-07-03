import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { lazy, Suspense } from 'react';
import BannerSpinner from '../components/BannerSpinner';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import { Newsletter } from '../components/Newsletter';
import { Sections } from '../components/Sections';
import { Splash } from '../components/Splash';
import TrendSpinner from '../components/TrendSpinner';
import { sections } from '../extra';

const DynamicBanner = lazy(() => import('../components/Banner'));
const DynamicTrending = lazy(() => import('../components/Trending'));

const Home: NextPage = () => {
  return (
    <>
      {/* <Splash /> */}
      <Box bg="brand.bg" color="black">
        <Navbar />
        <Suspense fallback={<BannerSpinner />}>
          <DynamicBanner category={'top'} domain="cnn" />
        </Suspense>
        <Suspense fallback={<TrendSpinner />}>
          <DynamicTrending />
        </Suspense>
        <Box
          px={['25px', '', '40px', '60px', '100px']}
          mt={['20px', '', '60px']}
          mb={['', '', '40px']}
        >
          {sections.map((sec, id) => (
            <Sections key={id} section={sec.title} />
          ))}
        </Box>
        <Newsletter />
        <Footer />
        {/*  */}
      </Box>
    </>
  );
};

export default Home;
