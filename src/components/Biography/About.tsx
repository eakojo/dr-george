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
    <Box py={{base: 12, md: 20}} px={{ base: 4, '2xl': 36 }} pos="relative">
        <Grid templateColumns={{base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)'}} gap={{base: 4, xl: 12}}>
            <GridItem px={{base: 4, lg: 0}} py={20}>
                <Text color={"base.blue"} fontWeight={600} fontSize={28}>Meet Rev. George Wilfred Arthur</Text>
                <Flex gap={3} mt={3}>
                    <Icon fontSize={20} as={FaFacebook} color={"base.blue"}/>
                    <Icon fontSize={20} as={FaInstagram} color={"base.blue"} />
                    <Icon fontSize={20} as={FaTwitter} color={"base.blue"} />
                </Flex>

                <Box mt={12}>
                    <Text fontFamily={"Montserrat"} mb={8}>Rev. George Wilfred Arthur is the shepherd and driving force behind George Wilfred Arthur Ministries (G. W. Arthur Ministries). With a profound commitment to the restoration of God&apos;s Word, Rev. George brings a unique blend of passion, wisdom, and love to his ministry.</Text>
                    <Text fontFamily={"Montserrat"} mb={8}>Rev. George envisions a world where the integrity of God&apos;s Word is fully restored within the body of Christ. His leadership is marked by a deep desire for spiritual renewal and transformation, aiming to create a community where individuals can experience the life-changing power of the Gospel.</Text>
                    <Text fontFamily={"Montserrat"} mb={8}>Rev. George is not just a preacher; he is a messenger of love and power. His teachings reflect the virtues and excellences of Christ, and he tirelessly strives to showcase the marvelous deeds that define the love and power found in Christ&apos;s transformative message.</Text>
                    <Text fontFamily={"Montserrat"} mb={8}>For Rev. George, the will of God is not just a guiding principle; it is the heartbeat of his life and ministry. His unwavering devotion to aligning every aspect of his work with God&apos;s will serves as an inspiration to those who follow his teachings.</Text>
                    <Text fontFamily={"Montserrat"} mb={8}>Rev. George Wilfred Arthur is a beacon of light for those seeking spiritual guidance, deeper connections with Christ, and a community that shares their values. His leadership is marked by authenticity, humility, and an unshakeable belief in the transformative power of the Gospel.</Text>
                    <Text fontFamily={"Montserrat"} mb={8}>Whether you are a long-time follower or just discovering Rev. George Wilfred Arthur, we invite you to join him on this transformative journey. Explore the richness of God&apos;s Word, experience His love and power, and discover the fulfillment of your divine inheritance in Christ under the ministry of Rev. George Wilfred Arthur.</Text>

                </Box>
            </GridItem>
            <GridItem px={{base: 4, md: 20}} py={{base: 4, md: 20}}>
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
        <Box pos={"absolute"} w={36} bottom={12} right={32} >
            <Image src="images/pattern-4.png" alt="image" />
        </Box>
    </Box>
  )
}

export default About
