import { FC } from 'react'
import { Box, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import {CgQuote} from 'react-icons/cg'

const teamPeople = [
    {name: "Roberta", role: "CFO | Business Advisor"},
    {name: "Pius", role: "Strategy / Business Advisor"},
    {name: "Nathan", role: "Accounting Specialist"},
    {name: "Chichi", role: "Morale Ambassador"},
    {name: "Imala", role: "Morale Ambassador"},
     {name: "Roberta", role: "CFO | Business Advisor"},
]
const Team: FC = () => {
  return (
    <Box
      w="full"
      bgSize="cover"
      alignItems={"center"}
      position={"relative"}
      px={{ base: 4, '2xl': 28 }} 
      pb={24}
    >
        <Box  color="base.black" fontSize={{base: 32, md: 52}} lineHeight={1.2}>
            <Text>Our Team</Text>
        </Box>
        <Box mt={12}>
            <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(12, 1fr)"}} gap={16} my={6}>
                {teamPeople.map(item =>                 <Box key={item.name} as={GridItem} colSpan={4}>
                    <Box bg="gray.200" w="full" h={96}></Box>
                    <Text fontWeight={600} color={"gray.600"} fontSize={{base: 28, md: 32}}>{item.name}</Text>
                    <Text fontSize={{base: 20, md: 28}}color={"gray.500"}>{item.role}</Text>
                </Box>)}

            </Grid>
        </Box>
    </Box>
  )
}

export default Team
