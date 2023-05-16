import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import { Box, Button, Flex, Grid, GridItem, Icon, Image, Input, Text, Textarea } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'


const Contact: NextPage = () => {
  return (
    <Layout>
        <Grid templateColumns={"repeat(9, 1fr)"}>
            <Box as={GridItem} colSpan={3}>
                <Image src="/images/contact a.png" alt="strategy image" minW="90%"/>
            </Box>
            <Box as={GridItem} colSpan={6} py={16} px={12}  color="black">
                <Box fontSize={60} color="black" lineHeight={1.2}>
                    <Text>You have a project ?</Text>
                    <Text>Contact us</Text>
                </Box>

                <Grid mt={8} templateColumns={"repeat(2, 1fr)"} gap={24}>
                    <Box as={GridItem}>
                        <Text fontSize={24}>First Name*</Text>
                        <Input 
                            rounded={0}
                            placeholder='Your first name'
                            borderTopWidth={0} 
                            borderRightWidth={0} 
                            borderLeftWidth={0} 
                            borderBottomWidth={1} 
                            borderColor={"black"} 
                        />
                    </Box>
                    <Box as={GridItem}>
                        <Text fontSize={24}>Last Name*</Text>
                        <Input 
                            rounded={0}
                            placeholder='Your last name'
                            borderTopWidth={0} 
                            borderRightWidth={0} 
                            borderLeftWidth={0} 
                            borderBottomWidth={1} 
                            borderColor={"black"} 
                        />
                    </Box>
                </Grid>
                <Box mt={8}>
                    <Text fontSize={24}>E-mail*</Text>
                    <Input 
                        rounded={0}
                        placeholder='Your email address'
                        borderTopWidth={0} 
                        borderRightWidth={0} 
                        borderLeftWidth={0} 
                        borderBottomWidth={1} 
                        borderColor={"black"} 
                    />
                </Box>
                <Box mt={8}>
                    <Text fontSize={24}>Phone*</Text>
                    <Input 
                        rounded={0}
                        placeholder='024X XXX XXX'
                        borderTopWidth={0} 
                        borderRightWidth={0} 
                        borderLeftWidth={0} 
                        borderBottomWidth={1} 
                        borderColor={"black"} 
                    />
                </Box>
                <Box mt={8}>
                    <Text fontSize={24}>Your Message*</Text>
                    <Textarea w={"full"} h={32} borderBottomWidth={1} 
                        borderColor={"black"} rounded={0}></Textarea>
                </Box>
                <Flex justifyContent={"space-between"} align={"center"}>
                    <Button mt={12} py={12} px={12} rounded={0} fontWeight={500} bg="black" _hover={{bg: "black"}} color="base.yellow" fontSize={24}>
                    Send
                    <Icon ml={2} fontSize={24} as={BiArrowBack} {...{ transform: 'rotate(180deg)' }}/>
                  </Button>

                  <Text fontSize={20}>*Required fields</Text>
                </Flex>
            </Box>
        </Grid>
    </Layout>
  )
}

export default Contact
