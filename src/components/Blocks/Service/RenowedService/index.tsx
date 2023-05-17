import { FC } from 'react'
import { Box, Button, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import Reveal from '../../Animations/Reveal'

const RenownedService: FC = () => {
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      position={"relative"}
      px={{ base: 4, '2xl': 28 }} 
      borderBottomWidth={16}
      borderColor={"base.yellow"}
    >
        <Grid templateColumns={"repeat(7, 1fr)"} gap={16} pt={24}>
              <Box as={GridItem} colSpan={4}>
                <Reveal from='left'>
                  <Box pt={12}>
                    <Text fontSize={60} color="base.black" lineHeight={1.1}>Our Renowned Services</Text>
                    <Text color="base.black" fontSize={24} lineHeight={1.4} mt={6}>
                      we believe that small business owners make the world go round. We fundamentally believe that having visibility into your entire financial picture helps keep the lights on. That’s why one-time tax returns don’t cut it for us.
                    </Text>
                  </Box>
                  <Box pt={24}>
                    <Text fontSize={60} color="base.black" lineHeight={1.1}>Services To Help You Grow</Text>
                    <Text color="base.black" fontSize={24} lineHeight={1.4} mt={6}>
                      we believe that small business owners make the world go round. We fundamentally believe that having visibility into your entire financial picture helps keep the lights on. That’s why one-time tax returns don’t cut it for us.
                    </Text>
                  </Box>
                </Reveal>
            </Box>
            <Box as={GridItem} colSpan={3}>
              <Image src="/images/services-hand.png" alt="strategy image" minW="90%"/>
            </Box>
        </Grid>
    </Box>
  )
}

export default RenownedService
