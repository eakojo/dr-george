import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import {BiArrowBack} from 'react-icons/bi'
import { useRouter } from 'next/router'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
const Footer: FC = () => {
  const router = useRouter()
  return (
    <Box pos={"relative"} zIndex={3}>
    <Grid templateColumns={{base: 'repeat(6, 1fr)' , md: 'repeat(8, 1fr)'}} gap={12} bg={"#262626"} py={20}  px={{ base: 4, '2xl': 36 }}>
      <GridItem colSpan={{base: 6, md: 3}}>
        <Text color={"white"} fontSize={24} fontWeight={600} mb={4} textAlign={{base: "center", md: "left"}}>About Dr. Arthur</Text>
        <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} textAlign={{base: "center", md: "left"}} fontFamily={"montserrat"}>Rev. George Wilfred Arthur is the shepherd and driving force behind George Wilfred Arthur Ministries (G. W. Arthur Ministries). With a profound commitment to the restoration of God&apos;s Word, Rev. George brings a unique blend of passion, wisdom, and love to his ministry.</Text>
      </GridItem>
      <GridItem colSpan={{base: 3, md: 1}}>
        <Text color={"white"} fontSize={24} fontWeight={600} mb={4}>Links</Text>

        <Link href="https://dr-george-gigman2.vercel.app/">
          <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Home</Text>
        </Link>
        <Link href="https://dr-george-gigman2.vercel.app/biography">
          <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Biography</Text>
        </Link>
        <Link href="https://dr-george-gigman2.vercel.app/contact">
          <Text color={"whiteAlpha.600"} fontSize={{base: 12, md: 14}} fontFamily={"montserrat"} mb={3}>Contact</Text>
        </Link>

      </GridItem>
      <GridItem colSpan={{base: 3, md: 1}}>
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
    <Flex justify={{base: "center", md: "space-between"}} pos={"relative"} overflow={'hidden'} bgSize={'cover'} bg="black" py={4}  px={{ base: 4, '2xl': 36 }}>
      <Text color={"white"} fontSize={{base: 10, md: 14}} fontFamily={"montserrat"}>Copyright &copy; G W Arthur Minitries - 2023</Text>
      <Flex gap={4} display={{base: "none", md: 'flex'}}>
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
    </Box>
  )
}

export default Footer
