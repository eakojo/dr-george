import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Input, Text, Textarea } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'


const AskDrGeorge: FC = () => {
  return (
    <Box
        bg={'white'}
        py={20}
        px={{ base: 4, '2xl': 36 }}
        pos={"relative"}
    >
       <Text color={"base.blue"} fontWeight={"bold"} fontSize={40} textAlign={"center"}>Get the latest Video Message</Text>
       <Flex direction={"column"} justify={'center'} align={"center"}>
            <Text textAlign={"center"} w={124} mt={12} color={"base.blue"} fontFamily={"Montserrat"}>
                Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.
            </Text>
        </Flex>

        <Flex direction={'column'} gap={6} maxW={'600px'} mx={"auto"}>
          <Input fontFamily={'Montserrat'} placeholder='What is your name' rounded={'none'}  h={14}/>
          <Textarea fontFamily={'Montserrat'} placeholder='What question is on your heart?' rounded={'none'} h={28}></Textarea>
          <CustomButton w={36} mx="auto" bgColor={'base.blue'} color="white" title='Ask now' textSize={16} rounded="none" fontFamily="Montserrat"/>
        </Flex>
        <Box pos={"absolute"} bottom={-20} left={0} w={32} zIndex={5}>
            <Image src='images/pattern-2.png' alt='pattern'/>
        </Box>
    </Box>
  )
}

export default AskDrGeorge
