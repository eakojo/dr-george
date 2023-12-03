import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface IProp {
  bgStyle?: any
}

const About: FC<IProp> = ({
  bgStyle,
}) => {
  return (
    <Box
        w="full"
        minH={'calc(100vh - 250px)'}
        bg={'#00374d17'}
        py={24}
        px={{ base: 4, '2xl': 28 }}
    >
        <Text fontSize={40} color={"base.gold"} my={6}> About Dr. George</Text>
        <Grid templateColumns={"repeat(5, 1fr)"} gap={12}>
            <Box as={GridItem}  colSpan={2}>
                <Box w={"100%"} bg="gray.400" h={'100%'}></Box>
            </Box>

            <Box as={GridItem} colSpan={3}>
                <Text fontFamily={"montserrat"} color={"base.blue"} fontSize={24}>Bible Teacher and a Conference Speaker</Text>
                <Text fontFamily={"montserrat"} color={"base.blue"} fontSize={24}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos magnam delectus nesciunt quis quibusdam, nam autem, laborum, facere aliquid corporis voluptatem officiis id minus ipsum nihil optio est consequuntur? Ut, ipsa incidunt. Voluptate, officia qui? Earum dolorum dignissimos illo animi repellat repudiandae natus reprehenderit eaque quidem veniam, nobis labore ullam?</Text>
            </Box>
        </Grid>
    </Box>
  )
}

export default About
