/* eslint-disable  */
import { FC } from 'react'
import { Box, Flex, Icon, Text, Image } from '@chakra-ui/react'
import { FaArrowDown } from 'react-icons/fa'
import CustomButton from '@/components/Atom/Button'
import { BsArrowDown } from 'react-icons/bs'

interface IProp {
  title?: string
  description: string
  image?: string
}

const JuiceCard: FC<IProp> = ({ title, description, image }) => {
  return (
    <Box>
      <Flex bg="base.cream" align="center" justify={'center'} py={16}>
        <Image src={image} alt={title} w={24} />
      </Flex>
      <Text
        mt={4}
        textAlign={'center'}
        fontWeight={500}
        color="base.green"
        fontSize={24}
      >
        {description}
      </Text>
      <Text
        textAlign={'center'}
        fontWeight={'bold'}
        color="base.green"
        fontSize={24}
      >
        {title}
      </Text>
    </Box>
  )
}

export default JuiceCard
