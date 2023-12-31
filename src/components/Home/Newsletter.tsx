import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Image, Input, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import CustomButton from '../Atom/Button'

interface IProp {
  bgStyle?: any
}

const About: FC<IProp> = ({
  bgStyle,
}) => {
  return (
    <Grid templateColumns={{base: 'repeat(1, 1fr)' ,  lg:'repeat(2, 1fr)'}}>
      <GridItem px={{base: 12, md: 20}} py={20} bg={"black"}>
        <Text color={"white"} fontWeight={"bold"} fontSize={24}>Want to follow the ministry of Dr. George closely?</Text>
        <Text fontFamily={'Montserrat'} mt={4} color={"white"} fontSize={{base: 12, sm: 14, md: 16}}>Subscribe to the newsletter for messages, audio, videos, and updates on his ministry right in your inbox. </Text>
        <Flex mt={4} gap={3} fontFamily={"Montserrat"} direction={{base: "column", md: "row"}}>
          <Input h={14} fontSize={14} bg="white" rounded={"none"} placeholder='Name'/>
          <Input h={14} fontSize={14} bg="white" rounded={"none"} placeholder='Email'/>
          <CustomButton title='Submit' bgColor={"base.gold"} rounded="none" mt={{base: 2, md: 0}} fontSize={16} color="black" fontFamily="Garamond" />
        </Flex>
      </GridItem>
      <GridItem px={{base: 12, md: 20}} py={20} bg={"base.blue"}>
        <Text color={"white"} fontWeight={"bold"} fontSize={24}>See What God Has Been Up to in the Ministry</Text>
        <Text fontFamily={'Montserrat'} mt={4} color={"white"} fontSize={{base: 12, sm: 14, md: 16}}>Discover stories of transformation, powerful testimonies, and awe-inspiring events that highlight the remarkable work of God. Get ready to be inspired by the incredible journey we&apos;re on!</Text>
        <Flex mt={4} gap={3} fontFamily={"Montserrat"}>
          <CustomButton title='Read more' bgColor={"white"} rounded="none" mt={0} fontSize={16} color="black" fontFamily="Garamond" />
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default About
