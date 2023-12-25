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
    <Grid templateColumns={'repeat(2, 1fr)'}>
      <GridItem px={20} py={20} bg={"black"}>
        <Text color={"white"} fontWeight={"bold"} fontSize={24}>Subscribe to monthly newsletter</Text>
        <Text fontFamily={'Montserrat'} mt={4} color={"whiteAlpha.500"} fontSize={16}>Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.</Text>
        <Flex mt={4} gap={3} fontFamily={"Montserrat"}>
          <Input h={14} fontSize={14} bg="white" rounded={"none"} placeholder='Name'/>
          <Input h={14} fontSize={14} bg="white" rounded={"none"} placeholder='Email'/>
          <CustomButton title='Submit' bgColor={"base.gold"} rounded="none" mt={0} fontSize={16} color="black" fontFamily="Garamond" />
        </Flex>
      </GridItem>
      <GridItem px={20} py={20} bg={"base.blue"}>
        <Text color={"white"} fontWeight={"bold"} fontSize={24}>Get the latest truth trend</Text>
        <Text fontFamily={'Montserrat'} mt={4} color={"whiteAlpha.500"} fontSize={16}>Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.</Text>
        <Flex mt={4} gap={3} fontFamily={"Montserrat"}>
          <CustomButton title='Read more' bgColor={"white"} rounded="none" mt={0} fontSize={16} color="black" fontFamily="Garamond" />
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default About
