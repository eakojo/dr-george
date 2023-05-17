import { FC } from 'react'
import { Box, Button, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'

const HeroDesktop: FC= ({}) => {
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      minH={'100vh'}
      position={"relative"}
    >
      <Image pos={"relative"} zIndex={2} src="/images/about-us.png" alt="hero image"  w="100%"/>
    </Box>
  )
}

export default HeroDesktop
