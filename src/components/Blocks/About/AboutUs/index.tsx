import { FC } from 'react'
import { Box, Button, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'
import Reveal from '../../Animations/Reveal'

const AboutUs: FC = () => {
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
        <Grid templateColumns={"repeat(6, 1fr)"} gap={16}>
             <Box as={GridItem} colSpan={3}>
                <Reveal>
                    <Text fontSize={60} color="base.black" lineHeight={1.1}>At WIBEXLY, we care about making a real impact on business owner’s lives</Text>
                    <Text color="base.black" fontSize={24} lineHeight={1.4} mt={6}>we believe that small business owners make the world go round. We fundamentally believe that having visibility into your entire financial picture helps keep the lights on. That’s why one-time tax returns don’t cut it for us.</Text>
                    <Button mt={12} py={12} px={6} rounded={0} bg="base.black" color="base.yellow" fontSize={24} fontWeight={500}>
                      Contact Us
                      <Icon ml={2} fontSize={24} as={BiArrowBack} {...{ transform: 'rotate(180deg)' }}/>
                    </Button>
                </Reveal>
            </Box>
            <Box as={GridItem} colSpan={3}>
              <Image src="/images/about-phone.png" alt="strategy image" minW="90%"/>
            </Box>
        </Grid>
    </Box>
  )
}

export default AboutUs
