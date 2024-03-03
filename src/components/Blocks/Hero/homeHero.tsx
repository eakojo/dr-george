import { useEffect, useRef, useState } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { NextPage } from 'next'
import Link from 'next/link'
import HomeHeroLangText from '@/internationalization/homeHero'
import { getLanguage } from '@/helpers/misc'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HeroDesktop: NextPage = () => {
  const [lang , setLang] = useState('en')
  const text = HomeHeroLangText[lang]
  const defaultLang =  getLanguage()

  useEffect(() => {
      setLang(defaultLang)
  },[defaultLang])

  const HeroSlider = [
    {
      title: text.heroTitle,
      subText: text.subTitle,
      cover: '/images/covers/cover-1.jpg',
      key: 'isActive1'
    },
    // {
    //   title: 'Bless His Family',
    //   subText: 'The blessing is the family is very important',
    //   cover: '/images/covers/cover-2.jpg',
    //   key: "isActive2"
    // }
  ] 

  const coverList = useRef(null)
  const heroTextList = useRef(null)
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false
  })

   useGSAP(() => {
    gsap.to(heroTextList.current.children[0], {
      opacity: 1,
      duration: 0,
    });
 }, { scope: heroTextList }); 

  return (
    <Box
      w="full"
      alignItems={"center"}
      minH={'calc(100vh - 150px)'}
      h={'100vh'}
      bg="base.blue-dark"
      position={"relative"}
      overflow={'hidden'}
    >
      <Flex align={"center"} pos={"absolute"} top={0} left={0} bg={"rgba(2, 24, 33,.7)"} w={'100%'} h="100%" zIndex={3}>
        <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(7, 1fr)'}} gap={12}  px={{ base: 8, '2xl': 36 }}>
          <GridItem colSpan={{base: 2, md: 3,  lg: 5, xl: 3}}>
            <Flex ref={heroTextList} w="100%" flexDirection={"column"} >
              {
              HeroSlider.map(item => (
                <Box key={item.key}>
                  <Text fontSize={{base: 44, md: 52, xl: 64}} textAlign={{base:"left"}} fontWeight={600} color={"white"} lineHeight={1.1}>{item.title}</Text>
                  <Text mt={8} color={"white"} textAlign={{base:"left"}} fontSize={{base: 12, sm: 16}} fontFamily={"Montserrat"}>{item.subText}</Text>
                </Box>
              ))
            }
            </Flex>
            
            <Flex justify={{base: "center", lg: "flex-start"}}>
              <Flex mt={16} color="white" gap={4} fontSize={20}>
                <Link href={'https://www.instagram.com/drgwarthur'} target='_'>
                    <Icon fontSize={20} as={FaInstagram} color={"white"} />
                </Link>
                <Link href={'https://www.facebook.com/DrGWArthur?mibextid=LQQJ4d'} target='_'>
                    <Icon fontSize={20} as={FaFacebook} color={"white"}/>
                </Link>
                <Link href={'https://youtube.com/@DrGWArthur'} target='_'>
                    <Icon fontSize={20} as={FaYoutube} color={"white"} />
                </Link>
              </Flex>
            </Flex>

            <Flex mt={24} justify={{base: "center", lg: "flex-start"}}>
              <Flex align={"center"} gap={2}>
                {HeroSlider.map((item, i) => (
                  <Box key={item.title} width={state[item.key] ? 3: 2} h={state[item.key] ? 3:2} rounded={"full"} bg={state[item.key] ? "whiteAlpha.800":"whiteAlpha.500"}></Box>
                  )
                )}
              </Flex>
            </Flex>
          </GridItem>

          <GridItem colSpan={{base: 0,  lg: 2, xl: 3}} display={{base: 'none', xl: 'block'}}>
          </GridItem>

          <GridItem colSpan={{base: 0, lg: 1}} display={{base: 'none', lg: 'block'}}>
            <Flex w="100%" justify={"flex-end"} align={"center"} h="50vh">
              {/* <Icon as={HiArrowLongRight} color="gray.300" fontSize={48}/> */}
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
        {HeroSlider.map((item) => (
          <Box key={item.title} pos={"absolute"} w="100%" h="100%" bgImage={item.cover} bgPos={"center"} bgSize={"cover"} />
          )
        )}
    </Box>
  )
}

export default HeroDesktop
