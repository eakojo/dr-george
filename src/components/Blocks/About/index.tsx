/* eslint-disable  */
import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'

const About: FC = (): JSX.Element => {
  return (
    <Box
      bg="base.cream"
      w={{ base: '100%' }}
      px={{ base: 6, sm: 6, md: 16, lg: 20, '2xl': 28, '4xl': 48 }}
      py={24}
      position={'relative'}
    >
      <Box pos={'absolute'} w={24} left={0} top={-14}>
        <Image
          src="images/Mango half.png"
          {...{ transform: 'rotate(0deg)' }}
          alt="fruit image"
        />
      </Box>
      <Grid templateColumns={'repeat(2, 1fr)'} gap={12}>
        <Box as={GridItem} colSpan={1}>
          <Text fontSize={72} fontWeight={700} color={'base.lgreen'}>
            About Us
          </Text>
          <Text color="base.lgreen" fontSize={24} fontWeight={500}>
            consectetur adipiscing elit, sed do eiusmod temp or incidi dunt ut
            labore et dolore magna aliqua ni
          </Text>
          <Text
            fontWeight={700}
            color="base.lgreen"
            fontSize={24}
            textDecoration={'underline'}
            pb={2}
            mt={4}
          >
            Read more
          </Text>
        </Box>
        <Box as={GridItem} colSpan={1}>
          <Flex w="100%" h="100%" align="center" justify={'center'}>
            <Box w={80} h={80}>
              <Image src="images/Juice III.png" alt="fruit image" />
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  )
}

export default About
