/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const Products: FC = () => {
  return (
    <Box position={'relative'}>
      <Box pos={'absolute'} w={28} left={0} top={-48} zIndex={4}>
        <Image
          src="images/Leave.png"
          {...{ transform: 'rotate(0deg)' }}
          alt="fruit image"
        />
      </Box>
      <Box pos={'absolute'} w={'50vw'} left={0} top={-60} zIndex={3}>
        <Image
          src="images/Splash.png"
          {...{ transform: 'rotate(0deg)' }}
          alt="fruit image"
        />
      </Box>
      <Box pos={'relative'}>
        <Box pos="relative" zIndex={1}>
          <Image src="/images/ScreenSplash.png" alt="screen splash" />
        </Box>
        <Box
          top={0}
          zIndex={3}
          pos="absolute"
          w={{ base: '100%' }}
          px={{ base: 6, sm: 6, md: 16, lg: 20, '2xl': 28, '4xl': 48 }}
          py={36}
        >
          <Box w={'60%'}>
            <Text fontWeight={700} fontSize={72} color="white">
              Our Products
            </Text>
            <Text fontWeight={400} color="white" fontSize={24}>
              No matter which one you choose, you can count on great taste being
              in each and every bottle of Enjuice
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Products
