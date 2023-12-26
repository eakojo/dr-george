import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'


const Ministry: FC = () => {
  return (
    <Box
        bg={'rgba(238, 167, 44, 0.22)'}
        py={4}
        px={{ base: 4, '2xl': 36 }}
        pos={"relative"}
    >
        <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(7, 1fr)'}} gap={12}>
            <GridItem colSpan={4} display={{base: "none", md: "block"}}>
                <Box w={"80%"} p={24} position={"relative"}>
                    <Image src="images/phone_mockup.png" alt="phone mockup" />
                    <Box pos={"absolute"} w={24} top={14} left={0}>
                        <Image src="images/Facebook.png" alt="twitter float" />
                    </Box>
                    <Box pos={"absolute"} w={24} top={36} right={16}>
                        <Image src="images/Youtube.png" alt="youtube float" />
                    </Box>
                    <Box pos={"absolute"} w={24} bottom={36} left={0}>
                        <Image src="images/Twitter.png" alt="twitter float" />
                    </Box>
                    <Box pos={"absolute"} w={32} bottom={12} right={6}>
                        <Image src="images/Instagram.png" alt="instagram float" />
                    </Box>
                </Box>
            </GridItem>
            <GridItem colSpan={{base: 1, md: 3}}>
                <Flex direction={"column"} justify={"center"} lineHeight={1.2} h="100%" py={{base: 12, md: 0}}>
                    <Text textAlign={{base: "center", md: "left"}} color={"base.blue"} fontWeight={"bold"} fontSize={{base: 24, md: 40}}>Follow Dr. George on social media</Text>
                    <Text textAlign={{base: "center", md: "left"}}  mt={8} color={"base.blue"} fontFamily={"Montserrat"} fontSize={{base: 12, sm: 14, md: 16}}>
                        Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.
                    </Text>
                    <Flex justify={{base: "center", md: 'flex-start'}}>
                        <Flex mt={6} gap={{base: 4, md: 10}}>
                            <Box boxSize={{base: 8, md: 12}}>
                                <Image src={'images/fb.png'} alt='social button' />
                            </Box>
                            <Box boxSize={{base: 8, md: 12}}>
                                <Image src={'images/ig.png'} alt='social button'/>
                            </Box>
                            <Box boxSize={{base: 8, md: 12}}>
                                <Image src={'images/tw.png'}  alt='social button'/>
                            </Box>
                            <Box boxSize={{base: 8, md: 12}}>
                                <Image src={'images/yt.png'}  alt='social button'/>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
        <Box pos={"absolute"} bottom={-20} right={0} w={{base: 24, md: 32}}>
            <Image src='images/pattern.png' alt='pattern'/>
        </Box>
    </Box>
  )
}

export default Ministry
