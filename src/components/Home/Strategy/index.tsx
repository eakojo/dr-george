import { FC, useEffect, useState } from 'react'
import { Box, Button, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'
import Reveal from '@/components/Blocks/Animations/Reveal'
import { motion } from 'framer-motion'

const Strategy: FC = () => {
  const [philosophies, setPhilosophies] = useState([
    'Our business services team strives to provide assistance and solutions that go beyond the traditional tax and accounting role – to delve beyond the numbers and add value to your business.',
    'We form long-term relationships with our clients, wherein we become trusted advisors on a myriad of issues faced by'
  ])

  useEffect(() => {
    const timer = setInterval(() => {
      setPhilosophies(prev => {
        let newArr = [...prev]
        const firstIndex = newArr[0]
        newArr.shift()
        newArr.push(firstIndex)
        return newArr
      })
    }
    , 7000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const itemVariants = {
    hidden: {opacity: 0, x: -20},
    visible: {
      opacity: 1, x: 0,
      transition: {duration: 0.5}
    }
  }

  const MotionText = motion(Text)

  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      position={"relative"}
      px={{ base: 4, '2xl': 28 }} 
      py={28}
      borderBottomWidth={16}
      borderColor={"base.yellow"}
    >
        <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(7, 1fr)"}} gap={{base: 8, lg: 16}}>
             <Box as={GridItem} colSpan={{base: 1, sm:4, lg: 3}}>
                <Reveal from="left">
                  <Text fontSize={32} color="gray.800" fontWeight={600}>Our Strategy</Text>
                  <MotionText 
                    variants={itemVariants}
                    initial={'hidden'}
                    animate={'visible'}
                    exit={'hidden'}
                    key={philosophies[0]} 
                    color="gray.700" 
                    fontSize={24} 
                    lineHeight={1.2} 
                    mt={6}>
                      {philosophies[0]}
                  </MotionText>
                  <Text mt={8} color="gray.700" fontSize={24} lineHeight={1.2}>{philosophies[1]}</Text>
                  <Button mt={{base: 8, md: 12}} py={{base: 8, md: 12}} px={{base: 4, md: 6}} rounded={0} bg="base.yellow" color="base.black" fontSize={{base: 16, md: 24}}>
                    Discover the company
                    <Icon ml={2} fontSize={24} as={BiArrowBack} {...{ transform: 'rotate(180deg)' }}/>
                  </Button>
                </Reveal>
            </Box>
            <Box as={GridItem} colSpan={{base: 1, sm:3, lg: 4}}>
              <Image src="/images/crop.png" alt="strategy image" w="100%"/>
            </Box>
        </Grid>
    </Box>
  )
}

export default Strategy
