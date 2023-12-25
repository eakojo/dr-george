import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'


const Ministry: FC = () => {
  return (
    <Box
        bg={'rgba(238, 167, 44, 0.22)'}
        py={4}
        px={{ base: 4, '2xl': 36 }}
    >
        <Grid templateColumns={'repeat(7, 1fr)'} gap={12}>
            <GridItem colSpan={4}>
                <Box w={"100%"} p={40}>
                    <Image src="images/phone_mockup.png" alt="phone mockup" />
                </Box>
            </GridItem>
            <GridItem colSpan={3}>
                <Flex direction={"column"} justify={"center"} lineHeight={1.2} h="100%">
                    <Text color={"base.blue"} fontWeight={"bold"} fontSize={40}>Follow Dr. George on <br/> social media</Text>
                    <Text mt={8} color={"base.blue"} fontFamily={"Montserrat"}>
                        Raising and equipping people who will come into the consciousness and the revelation of Christ and his finished work through the preaching and teaching of the gospel.
                    </Text>
                    <Flex mt={6} gap={10}>
                        <Box boxSize={12}>
                            <Image src={'images/fb.png'} />
                        </Box>
                        <Box boxSize={12}>
                            <Image src={'images/ig.png'} />
                        </Box>
                        <Box boxSize={12}>
                            <Image src={'images/tw.png'} />
                        </Box>
                        <Box boxSize={12}>
                            <Image src={'images/yt.png'} />
                        </Box>
                    </Flex>
                </Flex>
            </GridItem>
        </Grid>
    </Box>
  )
}

export default Ministry
