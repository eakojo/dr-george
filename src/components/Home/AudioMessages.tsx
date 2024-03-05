import { FC, useEffect, useRef, useState } from 'react'
import { Box, Flex, Icon, Spinner, Text } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'
import { getLanguage } from '@/helpers/misc'
import HomeLang from '@/internationalization/home'
import { getEpisodes } from '@/service/captivate'
import { useQuery } from 'react-query'
import { TbPlayerPause, TbPlayerPlayFilled } from 'react-icons/tb'


const PlaybackAudio = ({source, playing, setPlaying, setReady, isReady}) => {
    const audioRef = useRef(null);
    const [newAudio, setNewAudio] = useState(null)

    useEffect(
      () => {
        const node = audioRef.current;
        setNewAudio(node)
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [audioRef.current]
    )

    useEffect(() => {
      setPlaying(false)
      if(source && newAudio){
        newAudio.src = source
        if (newAudio.readyState > 0) {
            setPlaying(true)
            setReady(true)
        } else {
            newAudio.addEventListener('loadedmetadata', () => {
                setPlaying(true)
                setReady(true)
            });
        }
        // audio.addEventListener("ended", () => {
        //   setTimeout(() => {
        //     playNext()
        //   }, 5000)
        // })
        // setTotalPlays(prev => prev + 1)
      }
  
    }, [source])

     useEffect(() => {
      if(newAudio !== null){
        if(playing){
          newAudio.play()
        }else {
          newAudio.pause()
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playing])

    return  <audio ref={audioRef}/>
}


const Ministry: FC = () => {
    const [lang,setLang] = useState('en')
    const text = HomeLang[lang]
    const defaultLang =  getLanguage()
    const [active, setActive] = useState({})
    const [isReady, setReady] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)



    const { data, isLoading, error } = useQuery<any>(["captivateData"], getEpisodes,);
    const messages = data?.episodes.slice(0, 5).reverse() || []

    const openLink = () => {
        window.open('https://g-w-arthur-ministries.captivate.fm/listen', '_blank');
    };


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
                {messages.length < 3 ? <Box w={64} h={64} bg="transparent" flex={1} display={{base: "none", xl: "block"}}></Box> : null}
                {messages?.map(item => (<Box 
                    key={item.id} 
                    w={((active as {id: string})?.id) === item.id ? {base: 48, md: 64, lg: 80} : {base: 36, md: 52, lg: 64}} 
                    h={((active as {id: string})?.id) === item.id ? {base: 48, md: 64, lg: 80} : {base: 36, md: 52, lg: 64}} 
                    bg="gray.500"
                    bgImage={item.episode_art}
                    bgSize={"cover"}
                    bgPos={"center"}
                    onClick={() => {
                        setReady(false)
                        setIsPlaying(false)
                        setActive(item)
                    }}
                    cursor={"pointer"}
                    {...(active as {id: string})?.id === item.id ? { flex:1 } : {}}
                    position={"relative"}
                    className={`${((active as {id: string})?.id) === item.id ? `active-box` : ""}`}
                >
                    {((active as {id: string})?.id) === item.id ? <Flex p={3} h={12} w="100" bg="base.gold" justify={"space-between"}>
                        <Text color={"base.blue"} fontFamily={"Montserrat"} fontWeight={600}>{(active as {title: string}).title}</Text>

                        <Flex onClick={() => setIsPlaying(!isPlaying)} align={"center"} justify={"center"} w={6} h={6}>
                            {!isReady ? <Spinner /> : <Icon as={isPlaying ? TbPlayerPause :TbPlayerPlayFilled }  color={"base.blue"} boxSize={6} />}
                        </Flex>
                    </Flex> : null}
                </Box>))}
                {messages.length < 4 ? <Box w={64} h={64} bg="transparent" flex={1} display={{base: "none", xl: "block"}}></Box> : null}
                {messages.length < 5 ? <Box w={64} h={64} bg="transparent" flex={1} display={{base: "none", xl: "block"}}></Box> : null}
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
        {active ? <PlaybackAudio 
                    source={(active as {media_url: string}).media_url} 
                    setReady={setReady}
                    playing={isPlaying}
                    setPlaying={setIsPlaying}
                    isReady={isReady}
                /> : null}
        <Flex justify={"center"}>
            <CustomButton 
                mt={{base: 8, md: 24}} 
                w={48} title={text.listenButton} 
                bgColor={"white"} 
                rounded="none" 
                fontSize={16} 
                color="black" 
                fontFamily="Garamond" 
                onClick={() => openLink()}
            />
        </Flex>
    </Box>
  )
}

export default Ministry
