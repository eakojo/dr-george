import { FC, useRef, ReactNode } from 'react'
import { Box, Button, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { BiArrowBack } from 'react-icons/bi'
import useHover from '@/hooks/useHover';

const GridBox:FC<{image: ReactNode; description: string, title: string, border?: string}> = (
    {image, description, border, title}:
    {image: ReactNode; description: string, border?: string, title: string}
  ) => {
    const ref = useRef(null);
    const isHovered = useHover(ref);

    return <Grid ref={ref} 
            templateColumns={"repeat(7, 1fr)"} gap={16} py={20}
            _hover={{bg: 'black'}}
            borderBottomWidth={border || 1}
            borderColor={'gray.600'} 
            color="gray.500"
            px={{ base: 4, '2xl': 28 }} cursor={"pointer"}
            >
            <Box as={GridItem} colSpan={3}>
                <Flex direction={"column"} alignItems={"center"} {...isHovered ? { filter: "invert(1)"}: {}}>
                    {image}
                    <Text fontWeight={600} fontSize={32} color={"blackAlpha.700"}>{ title }</Text>
                </Flex>
            </Box>
            <Box as={GridItem} colSpan={4}>
                <Text fontSize={24} color={isHovered ? 'white' : "gray.600"} lineHeight={1.5} mt={6}>
                    {description}
                </Text>
            </Box>
        </Grid>
}


const RenownedService: FC = () => {
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      position={"relative"}
    >
        <Box mt={12} fontWeight={500} color="base.black" fontSize={60} lineHeight={1.2}  px={{ base: 4, '2xl': 28 }} >
            <Text>Premium</Text>
            <Text>Services</Text>
        </Box>
        <Box>
            <GridBox 
              image={<Image src="/images/Services D.png" alt="" w={"50%"}/>} 
              title='Business Advisory' 
              description='We provide strategic consulting, business advisory, and incubation support to relatively early-stage businesses.A client receiving business consulting is also likely to be  a candidate for grant support, capital raising, or partnership development. We can also provide a customized project service, tailored to the needs of the business'
            />

            <GridBox 
              image={ <Image src="/images/Services E.png" alt=""/>} 
              title='Accounting Services' 
              description='Quality bookkeeping is vital to any business. We make 
                        it our mission to ensure that as a partner, the financial 
                        transactions and records of the company are kept 
                        up-to-date and accurate'
            />

            <GridBox 
              image={ <Image src="/images/Services E.png" alt=""/>} 
              title='Business Focusing On Admin Support' 
              description='Our focus is on allowing our clients to build distributed 
                      teams that can work wherever and whenever they 
                      want, so their businesses can focus on allocating their 
                      office- running costs elsewhere. We have seen a huge 
                      amount of growth in the remote work sector over the 
                      past few years and are proud to be one of the best 
                      remote work management firms.'
            />

            <GridBox 
              image={<Image src="/images/Services G.png" alt="" w={'50%'} />} 
              title='Tax Advisory and Management Consulting' 
              description='We possess a reputed place in providing tax 
                    consultancy services. Tax advisory includes tax 
                    optimization, strategic tax planning, & managing the 
                    compliance covering clientele needs of private, 
                    business, AOP’s, non-profit, multinationals, and public 
                    sector organizations at the level.'
            />
            <GridBox 
              image={ <Image src="/images/Services F.png" alt=""/>} 
              title='Business Consultancy' 
              description='We create a flexible support infrastructure to run the 
                    daily operations of businesses. Fertig embraced 
                    innovation, technology and, crucially, enlisted the support of workers to do the work'
            />
        </Box>
    </Box>
  )
}

export default RenownedService
