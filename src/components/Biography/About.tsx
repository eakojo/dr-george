import { FC, useEffect, useState } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Skeleton, Text } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import Link from 'next/link'
import { createClient } from '@/helpers/prismicClient'

const About: FC = () => {
    const client = createClient({})
    const [data, setData] = useState([])
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const currentIndex = 4

    useEffect(() => {
        // Your asynchronous logic here
        const fetchData = async () => {
        const componentData = await client.getAllByType('site_gallery', {
            fetchOptions: {
            cache: 'no-store',
            next: { tags: ['prismic', 'home_hero'] },
            }
        })

        setData(componentData)
        };

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const handlePrevious = () => {
    setIsAnimating(true);
    const imageArr = [...data]
    imageArr.push(imageArr.shift());
    setData(imageArr)
  }

  const handleNext = () => {
    setIsAnimating(true);
    const imageArr = [...data]
    let lastElement = imageArr.pop(); // Remove the last element
    imageArr.unshift(lastElement); 
    setData(imageArr)
  }

  const handleLoaded = () => {
    setIsAnimating(false)
  }

  return (
    <Box py={{base: 12, md: 20}} px={{ base: 4, '2xl': 36 }} pos="relative">
        <Grid templateColumns={{base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)'}} gap={{base: 4, xl: 12}}>
            <GridItem px={{base: 4, lg: 0}} py={20}>
                <Text color={"base.blue"} fontWeight={600} fontSize={28}>Meet Rev. George Wilfred Arthur</Text>
                <Text color={"base.blue"} fontFamily={"Montserrat"} fontSize={14}>Teacher, Apostle, Evangelist, & Speaker</Text>
                <Flex gap={3} mt={3}>
                    <Link href={'https://www.instagram.com/drgwarthur'} target='_'>
                        <Icon fontSize={20} as={FaInstagram} color={"base.blue"} />
                    </Link>
                    <Link href={'https://www.facebook.com/DrGWArthur?mibextid=LQQJ4d'} target='_'>
                        <Icon fontSize={20} as={FaFacebook} color={"base.blue"}/>
                    </Link>
                    <Link href={'https://youtube.com/@DrGWArthur'} target='_'>
                        <Icon fontSize={20} as={FaYoutube} color={"base.blue"} />
                    </Link>
                </Flex>

                <Box mt={12}>
                    <Text fontFamily={"Montserrat"} mb={8}>
                        G.W. Arthur is the shepherd and driving force behind George Wilfred Arthur Ministries (G. W. Arthur Ministries). With a profound commitment to the restoration of God&apos;s Word, G.W. Arthur brings a unique blend of passion, wisdom, and love to his ministry.
                    </Text>
                    <Text fontFamily={"Montserrat"} mb={8}>
                        G.W. Arthur envisions a world where the integrity of God&apos;s Word is fully restored within the body of Christ. His leadership is marked by a deep desire for spiritual renewal and transformation, aiming to create a community where individuals can experience the life-changing power of the Gospel.
                    </Text>
                    <Text fontFamily={"Montserrat"} mb={8}>
                        G.W. Arthur is not just a preacher; he is a messenger of love and power. His teachings reflect the virtues and excellences of Christ, and he tirelessly strives to showcase the marvelous deeds that define the love and power found in Christ&apos;s transformative message.
                    </Text>
                    <Text fontFamily={"Montserrat"} mb={8}>
                        For Rev. George, the will of God is not just a guiding principle; it is the heartbeat of his life and ministry. His unwavering devotion to aligning every aspect of his work with God&apos;s will serves as an inspiration to those who follow his teachings.
                    </Text>
                    <Text fontFamily={"Montserrat"} mb={8}>
                        G.W.  Arthur is a beacon of light for those seeking spiritual guidance, deeper connections with Christ, and a community that shares their values. His leadership is marked by authenticity, humility, and an unshakeable belief in the transformative power of the Gospel.
                    </Text>
                    <Text fontFamily={"Montserrat"} mb={8}>
                        Whether you are a long-time follower or just discovering Rev. George Wilfred Arthur, we invite you to join him on this transformative journey. Explore the richness of God&apos;s Word, experience His love and power, and discover the fulfillment of your divine inheritance in Christ under the ministry of Rev. George Wilfred Arthur.</Text>

                </Box>
            </GridItem>
            <GridItem px={{base: 4, md: 20}} py={{base: 4, md: 20}}  colSpan={1} overflow={"hidden"}>
                <Flex h={"500px"} align={"center"} bg="gray.200" overflow={"hidden"}>
                    {isAnimating ? <Skeleton h={"500px"} w="100%" /> : null}
                    <Box className={`fade-in-out ${isAnimating ? 'fade-out' : ''}`}  style={{ display: isAnimating ? 'none' : 'block' }} >
                        <Image src={data?.[currentIndex]?.data?.image?.url} alt="home" onLoad={handleLoaded}/>
                    </Box>
                </Flex>
                <Box pos={"relative"} overflow={"hidden"} w="100%">
                    
                    <Box h={24} w={(24*5)} bg="gray.100" mt={4}>
                        <Box display={"inline-block"} w={"2000px"} gap={6} h={"100%"}>
                            {data.map(item => (
                                <Box mr={5} display={"inline-block"} key={item.id} w={24} h={"100%"} bgImage={item.data.image.url} bgSize={"cover"}></Box>
                            ))}
                        </Box>
                    </Box>
                    
                    <Flex pos={"absolute"} top={0} left={0} h={"100%"} w={"100%"} align={"center"} justify={"space-between"} zIndex={3}>
                        <Flex align={"center"} justify={"center"} width={24}  h={24} mt={4} bg={"rgba(0,0,0,0.5)"}>
                            <Box pos={'relative'} ml={4} cursor={"pointer"} onClick={() => handlePrevious()}>
                                <Icon as={HiArrowLongLeft}  color={"white"} fontSize={28}/>
                            </Box>
                        </Flex>
                        <Flex align={"center"} justify={"center"} width={24}  h={24} mt={4} bg={"rgba(0,0,0,0.5)"}>
                            <Box mr={4} cursor={"pointer"} onClick={() => handleNext()}>
                                <Icon as={HiArrowLongRight}  color={"white"} fontSize={28} />
                            </Box>
                        </Flex>
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
