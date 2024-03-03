import { FC, useEffect, useState } from 'react'
import { Box, Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'
import { getLanguage } from '@/helpers/misc'
import HomeLang from '@/internationalization/home'
import { fetchYoutube } from '@/service/videos'
import { getEpisodes } from '@/service/captivate'
import { useQuery } from 'react-query'


const Ministry: FC = () => {
    const [lang,setLang] = useState('en')
    const text = HomeLang[lang]
    const defaultLang =  getLanguage()
    const [messages, setMessages] = useState([])
    const [active, setActive] = useState({})

    const handleFetch = async () => {
        const res = await getEpisodes()
        setMessages(res?.episodes || [])
    }

    useEffect(() => {
        handleFetch()
    },[])


  return (
    <Box
        bg={'#102033'}
        py={20}
    >
        <Text color={"white"} fontWeight={"bold"} fontSize={24} textAlign={"center"}>{text.listenTitle}</Text>
        <Flex direction={"column"} justify={'center'} align={"center"}>
            <Text textAlign={"center"} w={{base: "auto", md: 124}}  fontSize={{base: 12, sm: 14, md: 16}} mt={12} color={"white"} fontFamily={"Montserrat"}>
               {text.listenSubtext}
            </Text>
        </Flex>

        <Box px={{base: 0, md: 4}} mt={24} pos={"relative"}>
            <Flex 
                pos={"absolute"} 
                h={"100%"} w={{base: 36, md: 72}} 
                left={0} top={0}
                align={"center"}
                pl={16}
                bg={"linear-gradient(90deg, rgba(16,32,51,1) 46%, rgba(16,32,51,0.8576680672268908) 58%, rgba(16,32,51,0.5663515406162465) 77%, rgba(16,32,51,0.08735994397759106) 93%, rgba(16,32,51,0) 100%)"}>
                {/* <Icon as={HiArrowLongLeft} color="white" fontSize={{base: 24, md: 40}}/> */}
            </Flex>
            <Flex gap={{base: 2, md: 8}} align={"center"}>
                <Box w={64} h={64} bg="transparent" flex={1} display={{base: "none", xl: "block"}}></Box>
                {messages?.map(item => (<Box 
                    key={item.id} 
                    w={((active as {id: string})?.id) === item.id ? {base: 48, md: 64, lg: 80} : {base: 36, md: 52, lg: 64}} 
                    h={((active as {id: string})?.id) === item.id ? {base: 48, md: 64, lg: 80} : {base: 36, md: 52, lg: 64}} 
                    bg="gray.500"
                    bgImage={item.episode_art}
                    bgSize={"cover"}
                    bgPos={"center"}
                    onClick={() => setActive(item)}
                    cursor={"pointer"}
                    {...(active as {id: string})?.id === item.id ? { flex:1 } : {}}
                />))}
                <Box bg="transparent" w={{base: 36,  md: 52, lg: 64}} h={{base: 36,  md: 52, lg: 64}}></Box>
                <Box bg="transparent" w={{base: 36,  md: 52, lg: 64}} h={{base: 36,  md: 52, lg: 64}}></Box>
            </Flex>
            <Flex 
                pos={"absolute"} 
                h={"100%"}  w={{base: 36, md: 72}} 
                right={0} top={0}
                align={"center"}
                justify={"center"}
                pl={0}
                bg={"linear-gradient(270deg, rgba(16,32,51,1) 46%, rgba(16,32,51,0.8576680672268908) 58%, rgba(16,32,51,0.5663515406162465) 77%, rgba(16,32,51,0.08735994397759106) 93%, rgba(16,32,51,0) 100%)"}>
            </Flex>
        </Box>
        <Flex justify={"center"}>
            <CustomButton mt={{base: 8, md: 24}} w={48} title={text.listenButton} bgColor={"white"} rounded="none" fontSize={16} color="black" fontFamily="Garamond" />
        </Flex>
    </Box>
  )
}

export default Ministry
