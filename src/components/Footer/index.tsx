import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import {BiArrowBack} from 'react-icons/bi'
import { useRouter } from 'next/router'
const Footer: FC = () => {
  const router = useRouter()
  return (
    <>
    <Box pos={"relative"} overflow={'hidden'} bgImage={'/images/footer-bg.png'}>
       <Grid 
          w="100%"
          minH={122}
          h="100%"
          templateColumns={"repeat(20, 1fr)"} 
          fontSize={{base: 32, md: 48}}
          zIndex={2}>
          <Box as={GridItem} display={{base: 'none', sm: "block"}} colSpan={{sm: 6}} px={{ base: 4, '2xl': 28 }} py={24}>
            <Text color="base.yellow">Wibexly</Text>
          </Box>

          <Box as={GridItem} colSpan={{base: 20, sm:14}} bg="blackAlpha.500"  px={{ base: 4, '2xl': 36 }} py={{base: 6, lg: 24}}>
            <Text display={{base: 'block', sm: "none"}} color="base.yellow">Wibexly</Text>
            <Text color="white" fontSize={{base: 20, sm: 32, lg:44}}>Sign up with your email address to receive  news and updates</Text>
            <Box cursor={"pointer"} 
              color="base.yellow" 
              display={"flex"} 
              alignItems={"center"} 
              mt={{base: 6, sm: 10, lg: 24}} p={4} w={{base: 48, lg: 52}} h={{base: 16, lg:20}} 
              borderWidth={2} 
              borderColor={"base.yellow"}
              onClick={() => router.push('/contact')}
            >
              <Text fontSize={{base: 20, lg: 24}} mr={4}>Contact Us</Text>
              <Icon fontSize={24} as={BiArrowBack} {...{ transform: 'rotate(180deg)' }}/>
            </Box>
            <Flex mt={12} w={{base: "100%", lg: "60%"}} justifyContent={"space-between"}>
                <Box>
                  <Text fontSize={{base: 20, lg: 24}} color={"base.yellow"}>Call Us At:</Text>
                  <Text fontSize={{base: 20, lg: 24}} color={"white"}>+233540125117</Text>
                </Box>

                <Box>
                  <Text fontSize={{base: 20, lg: 24}} color={"base.yellow"}>E-mail Us @</Text>
                  <Text fontSize={{base: 20, lg: 24}} color={"white"}>admin@wibexly.com</Text>
                </Box>  
            </Flex>
            <Box mt={4}>
              <Text fontSize={{base: 20, lg: 24}} color={"base.yellow"}>Location</Text>
              <Text fontSize={{base: 20, lg: 24}} color={"white"}>4 Nyadji Cr Asylum Down Accra, Ghana </Text>
            </Box>  
          </Box>
      </Grid>
    </Box>
     <Box 
        fontSize={24} 
        fontWeight={"thin"} 
        color="white" 
        py={12} bg="base.black" 
        display={"flex"} 
        justifyContent={"space-between"} 
        px={{ base: 4, '2xl': 28 }}
      >
        <Text>&copy;wibexly </Text>

        <Box display={{base: "block", md: "flex"}} gridColumnGap={6} fontSize={20}>
          <Text>Our Partners</Text>
          <Text>Legal Notice</Text>
          <Text>FAQs</Text>
          <Text>Contact</Text>
        </Box>
     </Box>
    </>
  )
}

export default Footer
