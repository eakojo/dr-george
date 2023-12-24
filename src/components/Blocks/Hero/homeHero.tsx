import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

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
      h={'100vh'}
      bg="base.blue-dark"
      position={"relative"}
      overflow={'hidden'}
    >
      <Flex align={"center"} pos={"absolute"} top={0} left={0} bg={"#021821d6"} w={'100%'} h="100%">
        <Grid templateColumns={'repeat(3, 1fr)'} gap={12}  px={{ base: 8, '2xl': 36 }}>
          <GridItem>
            <Text fontSize={72} w={110} fontWeight={600} color={"white"} lineHeight={1.2}>Restoring the integrity of <Text as="span" color={"base.gold"}>the Word</Text> Of God</Text>
            <Text color={"whiteAlpha.700"} fontSize={16} fontFamily={"Montserrat"}>Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.</Text>
            
            <Flex mt={6} color="white" gap={4} fontSize={20}>
              <Icon as={FaFacebook} />
              <Icon as={FaInstagram} />
              <Icon as={FaTwitter} />
            </Flex>

            <Flex mt={12} align={"center"} gap={2}>
              <Box width={2} h={2} rounded={"full"} bg={"whiteAlpha.500"}></Box>
              <Box width={3} h={3} rounded={"full"} bg={"whiteAlpha.800"}></Box>
              <Box width={2} h={2} rounded={"full"} bg={"whiteAlpha.500"}></Box>
              <Box width={2} h={2} rounded={"full"} bg={"whiteAlpha.500"}></Box>

            </Flex>
          </GridItem>
          <GridItem>
          </GridItem>
          <GridItem>
          </GridItem>
        </Grid>
        <Box pos={"absolute"} bottom={-28} right={5}>
          <Image w="80%" src="images/Rev Geoege Official s.png" alt="Rev George"/>
        </Box>
      </Flex>
      <Image src="/images/hero image.png" alt="hr monarch bg" />
    </Box>
  )
}

export default HeroDesktop
