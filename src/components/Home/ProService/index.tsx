import { FC } from 'react'
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import Reveal from '@/components/Blocks/Animations/Reveal'

const ProfessionalService: FC = () => {
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      position={"relative"}
      px={{ base: 4, '2xl': 28 }} 
      py={28}
      bg="base.black"
    >
      <Text fontSize={{base: 32, lg: 52}} color={"white"}>The Professional Service</Text>
        <Grid templateColumns={{base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)"}} gap={{base: 8, lg: 16}} color="white" fontSize={14}>
            <Box as={GridItem} colSpan={1} mt={12}>
                <Reveal from="left">
                  <Box w={12} h={12} bg="base.yellow" rounded="full"></Box>
                  <Text lineHeight={1.4} mt={6} fontSize={16}>The reason clients seek out advisory services is because these are often things our clients cannot perform on their own. Advisory services include value-added services our clients don’t have time to do, don’t want to do, or can’t do for themselves</Text>
                </Reveal>
            </Box>
            <Box as={GridItem} colSpan={1} mt={12}>
                <Reveal from="left">
                  <Box w={12} h={12} bg="base.yellow" rounded="full"></Box>
                  <Text lineHeight={1.4} mt={6} fontSize={16}>As our client’s accountant, we have the capacity to provide tailored advice and opinions. Large advisory, firms have committees, or act as a team, that have the authority to render a decision or judgment on an issue, in addition to providing opinions</Text>
                </Reveal>
            </Box>
            <Box as={GridItem} colSpan={1} mt={12}>
                <Reveal from="left">
                  <Box w={12} h={12} bg="base.yellow" rounded="full"></Box>
                <Text lineHeight={1.3} mt={6} fontSize={16}>As accounting professionals, most of us have seen businesses succeed and fail. By offering our expertise and providing guidance, we can help our clients in one or more specific situations</Text>
                </Reveal>
            </Box>
        </Grid>
    </Box>
  )
}

export default ProfessionalService
