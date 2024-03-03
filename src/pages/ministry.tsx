import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import Listen from '@/components/Home/Listen'
import PageHero from '@/components/Blocks/Hero/pageHero'
import { Box, Flex, Grid, GridItem, Icon, Image, Input, Text, Textarea } from '@chakra-ui/react'
import { TbPlayerPlayFilled } from 'react-icons/tb'
import CustomButton from '@/components/Atom/Button'


const Home: NextPage = () => {
  return (
    <Layout>
        <PageHero title='Ministry' />
        <Box py={{base: 8, md: 14}} px={{ base: 4, '2xl': 36 }}>
            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap={10}>
                <GridItem>
                    <Text fontWeight={600} fontSize={{base: 20, md: 24}} mb={4}>My Mission</Text>
                    <Text mb={12} fontFamily={"Montserrat"}>To preach to the nations the unsearchable riches of Christ and to make known the glorious wealth of God’s inheritance in the saints.<br/><br/>We do this by raising, equipping, and guiding individuals into a profound awareness and revelation of Christ and His completed work through the powerful mediums of preaching and teaching the Gospel. Through these efforts, we are dedicated to leading people to the realization of their allotted inheritance in Christ.</Text>
                </GridItem>
                <GridItem>
                    <Text fontWeight={600} fontSize={{base: 20, md: 24}} mb={4}>My Vision</Text>
                    <Text mb={12} fontFamily={"Montserrat"}>We exist to share the unadulterated gospel, love people, and make disciples of Jesus Christ. <br/>At George Wilfred Arthur Ministries (G. W. Arthur Ministries), our vision is to restore the integrity of God’s Word in its full glory and life within the body of Christ. We are a dynamic and effective ministry that serves as a catalyst for spiritual renewal and transformation.</Text>
                </GridItem>
            </Grid>
            <Box w="100%" h="500px" bgImage={"/images/hero image 2.png"} bgPos={"center"} bgSize={"cover"} my={{base: '24', md: '8'}}></Box>
            <Box>
                <Text fontWeight={600} fontSize={{base: 20, md: 24}} mb={4}>My Core Values</Text>
                <Text mb={8} fontFamily={"Montserrat"}>Dr. George Wilfred Arthur is the shepherd and driving force behind G. W. Arthur Ministries. With a profound commitment to the restoration of God’s Word, Dr. G. W. Arthur brings a unique blend of passion, wisdom, and love to his ministry.</Text>
                <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}} gap={10}>
                    <GridItem>
                        <Flex>
                            <Image width={'20px'} height={'20px'} mr={4} mt={1} src='/images/checkmark.png' alt='checkmark'></Image>
                            <Box>
                                <Text fontWeight={600} fontSize={{base: 16, md: 20}} mb={2}>Exemplifying Christ&apos;s Virtues and Excellence</Text>
                                <Text fontFamily={"Montserrat"}>We are committed to embodying the virtues and excellences exemplified by Christ. Through our actions and interactions, we strive to reflect the love and power that defined His remarkable deeds.</Text>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Flex>
                            <Image width={'20px'} height={'20px'} mr={4} mt={1} src='/images/checkmark.png' alt='checkmark'></Image>
                            <Box>
                                <Text fontWeight={600} fontSize={{base: 16, md: 20}} mb={2}>Showcasing Christ&apos;s Marvelous Deeds</Text>
                                <Text fontFamily={"Montserrat"}>Our purpose is to illuminate and showcase the extraordinary deeds of Christ. We aim to bring to light His marvelous acts, demonstrating the transformative impact of His love and power in our lives.</Text>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Flex>
                            <Image width={'20px'} height={'20px'} mr={4} mt={1} src='/images/checkmark.png' alt='checkmark'></Image>
                            <Box>
                                <Text fontWeight={600} fontSize={{base: 16, md: 20}} mb={2}>Devotion to the Will of God</Text>
                                <Text fontFamily={"Montserrat"}>The will of God is not just a guiding principle; it is our creed. We are unwaveringly devoted to aligning our thoughts, actions, and decisions with the divine will, seeking to fulfill God&apos;s purpose in all that we do.</Text>
                            </Box>
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
        <Listen />
    </Layout>
  )
}

export default Home
