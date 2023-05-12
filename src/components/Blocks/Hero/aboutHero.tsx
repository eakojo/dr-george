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
      <Image pos={"relative"} zIndex={2} src="/images/about-us.png" alt="hero image"  w="100%"/>
    </Box>
  )
}

export default HeroDesktop
