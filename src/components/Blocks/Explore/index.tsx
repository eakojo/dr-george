import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import JuiceCard from '../Cards/JuiceCard'

const Explore: FC = (): JSX.Element => {
  return (
    <Box
      bg="white"
      w={{ base: '100%' }}
      px={{ base: 6, sm: 6, md: 16, lg: 20, '2xl': 28, '4xl': 48 }}
      py={24}
      position={'relative'}
    >
      <Box pos={'absolute'} w={24} right={0} top={-14} zIndex={3}>
        <Image
          src="images/Orange half.png"
          {...{ transform: 'rotate(0deg)' }}
          alt="fruit image"
        />
      </Box>
      <Flex align="center">
        <Flex
          w={20}
          h={20}
          mr={4}
          rounded="full"
          bg="base.green"
          align="center"
          justify="center"
        >
          <Icon as={HiArrowNarrowRight} fontSize={28} color="white" />
        </Flex>
        <Text fontSize={48} fontWeight={700} color={'base.green'}>
          Explore all beverages
        </Text>
      </Flex>
      <Grid templateColumns={'repeat(3, 1fr)'} gap={12} mt={12}>
        <Box as={GridItem} colSpan={1}>
          <JuiceCard
            title="Incidi dunt ut labore"
            description="consectetur adipiscing"
            image="images/Orange.png"
          />
        </Box>
        <Box as={GridItem} colSpan={1}>
          <JuiceCard
            title="Incidi dunt ut labore"
            description="consectetur adipiscing"
            image="images/Watermelon.png"
          />
        </Box>
        <Box as={GridItem} colSpan={1}>
          <JuiceCard
            title="Incidi dunt ut labore"
            description="consectetur adipiscing"
            image="images/Pineapple.png"
          />
        </Box>
      </Grid>
    </Box>
  )
}

export default Explore
