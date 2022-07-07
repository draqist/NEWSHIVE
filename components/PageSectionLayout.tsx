import { Box, Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { lazy, ReactNode, Suspense, useRef } from 'react';
import { SetterOrUpdater, useRecoilValue } from 'recoil';
import { resultTally } from '../states';
import BannerSpinner from './BannerSpinner';
import Navbar from './Navbar';

const DynamicBanner = lazy(() => import('../components/Banner'));

const PageSectionLayout = ({
  path,
  dis,
  page,
  setPage,
  children,
}: {
  path: string;
  dis: boolean;
  page: number;
  setPage: SetterOrUpdater<number>;
  children: ReactNode;
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  function scrollToref() {
    // @ts-ignore
    titleRef?.current.scrollIntoView({ behavior: 'smooth' });
  }
  const nextChecker = useRecoilValue(resultTally);
  const Router = useRouter();
  let click = false;
  if (page === nextChecker - 1) {
    click = true;
  }
  return (
    <Box as={motion.div} exit={{opacity:0, transition: {duration: 1}}} initial={{ opacity: 0,}} animate={{opacity: 1}} bg="brand.bg" h="100%" color="black">
      <Navbar path={path} />
      <Suspense fallback={<BannerSpinner />}>
        <DynamicBanner category={path} domain="portsmouth" />
      </Suspense>
      <Box
        ref={titleRef}
        px={['25px', '', '40px', '60px', '100px']}
        mt={['20px', '', '30px']}
      >
        {children}
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
          w="110px"
          py="10px"
          isDisabled={dis}
          colorScheme="blue"
          onClick={() => {
            // setPage(page - 1);
            Router.back();
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
          isDisabled={click}
        >
          {' '}
          Next{' '}
        </Button>
      </Flex>
    </Box>
  );
};

export default PageSectionLayout;
