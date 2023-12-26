import { FC } from 'react'
import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'
import { TbPlayerPlayFilled } from 'react-icons/tb'
import { HiArrowLongRight } from 'react-icons/hi2'


const Message: FC = () => {
  return (
    <Box
        py={20}
        px={{ base: 4, '2xl': 36 }}
    >
        <Text color={"base.blue"} fontWeight={"bold"} fontSize={24} textAlign={"center"}>Get the latest Video Message</Text>
        <Flex direction={"column"} justify={'center'} align={"center"}>
            <Text fontSize={{base: 12, sm: 14, md: 16}} textAlign={"center"} w={{base: "auto", md: 124}} mt={{base: 5, md: 12}} color={"base.blue"} fontFamily={"Montserrat"}>
                Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.
            </Text>
            <CustomButton mt={8} w={48} title='View More' bgColor={"base.gold"} rounded="none" fontSize={16} color="black" fontFamily="Garamond" />
        </Flex>

        <Flex justify={"center"} pos={"relative"}>
            <Box pos={"absolute"} left={{base: 0, md: 48}} top={{base: 0, md: -20}} w={{base: 28, md: 32}}>
                <Image src="images/pattern-1.png" alt="pattern group"  />
            </Box>
            <Box bg={"gray.300"} h={{base: 'auto', md: 96}} w={{base: 'auto', md: 128}} mt={12} pos={"relative"} overflow={'hidden'}>
                <Image src="images/sddefault.jpg" alt="video background" w="100%" />
                <Flex align="center" justify={"center"} overflow={"hidden"} pos={"absolute"} left={0} top={0} zIndex={2} w={"100%"} h={"100%"}>
                    <Flex w={16} h={16} bg="whiteAlpha.800" rounded={"full"} align={"center"} justify={"center"} cursor={"pointer"}>
                        <Icon as={TbPlayerPlayFilled} boxSize={8} />
                    </Flex>
                </Flex>
            </Box>
            <Box pos={"absolute"} right={12} top={-20} display={{base: "none", md: "block"}}>
                <Icon as={HiArrowLongRight} color="base.blue" fontSize={40}/>
            </Box>
        </Flex>

    </Box>
  )
}

export default Message
