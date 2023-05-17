import { FC, useState } from 'react'
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import AnimatedGrid from '../../Animations/AnimatedGrid';

const CFO: FC = () => {

  return (
    <>
        <Box
            w="full"
            bgSize="cover"
            alignItems={"center"}
            position={"relative"}
            px={{ base: 4, '2xl': 28 }} 
            py={20}
            >
                <Grid templateColumns={"repeat(7, 1fr)"} gap={16}>
                    <Box as={GridItem} colSpan={3}>
                    <Image src="/images/cfo-avatar.png" alt="philosophy image" w="100%"/>
                    </Box>
                    <Box as={GridItem} colSpan={4}>
                        {/* <Icon as={CgQuote} fontSize={96} /> */}
                        <Text fontSize={48} color="gray.800" lineHeight={1.2} mt={6}>
                            Small business owners don&lsquo;t 
                            always have access to the 
                            same financial experts and 
                            resources that big companies 
                            have. I&lsquo;m here to fix that problem!
                        </Text>
                        <Text color="gray.400" fontSize={28} lineHeight={1.2} mt={6}>Roberta A. Ayalingo</Text>
                    </Box>
                </Grid>
            </Box>
        <Box mt={12} fontWeight={600} color="base.black" fontSize={52} lineHeight={1.2} px={{ base: 4, '2xl': 28 }}>
            <Text>Business</Text>
            <Text>Professional</Text>
        </Box>
        <Box my={6}>
            <AnimatedGrid count={'01'} description='You might be uncertain about how to manage the growth of your business, increase your cash flow, and reach financial freedom by creating wealth. While you&lsquo;re probably bringing in revenue, that may not translate into money to take home to your family.'/>
            <AnimatedGrid border={"none"} count={'02'} description='You might want more guidance from a trusted advisor who really understands your business, and has questions that your bookkeepers can’t always answer'/>
        </Box>
    </>
    )
}

export default CFO
