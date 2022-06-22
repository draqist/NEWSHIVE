import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { transition } from '../extra'

export const Splash = () => {
  return (
    <Flex h='100vh' textAlign='center' as={motion.div} animate={{ top: '-100vh', transition: { ...transition, delay: 3, staggerChildren: 0.5 } }} position='fixed' w='100vw' zIndex='2000000' top='0' left='0' justifyContent='center'  alignItems='center' bg='#10101a'>
          <Text as={motion.span} 
          initial={{y: 40, opacity: 0,}}
          animate={{y: 0, opacity:1, transition: {duration: 2}}} color='gray.200' fontSize={['24px','','36px']} fontWeight='500' >  Developed by Draq with 💜   </Text>
      </Flex>
  )
}
