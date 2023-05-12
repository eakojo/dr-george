import { FC } from 'react'
import { Box, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import {CgQuote} from 'react-icons/cg'

const CFO: FC = () => {
  return (
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
                <Text fontSize={48} color="gray.800" lineHeight={1.2}>
                    Small business owners don&lsquo;t 
                    always have access to the 
                    same financial experts and 
                    resources that big companies 
                    have. I&lsquo;m here to fix that problem!
                </Text>
                <Text color="gray.400" fontSize={28} lineHeight={1.2} mt={6}>Roberta A. Ayalingo</Text>
            </Box>
        </Grid>
        <Box mt={12} fontWeight={600} color="base.black" fontSize={52} lineHeight={1.2}>
            <Text>Business</Text>
            <Text>Professional</Text>
        </Box>
        <Box>
            <Grid templateColumns={"repeat(7, 1fr)"} gap={16} my={6} borderBottomWidth={1} borderColor={'gray.600'}>
                <Box as={GridItem} colSpan={3}>
                    <Text fontSize={148}>01</Text>
                </Box>
                <Box as={GridItem} colSpan={4}>
                    <Text fontSize={24} color="gray.600" lineHeight={1.5}>
                       You might be uncertain about how to manage the 
                        growth of your business, increase your cash flow, 
                        and reach financial freedom by creating wealth. 
                        While you&lsquo;re probably bringing in revenue, that may 
                        not translate into money to take home to your family.
                    </Text>
                </Box>
            </Grid>
             <Grid templateColumns={"repeat(7, 1fr)"} gap={16} my={10}>
                <Box as={GridItem} colSpan={3} >
                    <Text fontSize={148} color="gray.500" >02</Text>
                </Box>
                <Box as={GridItem} colSpan={4}>
                    <Text fontSize={24} color="gray.500" lineHeight={1.5} mt={12}>
                        You might want more guidance from a trusted advisor 
                        who really understands your business, and has 
                        questions that your bookkeepers can’t always answer
                    </Text>
                </Box>
            </Grid>
        </Box>
    </Box>
  )
}

export default CFO
