import { FC } from 'react'
import { Box, Grid, GridItem, Text, Flex, Image, As } from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import SocialBox from '@/components/Atom/SocialBox'

const Footer: FC = () => {
  return (
    <>
    <Grid templateColumns={"repeat(20, 1fr)"} bg="gray.100" h={122}>
      <Box as={GridItem} ></Box>
    </Grid>
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
