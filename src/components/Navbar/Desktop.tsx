import React, {Fragment} from 'react'
import { Box, Flex, Icon, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { relative } from 'path'
import CustomButton from '../Atom/Button'


interface ILink {
  name: string
  path: string
  type?: string
  weight?: string
  width?: number
  height?: number
  children?: { name: string; path: string }[]
}
const NavbarLink: React.FC<{ item: ILink, transparent: boolean }> = ({ item, transparent }: { item: ILink, transparent: boolean }) => {
  const router = useRouter()
  return (
    <>
    {item.type && item.type === 'button' ? 
      <CustomButton 
        bgColor={transparent? "transparent" : "base.blue"} 
        borderWidth={transparent? 1: 0}
        title={item.name} 
        textColor={"white"} 
        textSize={16} 
        mt={0} 
        rounded="none" 
        minW={"auto"} 
        px={8} 
        _hover={{
          bgColor: transparent? "white" : "base.blue",
          textColor:  transparent? "base.blue" : "white"
        }}
      />
      :
      <Box
      display="flex"
      alignItems="center"
      h="100%"
      _focus={{ outline: 'none' }}
      _hover={{ outline: 'none' }}
      _active={{ outline: 'none' }}
    >
        <Link
          as={NextLink}
          href={item.path} passHref
          fontSize={{ base: 'sm', xl: 16 }}
          _hover={{ fontWeight: 600 }}
          _focus={{ outline: 'none' }}
          _active={{ outline: 'none' }}
          rel="noreferrer"
          pos="relative"
          color={transparent? 'white': "base.blue"}
          {...{
            fontWeight: router.pathname === item.path ? 700 : 500
          }}
        >
          {item.name}
        </Link>
    </Box>
    }
    </>
  )
}

const DesktopNavbar: React.FC<{ links: ILink[], topL:any[], transparent: boolean}> = ({ links, topL, transparent }: { links: ILink[], topL: any[], transparent: boolean}) => {
    return  (
      <Box>
        <Flex fontFamily={"Garamond"} bg={'base.blue'} justify={"space-between"} py={3}  px={{ base: 8, '2xl': 36 }}>
          <Flex color={'white '} gap={8}>
            <Flex align="center" gap={2} key={topL[0].title}>
              <Text textDecoration={"underline"}>{topL[0].title}</Text>
            </Flex>
            <Box>|</Box>
            <Flex align="center" gap={2} key={topL[1].title}>
              <Text>{topL[1].title}</Text>
            </Flex>
          </Flex>
          <Flex  color={'white'} gap={8}>
            <Box borderBottomWidth={2} borderColor={'base.blue'} px={1}>G. W. Arthur Ministries</Box>
            
            <Menu >
              <MenuButton as={Box}>EN</MenuButton>
              <MenuList w={'100%'} zIndex={100} color={"base.blue"} fontWeight={500}>
                <MenuItem w={'100%'}>PT</MenuItem>
                <MenuItem w={'100%'}>FR</MenuItem>
                <MenuItem w={'100%'}>ES</MenuItem>
                <MenuItem w={'100%'}>CN</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Box
            h={24}
            top={transparent ? 12:  0}
            w="full"
            zIndex={10}
            pos={transparent? "absolute": "relative" }       
            p={0}
            bg={transparent? 'transparent' :"white"}
            color={"base.gold"}
            display={{ base: 'none', xl: 'flex' }}
            borderBottomWidth={transparent? 0 : 1}
            borderColor={'base.blue'}
        >
            <Flex
                minW={'100%'}
                px={{ base: 8, '2xl': 36 }}
                justifyContent="space-between"
                align={"center"}
            >
              <Link as={NextLink} href="/" passHref _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
                <Box w={24}>
                  
                  {transparent ? 
                  <Image w={"120%"} src='/images/G W Arthur Logo-white.png' alt="gwarthur logo" />
                  :
                  <Image w={"90%"} src='/images/G W Arthur Logo.png' alt="gwarthur logo" />
                  }
                </Box>
              </Link>

              <Box>
                  <Flex align="center" h={'100%'}>
                      {links.map((item, idx) => (
                      <Fragment key={item.name}>
                          <NavbarLink item={item} transparent={transparent} />
                          {links.length !== idx + 1 && <Box mx={4} />}
                      </Fragment>
                      ))}
                  </Flex>
              </Box>
            </Flex>
        </Box>
      </Box>
    )
}
export default DesktopNavbar