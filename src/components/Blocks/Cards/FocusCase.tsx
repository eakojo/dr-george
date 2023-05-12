/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { BsArrowDown, BsArrowRight } from 'react-icons/bs'
import CustomButton from '@/components/Atom/Button'

interface IProp {
  image: string
  title: string
}

const FocusCase: FC<IProp> = ({ title, image }) => {
  return (
    <Box>
      <Box pos="relative" mb={4}>
        <Flex
          justify="center"
          rounded="full"
          align="center"
          pos="absolute"
          bg="white"
          right={12}
          bottom={-10}
          w={20}
          h={20}
        >
          <Icon as={BsArrowRight} mr={1} />
          <Text color="#458145" fontSize={12}>
            View
          </Text>
        </Flex>
        <Box w="100%" h="100%">
          <Image src={image} />
        </Box>
      </Box>
      <Text color="base.lgreen" fontWeight={700} fontSize={28}>
        {title}
      </Text>
      <CustomButton
        title="View case"
        textColor={'base.yellow'}
        bgColor="base.lgreen"
        icon={BsArrowDown}
        transform={'rotate(230deg)'}
        textSize={20}
      />
    </Box>
  )
}

export default FocusCase
