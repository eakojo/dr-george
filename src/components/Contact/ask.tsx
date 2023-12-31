import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Input, Text, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import CustomButton from '../Atom/Button'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'

interface IProp {
  bgStyle?: any
}

const Ask: FC<IProp> = ({
  bgStyle,
}) => {
  return (
    <Box
        bg={'rgba(238, 167, 44, 0.22)'}
        py={20}
        px={{ base: 4, '2xl': 36 }}
        pos={"relative"}
    >
       <Text color={"base.blue"} fontWeight={"bold"} fontSize={{base: 24, md: 40}} textAlign={"center"}>Ask Dr. George</Text>
       <Flex direction={"column"} justify={'center'} align={"center"}>
            <Text fontSize={{base: 12, md: 16}} textAlign={"center"} w={{base: 'auto', md: 124}} mt={{base: 4, md: 12}} color={"base.blue"} fontFamily={"Montserrat"}>
              We&apos;ve Got the Answers! Fire away using the form below. Whether it&apos;s a prayer request or just a friendly shout-out, we&apos;re here for you! Your connection is what makes the journey exciting.
            </Text>
        </Flex>

        <Flex direction={'column'} gap={6} maxW={'600px'} mx={"auto"} mt={12}>
          <Input fontSize={{base: 12, md: 16}} fontFamily={'Montserrat'} placeholder='What is your name' rounded={'none'}  h={14} border={'1px solid gray'}/>
          <Textarea fontSize={{base: 12, md: 16}} fontFamily={'Montserrat'} placeholder='What question is on your heart?' rounded={'none'} h={28}  border={'1px solid gray'}></Textarea>
          <CustomButton w={36} mx="auto" bgColor={'base.blue'} color="white" title='Ask now' textSize={16} rounded="none" fontFamily="Montserrat"/>
        </Flex>
        <Box pos={"absolute"} bottom={{base: -16, md: -20}} left={0} w={{base: 24, md: 32}} zIndex={5}>
            <Image src='images/pattern-2.png' alt='pattern'/>
        </Box>
    </Box>
  )
}

export default Ask
