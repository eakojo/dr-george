import { FC } from 'react'
import { Box, Button, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'
import Reveal from '../Animations/Reveal'
import { useRouter } from 'next/router'


const HeroDesktop: FC = () => {
  const router = useRouter()
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      minH={'100vh'}
      position={"relative"}
      bgImage="/images/services-hero.png"
    >
      <Flex alignItems={"center"} height={"100%"} pos={"absolute"} top={0} left={0} zIndex={3}>
        <Box
          w="100%"
          bgSize="cover"
          bgPos={'center'}
          px={{ base: 4, '2xl': 28 }} 
        >
          <Grid templateColumns={{base:  'repeat(1, 1fr)', sm: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)'}} gap={12} mt={"-30vh"}>
            <Box as={GridItem} colSpan={3}>
              <Box>
                  <Flex w="100%" h="100%" align={'center'} justify={'center'}>
                    <Box>
                      <Box
                        color="black"
                        fontSize={{base: 32,sm: 52, lg: 64}}
                        lineHeight={1.3}
                      >
                        <Text>Guiding Businesses</Text>
                        <Text>To Profitability</Text>
                        <Text>Through Financial</Text>
                        <Text>Visibility</Text>
                      </Box>
                      <Button mt={12} py={12} px={6} rounded={0} bg="base.black" _hover={{bg: "base.black"}} color="base.yellow" fontSize={24} fontWeight={500} onClick={() => router.push('/contact')}>
                        Contact Us
                      <Icon ml={2} fontSize={24} as={BiArrowBack} {...{ transform: 'rotate(180deg)' }}/>
                      </Button>
                    </Box>
                  </Flex>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Flex>
    </Box>
  )
}

export default HeroDesktop
