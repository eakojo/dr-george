import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import Listen from '@/components/Home/Listen'
import PageHero from '@/components/Blocks/Hero/pageHero'
import About from '@/components/Biography/About'
import Info from '@/components/Contact/info'
import Ask from '@/components/Contact/ask'
import { Box, Flex, Grid, GridItem, Icon, Image, Input, Text, Textarea } from '@chakra-ui/react'
import { TbPlayerPlayFilled } from 'react-icons/tb'
import CustomButton from '@/components/Atom/Button'


const Home: NextPage = () => {
  return (
    <Layout>
        <PageHero title='Partner With Us' />
         <Box py={20} px={{ base: 4, '2xl': 36 }} pos="relative">
            <Grid templateColumns={'repeat(2, 1fr)'} gap={5}>
                <GridItem px={20} py={20}>
                    <Text mb={12} fontFamily={"Montserrat"}>Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.</Text>
                    <Box bg={"gray.300"} h={72} mt={12} pos={"relative"} overflow={'hidden'}>
                        <Image  src="images/sddefault.jpg" alt="video background" />
                        <Flex align="center" justify={"center"} overflow={"hidden"} pos={"absolute"} left={0} top={0} zIndex={2} w={"100%"} h={"100%"}>
                            <Flex w={16} h={16} bg="whiteAlpha.800" rounded={"full"} align={"center"} justify={"center"} cursor={"pointer"}>
                                <Icon as={TbPlayerPlayFilled} boxSize={8} />
                            </Flex>
                        </Flex>
                    </Box>
                </GridItem>
                <GridItem px={20} py={20}>
                    <Text fontWeight={600} fontSize={24}>Fill the Form to become a partner</Text>

                    <Flex direction={'column'} gap={6} maxW={'600px'} mx={"auto"}>
                        <Input fontFamily={'Montserrat'} placeholder="What's your name?" rounded={'none'}  h={14}/>
                        <Input fontFamily={'Montserrat'} placeholder="What's your email?" rounded={'none'}  h={14}/>
                        <Input fontFamily={'Montserrat'} placeholder="What's your mobile number?" rounded={'none'}  h={14}/>
                        <Textarea fontFamily={'Montserrat'} placeholder='Have any additional message?' rounded={'none'} h={28}></Textarea>
                        <CustomButton w={36} mx="auto" bgColor={'base.blue'} color="white" title='Ask now' textSize={16} rounded="none" fontFamily="Montserrat"/>
                    </Flex>
                </GridItem>
            </Grid>
            <Box pos={"absolute"} bottom={-20} left={0} w={32} zIndex={5}>
                <Image src='images/pattern-2.png' alt='pattern'/>
            </Box>
        </Box>
        <Listen />
    </Layout>
  )
}

export default Home
