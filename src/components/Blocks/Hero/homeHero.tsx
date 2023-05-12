import { FC } from 'react'
import { Box, Button, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'

interface IProp {
  cover?: string
  bgColor?: string
  title: { text: string; color: string }[][]
  subtext?: string
  align?: string
  overlay?: boolean
  bgStyle?: any
}

const HeroDesktop: FC<IProp> = ({
  cover,
  bgColor,
  bgStyle,
}) => {
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      minH={bgStyle?.h || '100vh'}
      position={"relative"}
    >
      <Image pos={"relative"} zIndex={2} src="/images/hero.png" alt="hero image"  w="100%"/>
      <Flex alignItems={"center"} height={"100%"} pos={"absolute"} top={0} left={0} zIndex={3}>
        <Box
          w="100%"
          bgSize="cover"
          bgPos={'center'}
          px={{ base: 4, '2xl': 28 }} 
        >
          <Grid templateColumns={'repeat(5, 1fr)'} gap={12} mt={"-30vh"}>
            <Box as={GridItem} colSpan={2}>
              <Flex w="100%" h="100%" align={'center'} justify={'center'}>
                <Box>
                  <Box
                    color="white"
                    fontSize={80}
                    lineHeight={1}
                  >
                    <Text>Make it</Text>
                    <Text>stand out</Text>
                  </Box>
                  <Text color="white" fontSize={24} fontWeight={"thin"}>
                    Whatever it is, the way you tell your story online makes a difference
                  </Text>
                  <Button mt={12} py={12} px={6} rounded={0} bg="base.yellow" color="base.black" fontSize={24}>
                      Discover the company
                      <Icon ml={2} fontSize={24} as={BiArrowBack} {...{ transform: 'rotate(180deg)' }}/>
                    </Button>
                </Box>
              </Flex>
            </Box>
          </Grid>
        </Box>
      </Flex>
    </Box>
  )
}

export default HeroDesktop