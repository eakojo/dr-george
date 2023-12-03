import { FC } from 'react'
import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { TbPlayerPlay } from 'react-icons/tb'


const Message: FC = () => {
  return (
    <Flex
        w="full"
        minH={'calc(100vh - 250px)'}
        py={12}
        justify={'center'}
        px={{ base: 4, '2xl': 28 }}
    >
        <Box w={132} h={108} bg="base.gold" position={"relative"} rounded={"lg"} overflow={"hidden"}>
            <Box position={"absolute"} h="100%" top={0} zIndex={2} > 
            </Box>
            <Flex 
                position={"absolute"} 
                zIndex={5} bottom={0} 
                left={0} w="100%" h={24} 
                bg={"linear-gradient(to bottom, rgba(16, 32, 51, 0) 0%, rgba(16, 32, 51, 0.47) 60.55%, #102033 99.5%)"}>
                <Box w="100%">
                    <Flex w={"100%"} justify={"center"}>
                        <Flex align="center" justify={"center"} rounded={"full"} w={20} h={20} bg={"white"} position={"relative"} top={-4} mt={-8}>
                            <Icon as={TbPlayerPlay} boxSize={10} color={"base.gold"} />
                        </Flex>
                    </Flex>
                    <Text fontWeight={700} fontSize={24} textAlign={"center"} color={"white"} mb={3} fontFamily={"montserrat"}>Latest Message From Dr. George</Text>
                </Box>
            </Flex>
        </Box>
    </Flex>
  )
}

export default Message
