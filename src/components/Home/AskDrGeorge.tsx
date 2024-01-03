import { FC, useEffect, useState } from 'react'
import { Box, Flex, Image, Input, Text, Textarea } from '@chakra-ui/react'
import CustomButton from '../Atom/Button'
import HomeLang from '@/internationalization/home'
import { getLanguage } from '@/helpers/misc'


const AskDrGeorge: FC = () => {
  const [lang,setLang] = useState('en')
  const text = HomeLang[lang]
  const defaultLang =  getLanguage()

  useEffect(() => {
      setLang(defaultLang)
  },[defaultLang])


  return (
    <Box
        bg={'white'}
        py={20}
        px={{ base: 4, '2xl': 36 }}
        pos={"relative"}
    >
        <Text color={"base.blue"} fontWeight={"bold"} fontSize={{base: 24, md: 40}} textAlign={"center"}>{text.questionsTitle}</Text>
        <Flex direction={"column"} justify={'center'} align={"center"}>
            <Text fontWeight={500} textAlign={"center"} w={{base: "auto", md: 124}} fontSize={{base: 10, sm: 14, md: 16}} mt={{base: 4, md: 12}} color={"base.blue"} fontFamily={"Montserrat"}>
            {text.questionsSubtext}
            </Text>
        </Flex>

        <Flex direction={'column'} gap={6} maxW={'600px'} mx={"auto"} mt={{base: 12, md: 0}}>
          <Input fontFamily={'Montserrat'} placeholder={text.questionsNameInput} rounded={'none'}  h={14} fontSize={{base: 10, sm: 14, md: 16}}/>
          <Textarea fontFamily={'Montserrat'} placeholder={text.questionsQuestionInput} rounded={'none'} fontSize={{base: 10, sm: 14, md: 16}} h={28}></Textarea>
          <CustomButton w={36} mx="auto" bgColor={'base.blue'} color="white" title={text.questionsButton} textSize={16} rounded="none" fontFamily="Montserrat"/>
        </Flex>
        <Box pos={"absolute"} bottom={{base: -16, md: -20}} left={0} w={{base: 24, md: 32}} zIndex={5}>
            <Image src='images/pattern-2.png' alt='pattern'/>
        </Box>
    </Box>
  )
}

export default AskDrGeorge
