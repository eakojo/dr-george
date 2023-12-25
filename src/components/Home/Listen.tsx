import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'


const Listen: FC = () => {
  return (
    <Box
        bg={'base.blue'}
        py={20}
        px={{ base: 4, '2xl': 36 }}
        pos={"relative"}
    >
      <Grid templateColumns={'repeat(2, 1fr)'}>
        <GridItem pr={36} py={4}>
          <Text color={"white"} fontWeight={"bold"} fontSize={40} lineHeight={1.2}>Listen to Dr George on all platforms now</Text>
          <Flex align={"center"} gap={12} mt={12}>
            <CustomButton bgColor={"base.gold"} title='Listen Now' color="base.blue" rounded="none" textSize={20} />
            <Flex gap={8} align={"center"}>
              <Box w={12}>
                <Image src="images/image 5.png" alt="spotify" />
              </Box>
              <Box w={12}>
                <Image src="images/image 6.png" alt="podcast" />
              </Box>
              <Box w={12}>
                <Image src="images/image 7.png" alt="apple podcast" />
              </Box>
              <Box w={16}>
                <Image src="images/image 8.png" alt="youtube" />
              </Box>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem px={20} py={4} bg={"base.blue"}>
          <Box pos={"relative"}>
            <Image src="images/Rev G 1.png"  pos={"absolute"} top={-64} right={-20}/>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Listen
