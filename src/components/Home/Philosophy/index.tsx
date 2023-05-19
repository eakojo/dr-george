import { FC, useEffect, useState } from 'react'
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import Reveal from '@/components/Blocks/Animations/Reveal'
import App from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'

const swapPosition = (arr) => {
  let newArr = [...arr]
  if(newArr.length){
    const firstIndex = newArr[0]
    newArr.shift()
    newArr.push(firstIndex)
  }
  return newArr
} 

const Philosophy: FC = () => {
  const [philosophies, setPhilosophies] = useState([
    'The evidence is overwhelming that the world is facing more change and uncertainty, affecting nearly everyone and everything.',
    'The threat this poses to organizations can also hold opportunity, sometimes a very big opportunity'
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
    hidden: {opacity: 0, x: 20},
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
            <Box as={GridItem} colSpan={{base: 1, sm:3, lg: 4}}>
              <Image src="/images/philosophy.png" alt="philosophy image"/>
            </Box>
            <Box as={GridItem} colSpan={{base: 1, sm:4, lg: 3}}>
                <Reveal from="right">
                  <Text fontSize={32} color="gray.800" fontWeight={600}>Our Philosophy</Text>
                  <AnimatePresence>
                    <MotionText
                        variants={itemVariants}
                        initial={'hidden'}
                        animate={'visible'}
                        exit={'hidden'}
                        key={philosophies[0]} 
                        color="gray.700" 
                        fontSize={28} 
                        lineHeight={1.2} 
                        mt={6}
                      > 
                      {philosophies[0]}
                    </MotionText>
                    <MotionText
                        key={philosophies[1]} 
                        color="gray.400"
                        fontSize={28} 
                        lineHeight={1.2} 
                        mt={6}
                      > 
                      {philosophies[1]}
                    </MotionText>
                  </AnimatePresence>
                </Reveal>
            </Box>
        </Grid>
    </Box>
  )
}

export default Philosophy
