import {useState} from 'react'
import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import { Box, Button, Flex, Grid, GridItem, Icon, Image, Input, Text, Textarea } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'


const Contact: NextPage = () => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })

    async function handleSubmit() {
        try {
            const response = await fetch('/api/contact', {
                method: 'post',
                body: JSON.stringify(contact)
            });
            if (!response.ok) {
                throw new Error(`Invalid response: ${response.status}`);
            }
            alert('Thanks for contacting us, we will get back to you soon!');
        } catch (err) {
            console.error(err);
            alert("We can't submit the form, try again later?");
        }
    }

    return (
    <Layout>
        <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(9, 1fr)"}}>
            <Box as={GridItem} colSpan={3} display={{base: 'none', md: 'block'}}>
                <Image src="/images/contact a.png" alt="strategy image" minW="90%"/>
            </Box>
            <Box as={GridItem} colSpan={6} py={16} px={12}  color="black">
                <Box fontSize={{base: 48, md:60}} color="black" lineHeight={1.2}>
                    <Text>You have a project ?</Text>
                    <Text>Contact us</Text>
                </Box>

                <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}} columnGap={24}>
                    <Box as={GridItem} mt={8}>
                        <Text fontSize={24}>First Name*</Text>
                        <Input 
                            rounded={0}
                            placeholder='Your first name'
                            borderTopWidth={0} 
                            borderRightWidth={0} 
                            borderLeftWidth={0} 
                            borderBottomWidth={1} 
                            borderColor={"black"} 
                            value={contact.firstName}
                            fontSize={20}
                            onChange={(e) => {
                                setContact(prev => ({...prev, firstName: (e.target as unknown as {value: string}).value}))
                            }}
                        />
                    </Box>
                    <Box as={GridItem} mt={8}>
                        <Text fontSize={24}>Last Name*</Text>
                        <Input 
                            rounded={0}
                            placeholder='Your last name'
                            borderTopWidth={0} 
                            borderRightWidth={0} 
                            borderLeftWidth={0} 
                            borderBottomWidth={1} 
                            borderColor={"black"} 
                            value={contact.lastName}
                            fontSize={20}
                            onChange={(e) => {
                                setContact(prev => ({...prev, lastName: (e.target as unknown as {value: string}).value}))
                            }}
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
                        value={contact.email}
                        fontSize={20}
                        onChange={(e) => {
                            setContact(prev => ({...prev, email: (e.target as unknown as {value: string}).value}))
                        }}
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
                        value={contact.phone}
                        fontSize={20}
                        onChange={(e) => {
                            setContact(prev => ({...prev, phone: (e.target as unknown as {value: string}).value}))
                        }}
                    />
                </Box>
                <Box mt={8}>
                    <Text fontSize={24}>Your Message*</Text>
                    <Textarea w={"full"} h={32} borderBottomWidth={1} 
                        onChange={(e) => {
                            setContact(prev => ({...prev, message: (e.target as unknown as {value: string}).value}))
                        }}
                        fontSize={20}
                        borderColor={"black"} rounded={0}>{contact.message}</Textarea>
                </Box>
                <Flex justifyContent={"space-between"} align={"center"}>
                    <Button 
                            mt={12} py={12} px={12} 
                            rounded={0} fontWeight={500} 
                            bg="black" _hover={{bg: "black"}} 
                            color="base.yellow" fontSize={24}
                            onClick={() => handleSubmit()}
                        >
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
