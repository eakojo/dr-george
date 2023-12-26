import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Input, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import CustomButton from '../Atom/Button'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'

interface IProp {
  bgStyle?: any
}

const Info: FC<IProp> = ({
  bgStyle,
}) => {
  return (
    <Box py={{base: 2, md: 14}} px={{ base: 4, '2xl': 36 }} pos="relative">
        <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={4} color={"base.blue"}>
            <GridItem px={{base: 5, md: 20}} py={{base: 8, md: 20}}>
                <Text mb={4} fontSize={24} fontWeight={600} color={"base.blue"} textAlign={"center"}>Call Me</Text>
                <Text textAlign={"center"} fontFamily={"Montserrat"} fontSize={{base: 14, md: 16}}>+233 59 909 874 / +233 20 983 9038</Text>
            </GridItem>
            <GridItem  px={{base: 5, md: 20}} py={{base: 8, md: 20}}>
                <Text mb={4} textAlign={"center"} fontSize={24} fontWeight={600} color={"base.blue"}>Email Me</Text>
                <Text textAlign={"center"} fontFamily={"Montserrat"} fontSize={{base: 14, md: 16}}>engage@gwarthur.com /  info@gwarthur.com</Text>
            </GridItem>
            <GridItem  px={{base: 5, md: 20}} py={{base: 8, md: 20}}>
                <Text mb={4} textAlign={"center"} fontSize={24} fontWeight={600} color={"base.blue"}>Find Me</Text>
                <Text textAlign={"center"} fontFamily={"Montserrat"} fontSize={{base: 14, md: 16}}>Arch Square. 45 Lumumbu Ave, Cantonments, Accra, Ghana</Text>
            </GridItem>
        </Grid>
    </Box>
  )
}

export default Info
