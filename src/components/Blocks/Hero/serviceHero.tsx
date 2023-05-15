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
      <Image pos={"relative"} zIndex={2} src="/images/services-hero.png" alt="hero image"  w="100%"/>
      <Flex alignItems={"center"} height={"100%"} pos={"absolute"} top={0} left={0} zIndex={3}>
        <Box
          w="100%"
          bgSize="cover"
          bgPos={'center'}
          px={{ base: 4, '2xl': 28 }} 
        >
          <Grid templateColumns={'repeat(5, 1fr)'} gap={12} mt={"-30vh"}>
            <Box as={GridItem} colSpan={3}>
              <Flex w="100%" h="100%" align={'center'} justify={'center'}>
                <Box>
                  <Box
                    color="black"
                    fontSize={64}
                    lineHeight={1.3}
                  >
                    <Text>Guiding Businesses</Text>
                    <Text>To Profitability</Text>
                    <Text>Through Financial</Text>
                    <Text>Visibility</Text>
                  </Box>
                  <Button mt={12} py={12} px={12} rounded={0} bg="base.black" _hover={{bg: "base.black"}} color="base.yellow" fontSize={24}>
                      Contact Us
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
