import { FC } from 'react'
import { Box, Image } from '@chakra-ui/react'

const BlankCover: FC = () => {
  return (
    <Box
        w="full"
        bgSize="cover"
        alignItems={"center"}
        position={"relative"}
        borderBottomWidth={16}
        borderColor={"base.yellow"}
    >
        <Box>
            <Image src="/images/service-banner.png" alt="service banner" width={"100%"}/>
        </Box>
    </Box>
  )
}

export default BlankCover
