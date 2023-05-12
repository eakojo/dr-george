import { FC } from 'react'
import { Box, Button, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'

const Strategy: FC = () => {
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      position={"relative"}
      px={{ base: 4, '2xl': 28 }} 
      py={28}
      borderBottomWidth={16}
      borderColor={"base.yellow"}
    >
        <Grid templateColumns={"repeat(7, 1fr)"} gap={16}>
             <Box as={GridItem} colSpan={3}>
                <Text fontSize={32} color="gray.800" fontWeight={600}>Our Strategy</Text>
                <Text color="gray.700" fontSize={24} lineHeight={1.2} mt={6}>Our business services team strives to provide assistance and solutions that go beyond the traditional tax and accounting role – to delve beyond the numbers and add value to your business.</Text>
                <Text mt={8} color="gray.700" fontSize={24} lineHeight={1.2}>We form long-term relationships with our clients, wherein we become trusted advisors on a myriad of issues faced by</Text>
                <Button mt={12} py={12} px={6} rounded={0} bg="base.yellow" color="base.black" fontSize={24}>
                  Discover the company
                  <Icon ml={2} fontSize={24} as={BiArrowBack} {...{ transform: 'rotate(180deg)' }}/>
                </Button>
            </Box>
            <Box as={GridItem} colSpan={4}>
              <Image src="/images/crop.png" alt="strategy image"/>
            </Box>
        </Grid>
    </Box>
  )
}

export default Strategy
