import { FC } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import {BiArrowBack} from 'react-icons/bi'
import { useRouter } from 'next/router'
const Footer: FC = () => {
  const router = useRouter()
  return (
    <>
    <Box pos={"relative"} overflow={'hidden'} bgSize={'cover'} borderTopWidth={1} borderColor={"base.gray"} mt={12}>
      
    </Box>
    </>
  )
}

export default Footer
