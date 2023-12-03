import { FC } from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface IProp {
  bgStyle?: any
}

const HeroDesktop: FC<IProp> = ({
  bgStyle,
}) => {
  return (
    <Box
      w="full"
      bgSize="contain"
      alignItems={"center"}
      minH={'calc(100vh - 150px)'}
      h={'calc(100vh - 150px)'}
      bg="base.blue-dark"
      position={"relative"}
      overflow={'hidden'}
    >
      <Flex align={"center"} justify={"center"} pos={"absolute"} top={0} left={0} bg={"#021821d6"} w={'100%'} h="100%">
        <Box w="50%">
          <Text fontSize={48} textAlign={"center"} fontFamily={"Montserrat"} color={"base.gold"}>
            Restoring the integrity of the word God in it full glory and life in the body of Christ
          </Text>
        </Box>
      </Flex>
      <Image src="/images/hero-section.jpg" />
    </Box>
  )
}

export default HeroDesktop
