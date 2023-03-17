'use client'
import { Container, Heading,Text,ColorMode, useColorMode, Flex,Image, Button,Box } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import { imageMotion, Letter, Textanime } from './components/motion'



export const HeroSec = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>

    <Flex mb={'150px'} mt={["80px",'30px','150px','100px']} direction={['column','column','row']}>

<Container textAlign={['center','center',"left"]} mt={['','','','100px','100px']}  maxW={'550px'}><Heading viewport={{ once: false }}  as={motion.h1} initial="hidden" whileInView={"visible"} variants={Letter}>   Become  a <Text as={motion.h1} variants={Letter} initial={'hidden'}  whileInView='visible' viewport={{ once: false }} color={'#11ad8e'}> Certified Web 3.0 <Text as={'span'} color={colorMode === 'light' ? 'black' :'white' }>and </Text>   Metaverse Developer </Text> </Heading> 
<Text fontSize={'medium'} as={motion.h1}  variants={Letter} initial={'hidden'} whileInView={'visible'} mt={'15px'}>Launch Your Dev Career With Web 3 and Metaverse Getting Ready For The Next Generation Of Internet</Text> 
<Button size={['md','md','lg']} as={motion.h1} variants={Letter} whileInView={'visible'}  initial={'hidden'} viewport={{ once: false }}  mt={'25px'} bgColor={'#11ad8e'}>Join Now</Button></Container>
<Image as={motion.img} initial="hidden"  viewport={{ once: false }}  whileInView={"show"} variants={imageMotion} alt='' mt={['20px','20px','30px']}  height={['300px','300px','300px','350px','450px']} mr={['opx','0px','50px']} src='/aa.png' />
    </Flex>
    </>
  )
}
