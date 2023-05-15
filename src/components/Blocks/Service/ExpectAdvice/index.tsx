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
        <Grid templateColumns={"repeat(7, 1fr)"} gap={16} pt={24} >
             <Box as={GridItem} colSpan={4}>
               <Flex w="100%" h="100%" align={'center'} justify={'center'}>
                <Box>
                  <Box
                    color="black"
                    fontSize={72}
                    fontWeight={600}
                    lineHeight={1.3}
                  >
                    <Text>Want Expect</Text>
                    <Text>Advise ?</Text>
                  </Box>
                  <Button mt={12} py={12} px={12} rounded={0} fontWeight={500} bg="black" _hover={{bg: "black"}} color="base.yellow" fontSize={24}>
                      Contact Us
                      <Icon ml={2} fontSize={24} as={BiArrowBack} {...{ transform: 'rotate(180deg)' }}/>
                    </Button>
                </Box>
              </Flex>
            </Box>
            <Box as={GridItem} colSpan={3}>
              <Image src="/images/Services C.png" alt="strategy image" w={"100%"}/>
            </Box>
        </Grid>
    </Box>
  )
}


export default ExpectAdvice
