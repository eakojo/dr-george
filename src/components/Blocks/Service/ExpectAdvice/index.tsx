import { FC } from 'react'
import { Box, Button, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'
const ExpectAdvice: FC = () => {
  return (
    <Box
      w="full"
      bgSize="cover"
      bg="base.yellow"
      alignItems={"center"}
      position={"relative"}
      px={{ base: 4, '2xl': 28 }} 
    >
        <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(7, 1fr)"}} gap={16} pt={24} >
             <Box as={GridItem} colSpan={4}>
               <Flex w="100%" h="100%" align={'center'} justify={'center'} pb={8}>
                <Box>
                  <Box
                    color="black"
                    fontSize={{base: 48, md: 72}}
                    fontWeight={600}
                    lineHeight={1.3}
                  >
                    <Text>Want Expect</Text>
                    <Text>Advise ?</Text>
                  </Box>
                  <Flex mt={12} justify={"center"} alignItems={"center"} w={72} h={32} >
                    <Button h={20} py={12} px={12} rounded={0} fontWeight={500} bg="black" _hover={{bg: "black"}} color="base.yellow" fontSize={24} className='heartbeat'>
                      Contact Us
                      <Icon ml={2} fontSize={24} as={BiArrowBack} {...{ transform: 'rotate(180deg)' }}/>
                    </Button>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box as={GridItem} colSpan={3} display={{base: 'none', md: 'block'}}>
              <Image src="/images/Services C.png" alt="strategy image" w={"100%"}/>
            </Box>
        </Grid>
    </Box>
  )
}


export default ExpectAdvice
