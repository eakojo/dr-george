import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { HiArrowLongRight } from 'react-icons/hi2'

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
        <Grid templateColumns={'repeat(7, 1fr)'} gap={12}  px={{ base: 8, '2xl': 36 }}>
          <GridItem colSpan={3}>
            <Text fontSize={84} fontWeight={600} color={"white"} lineHeight={1.1}>Restoring the integrity of <Text as="span" color={"base.gold"}>the Word</Text> Of God</Text>
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
          <GridItem colSpan={2}>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex w="100%" justify={"flex-end"} align={"center"} h="50vh">
              <Icon as={HiArrowLongRight} color="gray.300" fontSize={48}/>
            </Flex>
          </GridItem>
        </Grid>
        <Box pos={"absolute"} bottom={'-300px'} right={24}>
          <Image w="130%" src="images/Rev Geoege Official s.png" alt="Rev George"/>
        </Box>
      </Flex>
      <Image src="/images/hero image.png" alt="hr monarch bg" />
    </Box>
  )
}

export default HeroDesktop
