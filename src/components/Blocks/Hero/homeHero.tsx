import { useEffect, useRef, useState } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { NextPage } from 'next'
import Link from 'next/link'
import HomeHeroLangText from '@/internationalization/homeHero'
import { getLanguage } from '@/helpers/misc'
import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'

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
  //   {
  //     title: 'Bless His Family',
  //     subText: 'The blessing is the family is very important',
  //     cover: '/images/covers/cover-2.jpg',
  //     key: "isActive2"
  //   },
  //   {
  //     title: 'Bless Family',
  //     subText: 'The blessing is the family is very important',
  //     cover: '/images/covers/cover-3.jpg',
  //     key: "isActive2"
  //   },
  //   {
  //   title: 'Family',
  //   subText: 'The blessing is the family is very important',
  //   cover: '/images/covers/cover-4.jpg',
  //   key: "isActive2"
  // }
  ] 

  const coverList = useRef(null)
  const heroTextList = useRef(null)
  const [slides, setSlides] = useState([])

  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

  function showSlide(index) {
    if(slides.length){
      slides.forEach((slide, i) => {
        console.log('Slide ',slide)
          gsap.to(slide, {
              x: (i === index) ? 0 : '-25%',
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              // onComplete: () => {
              //    // Ensure only the target slide is visible
              //   slide.style.display = i === index ? 'block' : 'none';
              // }
          });
      });

      // Show the current slide
      slides[index].style.display = 'block';

      // Animate the slide in
      gsap.from(slides[index], {
        x: '100%', // Start from the right
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        // onStart: () => {
        //     slides[index].style.display = 'block'; // Ensure the target slide is visible
        // }
      });
    }
  }


// useEffect(() => {
//   const sldx = sliderRef.current?.children ? Array.from(sliderRef.current?.children) as HTMLElement[] : [];
//   setSlides(sldx)
//   showSlide(currentSlide);
// // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [sliderRef])

const handleSlide = (index) => {
  showSlide(index);
  setCurrentSlide(index)
}

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
        <Box px={36} mt={40}>
            <Box w="100%">
              <Flex ref={heroTextList} flexDirection={"row"}>
                  {
                  HeroSlider.map(item => (
                    <Box key={item.key} w={600}>
                      <Text fontSize={{base: 44, md: 52, xl: 64}} textAlign={{base:"left"}} fontWeight={600} color={"white"} lineHeight={1.1}>{item.title}</Text>
                      <Text mt={8} color={"white"} textAlign={{base:"left"}} fontSize={{base: 12, sm: 16}} fontFamily={"Montserrat"}>{item.subText}</Text>
                    </Box>
                  ))
                }
              </Flex>
            </Box>
            <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(7, 1fr)'}} gap={12}>
              <GridItem colSpan={{base: 2, md: 3,  lg: 5, xl: 3}}>
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
                  {/* <Flex align={"center"} gap={2}>
                    {HeroSlider.map((item, i) => (
                      <Box 
                        key={item.title} 
                        width={currentSlide === i ? 3: 2} 
                        h={currentSlide === i ? 3:2} 
                        rounded={"full"} 
                        bg={currentSlide === i ? "whiteAlpha.800":"whiteAlpha.500"}
                        onClick={() => handleSlide(i)}
                        cursor={"pointer"}
                      >

                      </Box>
                      )
                    )}
                  </Flex> */}
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
        </Box>
      </Flex>
      <Flex
        ref={sliderRef}
        id='slider' style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}>
        {HeroSlider.map((item) => (
          <Box key={item.key}  ref={coverList} w="100%">
            <Box 
              pos={"absolute"} 
              w="100%" 
              h="100%" 
              bgImage={item.cover} 
              bgPos={"center"} 
              bgSize={"cover"} 
            />
          </Box>
          )
        )}
      </Flex>
    </Box>
  )
}

export default HeroDesktop
