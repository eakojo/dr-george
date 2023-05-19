import { FC } from 'react'
import { Box } from '@chakra-ui/react'

const HeroDesktop: FC= ({}) => {
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      minH={'100vh'}
      position={"relative"}
      bgImage={"/images/about-us.png"}
    >
    </Box>
  )
}

export default HeroDesktop
