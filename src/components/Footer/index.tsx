import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import {BiArrowBack} from 'react-icons/bi'
import { useRouter } from 'next/router'
const Footer: FC = () => {
  const router = useRouter()
  return (
    <>
    <Box pos={"relative"}>
      <Image src="/images/footer-bg.png" alt="wibexly footer bg"  w="100%"/>
       <Grid 
          w="100%"
          minH={122}
          h="100%"
          templateColumns={"repeat(20, 1fr)"} 
          pos={"absolute"} top={0} 
          fontSize={48}
          zIndex={2}>
          <Box as={GridItem} colSpan={6} px={{ base: 4, '2xl': 28 }} py={24}>
            <Text color="base.yellow">Wibexly</Text>
          </Box>

          <Box as={GridItem} colSpan={14} bg="blackAlpha.500"  px={{ base: 4, '2xl': 36 }} py={24}>
            <Text color="white" fontSize={44}>Sign up with your email address to receive  news and updates</Text>
            <Box cursor={"pointer"} 
              color="base.yellow" 
              display={"flex"} 
              alignItems={"center"} 
              mt={24} p={4} w={52} h={20} 
              borderWidth={2} 
              borderColor={"base.yellow"}
              onClick={() => router.push('/contact')}
            >
              <Text fontSize={24} mr={4}>Contact Us</Text>
              <Icon fontSize={24} as={BiArrowBack} {...{ transform: 'rotate(180deg)' }}/>
            </Box>
            <Flex mt={12} w={"60%"} justifyContent={"space-between"}>
                <Box>
                  <Text fontSize={24} color={"base.yellow"}>Call Us At:</Text>
                  <Text fontSize={24} color={"white"}>+233540125117</Text>
                </Box>

                <Box>
                  <Text fontSize={24} color={"base.yellow"}>E-mail Us @</Text>
                  <Text fontSize={24} color={"white"}>admin@wibexly.com</Text>
                </Box>  
            </Flex>
            <Box mt={4}>
              <Text fontSize={24} color={"base.yellow"}>Location</Text>
              <Text fontSize={24} color={"white"}>4 Nyadji Cr Asylum Down Accra, Ghana </Text>
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

        <Box display={"flex"} gridColumnGap={6} fontSize={20}>
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
