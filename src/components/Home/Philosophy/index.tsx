import { FC } from 'react'
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import Reveal from '@/components/Blocks/Animations/Reveal'

const Philosophy: FC = () => {
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      position={"relative"}
      px={{ base: 4, '2xl': 28 }} 
      py={28}
      borderBottomWidth={16}
      borderColor={"base.yellow"}
    >
        <Grid templateColumns={"repeat(7, 1fr)"} gap={16}>
            <Box as={GridItem} colSpan={4}>
              <Image src="/images/philosophy.png" alt="philosophy image"/>
            </Box>
            <Box as={GridItem} colSpan={3}>
                <Reveal from="right">
                  <Text fontSize={32} color="gray.800" fontWeight={600}>Our Philosophy</Text>
                  <Text color="gray.700" fontSize={28} lineHeight={1.2} mt={6}>The evidence is overwhelming that the world is facing more change and uncertainty, affecting nearly everyone and everything.</Text>
                  <Text mt={16} color="gray.400" fontSize={28} lineHeight={1.2}>The threat this poses to organizations can also hold opportunity, sometimes a very big opportunity</Text>
                </Reveal>
            </Box>
        </Grid>
    </Box>
  )
}

export default Philosophy
