import { FC, useEffect, useState } from 'react'
import { 
    Box, Flex, 
    Icon, Image, 
    Modal, ModalOverlay, 
    ModalContent, ModalHeader, 
    ModalCloseButton, Text, 
    useDisclosure,
    ModalBody,
    ModalFooter
} from '@chakra-ui/react'
import CustomButton from '../Atom/Button'
import { TbPlayerPlayFilled } from 'react-icons/tb'
import { HiArrowLongRight } from 'react-icons/hi2'
import Link from 'next/link'


const VideoModal: FC<{isOpen: boolean, onClose: () => void, video: any, id: string}> = ({isOpen, onClose, video, id}) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text color="base.blue" textTransform={"capitalize"}>{video?.title?.toLowerCase()}</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <iframe
                        width={"100%"}
                        title={video?.title?.toLowerCase()}
                        src={`https://www.youtube.com/embed/${id}`}
                        allowFullScreen
                        height={"400px"}
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

const Latest: FC = () => {
    const [data, setData] = useState(null)
    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const channelId = process.env.NEXT_PUBLIC_CHANNEL_ID;
    const currentVideo = process.env.NEXT_PUBLIC_CURRENT_VIDEO;
    const { isOpen, onOpen, onClose } = useDisclosure()


    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${currentVideo}&key=${apiKey}`;

    useEffect(() => {
        // Your asynchronous logic here
        const fetchData = async () => {
            const yData = await fetch(apiUrl)
            if(yData){
                const jsonData = await yData.json()
                const video = jsonData?.items?.[0]?.snippet
                setData(video)
            }
        };

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <Box
            py={20}
            px={{ base: 4, '2xl': 36 }}
        >   
            <VideoModal isOpen={isOpen} onClose={onClose} video={data} id={currentVideo} />

            <Text color={"base.blue"} fontWeight={"bold"} fontSize={24} textAlign={"center"}>Watch the latest Video Messages</Text>
            <Flex direction={"column"} justify={'center'} align={"center"}>
                <Text fontSize={{base: 12, sm: 14, md: 16}} fontWeight={500} textAlign={"center"} w={{base: "auto", md: 124}} mt={{base: 5, md: 12}} color={"base.blue"} fontFamily={"Montserrat"}>
                    Watch videos that will help you become more like Christ in every way. These messages are guides, showing you how to grow spiritually and attain the full measure and stature of Christ.
                </Text>
                <Link href={"https://youtube.com/@DrGWArthur"} target="_">
                    <CustomButton mt={8} w={48} title='Start watching' bgColor={"base.gold"} rounded="none" fontSize={16} color="black" fontFamily="Garamond" />
                </Link>
            </Flex>

            <Flex justify={"center"} pos={"relative"}>
                <Box pos={"absolute"} left={{base: 0, md: 48}} top={{base: 0, md: -20}} w={{base: 28, md: 32}}>
                    <Image src="images/pattern-1.png" alt="pattern group"  />
                </Box>
                <Box bg={"gray.300"} h={{base: 'auto', md: 110}} w={{base: 'auto', md: 128}} mt={12} pos={"relative"} overflow={'hidden'}>
                    <Box bgImage={data?.thumbnails?.high?.url} bgSize={"contain"}  h={{base: 'auto', md: 110}} w={{base: 'auto', md: 128}}></Box>
                    <Flex align="center" justify={"center"} overflow={"hidden"} pos={"absolute"} left={0} top={0} zIndex={2} w={"100%"} h={"100%"}>
                        {!data || isOpen ? null : <Flex w={16} h={16} bg="whiteAlpha.800" rounded={"full"} align={"center"} 
                            justify={"center"} cursor={"pointer"}
                            onClick={() => onOpen()}
                            >
                            <Icon as={TbPlayerPlayFilled} boxSize={8} />
                        </Flex>}
                    </Flex>
                </Box>
                <Box pos={"absolute"} right={12} top={-20} display={{base: "none", md: "block"}}>
                    <Icon as={HiArrowLongRight} color="base.blue" fontSize={40}/>
                </Box>
            </Flex>

        </Box>
    )
}

export default Latest
