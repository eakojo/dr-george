import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import {BiArrowBack} from 'react-icons/bi'
import { useRouter } from 'next/router'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
const Footer: FC = () => {
  const router = useRouter()
  return (
    <Box pos={"relative"} zIndex={3}>
    <Grid templateColumns={{base: 'repeat(6, 1fr)' , md: 'repeat(8, 1fr)'}} gap={12} bg={"#262626"} py={20}  px={{ base: 4, '2xl': 36 }}>
      <GridItem colSpan={{base: 6, md: 3}}>
        <Text color={"white"} fontSize={24} fontWeight={600} mb={4} textAlign={{base: "center", md: "left"}}>About Dr. Arthur</Text>
        <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} textAlign={{base: "center", md: "left"}} fontFamily={"montserrat"}>George Wilfred Arthur Ministries (G. W. Arthur ministries) is an effective ministry with the vision of Restoring the integrity of the word God in its full glory and life in the body of Christ. </Text>
      </GridItem>
      <GridItem colSpan={{base: 3, md: 2}}>
        <Text color={"white"} fontSize={24} fontWeight={600} mb={4}>Links</Text>

        <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Home</Text>
        <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Biography</Text>
        <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Contact</Text>

      </GridItem>
      <GridItem colSpan={{base: 3, md: 2}}>
        <Text color={"white"} fontSize={24} fontWeight={600} mb={4}>External Links</Text>

        <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Youtube</Text>
        <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Google Podcast</Text>
        <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Apple Podcast</Text>
        <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Spotify</Text>
      </GridItem>
      <GridItem colSpan={{base: 6, md: 3}}>
        <Text color={"white"} fontSize={24} fontWeight={600} mb={4}>From The Gallery</Text>

        <Grid templateColumns={'repeat(3, 1fr)'} rowGap={6} >
          <Box>
             <Image src="images/gwarthur1.png" />
          </Box>
           <Box>
             <Image src="images/gwarthur1.png" />
          </Box>
           <Box>
             <Image src="images/gwarthur1.png" />
          </Box>
           <Box>
             <Image src="images/gwarthur1.png" />
          </Box>
           <Box>
             <Image src="images/gwarthur1.png" />
          </Box>
           <Box>
             <Image src="images/gwarthur1.png" />
          </Box>
        </Grid>
      </GridItem>
    </Grid>
    <Flex justify="space-between" pos={"relative"} overflow={'hidden'} bgSize={'cover'} bg="black" py={4}  px={{ base: 4, '2xl': 36 }}>
      <Text color={"white"} fontSize={14} fontFamily={"montserrat"}>Copyright &copy; G W Arthur Minitries - 2023</Text>
      <Flex gap={4}>
        <Icon as={FaFacebook} color={"white"}/>
        <Icon as={FaInstagram} color={"white"} />
        <Icon as={FaTwitter} color={"white"} />
      </Flex>
    </Flex>
    </Box>
  )
}

export default Footer
