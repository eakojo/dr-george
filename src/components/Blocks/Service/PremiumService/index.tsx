import { FC } from 'react'
import { Box, Button, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'

const RenownedService: FC = () => {
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      position={"relative"}
      px={{ base: 4, '2xl': 28 }} 
    >
        <Box mt={12} fontWeight={500} color="base.black" fontSize={60} lineHeight={1.2}>
            <Text>Premium</Text>
            <Text>Services</Text>
        </Box>
        <Box>
            <Grid templateColumns={"repeat(7, 1fr)"} gap={16} py={20} mt={24} borderBottomWidth={1} borderColor={'gray.600'}>
                <Box as={GridItem} colSpan={3} alignItems={"center"}>
                  <Flex direction={"column"} alignItems={"center"}>
                    <Image src="/images/Services D.png" alt="" w={"50%"}/>
                    <Text fontWeight={600} fontSize={32} color={"blackAlpha.700"}>Business Advisory</Text>
                  </Flex>
                </Box>
                <Box as={GridItem} colSpan={4}>
                    <Text fontSize={24} color="gray.600" lineHeight={1.7} fontWeight={500}>
                        We provide strategic consulting, business advisory, and 
                        incubation support to relatively early-stage businesses. 
                        A client receiving business consulting is also likely to be 
                        a candidate for grant support, capital raising, or 
                        partnership development. We can also provide a 
                        customized project service, tailored to the needs of the 
                        business
                    </Text>
                </Box>
            </Grid>
            <Grid templateColumns={"repeat(7, 1fr)"} gap={16} py={20} my={10}  borderBottomWidth={1} borderColor={'gray.600'}>
                <Box as={GridItem} colSpan={3}>
                  <Flex direction={"column"} alignItems={"center"}>
                    <Image src="/images/Services E.png" alt=""/>
                    <Text fontWeight={600} fontSize={32} mt={4} color={"blackAlpha.700"}>Accounting Services</Text>
                  </Flex>
                </Box>
                <Box as={GridItem} colSpan={4}>
                    <Text fontSize={24} color="gray.700" lineHeight={1.7}  fontWeight={500}>
                        Quality bookkeeping is vital to any business. We make 
                        it our mission to ensure that as a partner, the financial 
                        transactions and records of the company are kept 
                        up-to-date and accurate
                    </Text>
                </Box>
            </Grid>
            <Grid templateColumns={"repeat(7, 1fr)"} gap={16} py={20} my={10}  borderBottomWidth={1} borderColor={'gray.600'}>
              <Box as={GridItem} colSpan={3}>
                <Flex direction={"column"} alignItems={"center"}>
                  <Image src="/images/Services E.png" alt="" />
                  <Text fontWeight={600} fontSize={32} w={'70%'} mt={4} color={"blackAlpha.700"}>Business Focusing On Admin Support</Text>
                </Flex>
              </Box>
              <Box as={GridItem} colSpan={4}>
                  <Text fontSize={24} color="gray.700" lineHeight={1.7} mt={12}  fontWeight={500}>
                      Our focus is on allowing our clients to build distributed 
                      teams that can work wherever and whenever they 
                      want, so their businesses can focus on allocating their 
                      office- running costs elsewhere. We have seen a huge 
                      amount of growth in the remote work sector over the 
                      past few years and are proud to be one of the best 
                      remote work management firms.
                  </Text>
              </Box>
            </Grid>
            <Grid templateColumns={"repeat(7, 1fr)"} gap={16} py={20} my={10}  borderBottomWidth={1} borderColor={'gray.600'}>
              <Box as={GridItem} colSpan={3}>
                <Flex direction={"column"} alignItems={"center"}>
                  <Image src="/images/Services G.png" alt="" w={'50%'} />
                  <Text fontWeight={600} fontSize={32} w={'80%'} mt={4} color={"blackAlpha.700"}>Tax Advisory and Management Consulting</Text>
                </Flex>
              </Box>
              <Box as={GridItem} colSpan={4}>
                  <Text fontSize={24} color="gray.700" lineHeight={1.7}  fontWeight={500}>
                    We possess a reputed place in providing tax 
                    consultancy services. Tax advisory includes tax 
                    optimization, strategic tax planning, & managing the 
                    compliance covering clientele needs of private, 
                    business, AOP’s, non-profit, multinationals, and public 
                    sector organizations at the level.
                  </Text>
              </Box>
            </Grid>
            <Grid templateColumns={"repeat(7, 1fr)"} gap={16} py={20} my={10}>
              <Box as={GridItem} colSpan={3}>
                <Flex direction={"column"} alignItems={"center"}>
                  <Image src="/images/Services F.png" alt=""/>
                  <Text fontWeight={600} fontSize={32} w={'80%'} mt={4} textAlign={"center"} color={"blackAlpha.700"}>Business Consultancy</Text>
                </Flex>
              </Box>
              <Box as={GridItem} colSpan={4}>
                  <Text fontSize={24} color="gray.700" lineHeight={1.7}  fontWeight={500}>
                    We create a flexible support infrastructure to run the 
                    daily operations of businesses. Fertig embraced 
                    innovation, technology and, crucially, enlisted the support of workers to do the work
                  </Text>
              </Box>
            </Grid>
        </Box>
    </Box>
  )
}

export default RenownedService
