/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'

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
  title,
  subtext,
  align,
  overlay,
  bgStyle,
  children
}) => {
  return (
    <Flex
      w="full"
      bgSize="cover"
      bg="base.cream"
      px={{ base: 6, sm: 6, md: 16, lg: 20, '2xl': 28, '4xl': 48 }}
    >
      <Box
        h={bgStyle?.h || '100vh'}
        w="100%"
        {...(cover ? { bgImage: cover } : {})}
        {...(bgColor ? { bgColor: bgColor } : {})}
        bgSize="cover"
        bgPos={'center'}
      >
        <Grid templateColumns={'repeat(5, 1fr)'} gap={12} mt={12}>
          <Box as={GridItem} colSpan={2}>
            <Flex w="100%" h="100%" align={'center'} justify={'center'}>
              <Box>
                <Box
                  color="base.green"
                  fontSize={72}
                  fontWeight={800}
                  lineHeight={1.4}
                >
                  <Text>Enjuice&reg;</Text>
                  <Text>Mango</Text>
                </Box>
                <Text color="base.green" fontSize={20} fontWeight={500}>
                  consectetur adipiscing elit, sed do eiusmod tempor incidi dunt
                  ut labore et dolore magna aliqua.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box as={GridItem} colSpan={3}>
            <Image src="images/JIC.png" alt="cover-image" />
          </Box>
        </Grid>
      </Box>
    </Flex>
  )
}

export default HeroDesktop
