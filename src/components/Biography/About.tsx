import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Input, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import CustomButton from '../Atom/Button'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'

interface IProp {
  bgStyle?: any
}

const About: FC<IProp> = ({
  bgStyle,
}) => {
  return (
    <Box py={20} px={{ base: 4, '2xl': 36 }} pos="relative">
        <Grid templateColumns={'repeat(2, 1fr)'} gap={12}>
            <GridItem px={20} py={20}>
                <Text color={"base.blue"} fontWeight={600} fontSize={28}>I am Dr George Wilfred Arthur</Text>
                <Flex gap={3} mt={3}>
                    <Icon fontSize={20} as={FaFacebook} color={"base.blue"}/>
                    <Icon fontSize={20} as={FaInstagram} color={"base.blue"} />
                    <Icon fontSize={20} as={FaTwitter} color={"base.blue"} />
                </Flex>

                <Box mt={12}>
                    <Text fontFamily={"Montserrat"} mb={8}>Raising and equipping people who will come into the consciousness and <Text as="span" fontWeight={600}>the revelation of Christ and his finished work</Text> through the preaching and teaching of the gospel. Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.</Text>
                    <Text fontFamily={"Montserrat"} mb={8}>Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.  Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.</Text>
                    <Text fontFamily={"Montserrat"} mb={8}>Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.</Text>
                </Box>
            </GridItem>
            <GridItem px={20} py={20}>
                <Box>
                    <Image src="images/dr george 2.png" alt="home" />
                </Box>
                <Box pos={"relative"}>
                    <Flex gap={4} mt={4}>
                        <Box pos={'relative'}>
                            <Box pos={"absolute"} w="100%" h={"100%"} top={0} left={0} bg={"rgba(0,0,0,0.5)"} zIndex={3}></Box>
                            <Image src="images/dr george 2.png" alt="namely" />
                        </Box>
                        <Box>
                            <Image src="images/dr george 2.png" alt="namely" />
                        </Box>
                        <Box pos={'relative'}>
                            <Box pos={"absolute"} w="100%" h={"100%"} top={0} left={0} bg={"rgba(0,0,0,0.5)"} zIndex={3}></Box>
                            <Image src="images/dr george 2.png" alt="namely" />
                        </Box>
                        <Box pos={'relative'}>
                            <Box pos={"absolute"} w="100%" h={"100%"} top={0} left={0} bg={"rgba(0,0,0,0.5)"} zIndex={3}></Box>
                            <Image src="images/dr george 2.png" alt="namely" />
                        </Box>
                    </Flex>
                    <Flex pos={"absolute"} top={0} left={0} h={"100%"} w={"100%"} align={"center"} justify={"space-between"} zIndex={3}>
                        <Box pos={'relative'} ml={4}>
                            <Icon as={HiArrowLongLeft}  color={"white"} fontSize={28}/>
                        </Box>
                        <Box mr={4}>
                            <Icon as={HiArrowLongRight}  color={"white"} fontSize={28} />
                        </Box>
                    </Flex>
                </Box>
            </GridItem>
        </Grid>
        <Box pos={"absolute"} w={36} top={12} right={32}>
            <Image src="images/pattern-4.png" alt="image" />
        </Box>
    </Box>
  )
}

export default About
