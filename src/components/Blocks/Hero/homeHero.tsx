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
      bgSize="contain"
      alignItems={"center"}
      minH={'calc(100vh - 150px)'}
      h={'calc(100vh - 150px)'}
      bg="base.blue-dark"
      position={"relative"}
      overflow={'hidden'}
    >
      <Box pos={"absolute"} top={0} left={0} bg={"#021821d6"} w={'100%'} h="100%"></Box>
      <Image src="/images/hero-section.jpg" />
    </Box>
  )
}

export default HeroDesktop
