import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'
import Link from 'next/link'


const Listen: FC = () => {
  return (
    <Box
        bg={'base.blue'}
        py={20}
        px={{ base: 4, '2xl': 36 }}
        pos={"relative"}
    >
      <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}>
        <GridItem pr={{base: 0, md: 36}} py={4}>
          <Text color={"white"} fontWeight={"bold"} textAlign={"center"} fontSize={{base: 24, md: 40}} lineHeight={1.2}>Listen to Dr George on all platforms now</Text>
          <Flex align={"center"} gap={12} mt={12} direction={{base: "column", md: "row"}}>
            <CustomButton bgColor={"base.gold"} title='Listen Now' color="base.blue" rounded="none" textSize={20} display={{base: "none", md: "block"}}/>
            <Flex gap={8} align={"center"}>
              <Box w={12}>
                <Link href={'https://open.spotify.com/show/7s0HbOnbL7XD4xTDxu3peS?si=qJ589nXfQJa1VyMIGJXBZg'}>
                  <Image src="images/image 5.png" alt="spotify" />
                </Link>
              </Box>
              <Box w={12}>
                <Image src="images/image 6.png" alt="podcast" />
              </Box>
              <Box w={12}>
                <Link href={'https://podcasts.apple.com/us/podcast/g-w-arthur-ministries/id1723722303'}>
                  <Image src="images/image 7.png" alt="apple podcast" />
                </Link>
              </Box>
              <Box w={16}>
                  <Link href={'https://youtube.com/@DrGWArthur'}>
                      <Image src="images/image 8.png" alt="youtube" />
                  </Link>
              </Box>
            </Flex>
            <CustomButton bgColor={"base.gold"} title='Listen Now' color="base.blue" rounded="none" textSize={20} display={{base: "block", md: "none"}}/>
          </Flex>
        </GridItem>
        <GridItem px={20} py={4} bg={"base.blue"} display={{base: "none", lg: "block"}}>
          <Box pos={"relative"}>
            <Image src="images/Rev G 1.png"  pos={"absolute"} top={{base: 0, xl: -24}} right={-20}/>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Listen
