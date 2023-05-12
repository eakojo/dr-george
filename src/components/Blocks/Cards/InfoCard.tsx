/* eslint-disable  */
import { FC } from 'react'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { FaArrowDown } from 'react-icons/fa'
import CustomButton from '@/components/Atom/Button'
import { BsArrowDown } from 'react-icons/bs'

interface IProp {
  title?: string
  description: string
  colors?: {
    description?: string
    icon?: string
    iconBg?: string
    title?: string
  }
  btnProps?: Record<string, string>
}

const InfoCard: FC<IProp> = ({ title, description, colors, btnProps }) => {
  return (
    <Box>
      <Flex
        w={10}
        h={10}
        mb={4}
        rounded="full"
        align={'center'}
        justify="center"
        bg={colors?.iconBg || 'base.yellow'}
      >
        <Icon
          as={FaArrowDown}
          fontSize={28}
          color={colors?.icon || 'base.dgreen'}
          {...{ transform: 'rotate(45deg)' }}
        />
      </Flex>
      {title && (
        <Text fontWeight={600} fontSize={24} my={4} color={colors?.title}>
          {title}
        </Text>
      )}
      <Text fontWeight={500} fontSize={20} color={colors?.description}>
        {description}
      </Text>
      <Box>
        <CustomButton
          textColor={'base.creamie'}
          title="Get In touch"
          bgColor={'base.yellow'}
          icon={BsArrowDown}
          transform={'rotate(230deg)'}
          {...btnProps}
        />
      </Box>
    </Box>
  )
}

export default InfoCard
