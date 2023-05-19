import { FC } from 'react'
import { Box, Button, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'
import Reveal from '../Animations/Reveal'
import { useRouter } from 'next/router'

interface IProp {
  bgStyle?: any
}

const HeroDesktop: FC<IProp> = ({
  bgStyle,
}) => {
  const router = useRouter()

  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      minH={'100vh'}
      h={'100vh'}
      position={"relative"}
      bgImage={'/images/hero.png'}
    >
      <Flex alignItems={"center"} height={"100%"} pos={"absolute"} top={0} left={0} zIndex={3}>
        <Box
          w="100%"
          bgSize="cover"
          bgPos={'center'}
          px={{ base: 4, '2xl': 28 }} 
        >
          <Grid templateColumns={{base:  'repeat(1, 1fr)', sm: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)'}} gap={12} mt={"-30vh"}>
            <Box as={GridItem} colSpan={2}>
              <Flex w="100%" h="100%" align={'center'} justify={'center'}>
                <Reveal from="bottom">
                  <Box
                    color="white"
                    fontSize={{base: 48,sm: 52, lg: 80}}
                    lineHeight={1}
                  >
                    <Text>Make it</Text>
                    <Text>stand out</Text>
                  </Box>
                  <Text color="white" fontSize={24} fontWeight={"thin"}>
                    Whatever it is, the way you tell your story online makes a difference
                  </Text>
                  <Button mt={{base: 8, md: 12}} py={{base: 8, md: 12}} px={{base: 4, md: 6}} rounded={0} bg="base.yellow" color="base.black" fontSize={{base: 16, md: 24}} onClick={() => router.push('/about')}>
                      Discover the company
                      <Icon ml={2} fontSize={24} as={BiArrowBack} {...{ transform: 'rotate(180deg)' }}/>
                  </Button>
                </Reveal>
              </Flex>
            </Box>
          </Grid>
        </Box>
      </Flex>
    </Box>
  )
}

export default HeroDesktop
