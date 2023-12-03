import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { TbPlayerPlay } from 'react-icons/tb'


const Ministry: FC = () => {
  return (
    <Box
        w="full"
        py={12}
        px={{ base: 4, '2xl': 28 }}
    >
        <Text fontSize={40} textAlign={"left"} color={"base.gold"}>Reach out to Dr. George</Text>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={12} mt={6}>
            <Box as={GridItem}>
                <Box w={"100%"} bg="gray.400" h={'500px'} rounded={"lg"} overflow={"hidden"} pos={"relative"}>

                    <Flex p={6} h={24} w="100%" bg={"base.blue"} align={"center"} pos={"absolute"} bottom={0}>
                        <Text fontFamily={"Montserrat"} color={"white"} w={"100%"}>You can ask Dr. George any question anything you need to know about the word of God</Text>
                        <Flex h={12} fontFamily={"Montserrat"} align={"center"} justify={"center"} w="200px" bg={"white"} fontWeight={600}>Ask Dr. George</Flex>
                    </Flex>    
                </Box>
            </Box>

            <Box as={GridItem}>
                <Box w={"100%"} bg="gray.400" h={'500px'} rounded={"lg"} overflow={"hidden"} pos={"relative"}>

                    <Flex p={6} h={24} w="100%" bg={"base.blue"} align={"center"} pos={"absolute"} bottom={0}>
                        <Text fontFamily={"Montserrat"} color={"white"} w={"100%"}>Need a prayer request. Just send Dr. George your request.</Text>
                        <Flex h={12} fontFamily={"Montserrat"} align={"center"} justify={"center"} w="200px" bg={"white"} fontWeight={600}>Prayer Request</Flex>
                    </Flex>    
                </Box>
            </Box>
        </Grid>
    </Box>
  )
}

export default Ministry
