import { FC } from 'react'
import { Box, Image } from '@chakra-ui/react'

const BlankCover: FC = () => {
  return (
    <Box
        w="full"
        h={110}
        bgSize="cover"
        alignItems={"center"}
        position={"relative"}
        borderBottomWidth={16}
        borderColor={"base.yellow"}
        bgImage="/images/service-banner.png"
    >
    </Box>
  )
}

export default BlankCover
