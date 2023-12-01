import React, {Fragment} from 'react'
import { Box, Flex, Icon, Image, Link, Text } from "@chakra-ui/react"
import NextLink from 'next/link'
import { useRouter } from 'next/router'


interface ILink {
  name: string
  path: string
  weight?: string
  width?: number
  height?: number
  children?: { name: string; path: string }[]
}
const NavbarLink: React.FC<{ item: ILink }> = ({ item }: { item: ILink }) => {
  const router = useRouter()
  return (
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
          color={"base.gold"}
          {...{
            fontWeight: router.pathname === item.path ? 600 : 500
          }}
        >
          {item.name}
        </Link>
    </Box>
  )
}

const DesktopNavbar: React.FC<{ links: ILink[], topL:any[]}> = ({ links, topL }: { links: ILink[], topL: any[]}) => {
    return  (
      <Box>
        <Flex bg={'base.blue-dark'} justify={"space-between"} py={4}  px={{ base: 4, '2xl': 28 }}>
          <Flex color={'white '} gap={4}>
            {topL.map(item => (
              <Flex align="center" gap={2} key={item.title}>
                <Icon as={item.icon} boxSize={6} />
                <Text>{item.title}</Text>
              </Flex>
            ))}
          </Flex>
          <Flex  color={'white'} gap={3}>
            <Box borderBottomWidth={2} borderColor={'base.blue'} px={1}>English</Box>
            <Text>Portuguese</Text>
            <Text>French</Text>
            <Text>Spanish</Text>
            <Text>Chinese</Text>
          </Flex>
        </Flex>
        <Box
            h={24}
            top={0}
            w="full"
            zIndex={10}
            pos="relative"        
            p={0}
            bg="white"
            color={"base.gold"}
            display={{ base: 'none', xl: 'flex' }}
            borderBottomWidth={1}
            borderColor={'base.blue'}
        >
            <Flex
                minW={'100%'}
                px={{ base: 4, '2xl': 28 }}
                justifyContent="space-between"
                align={"center"}
            >
              <Box color={'base.gold'} w="250px">
                <Text fontSize={20}>G. W. Arthur</Text>
                <Text fontWeight={700} letterSpacing={5} fontSize={16}>Ministries</Text>
              </Box>

              <Link as={NextLink} href="/" passHref _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
                <Box w={28} top={2} position={"relative"}>
                  <Image w={"100%"} src='/images/G W Arthur Logo.png' />
                </Box>
              </Link>

              <Box>
                  <Flex align="center" h={'100%'}>
                      {links.map((item, idx) => (
                      <Fragment key={item.name}>
                          <NavbarLink item={item} />
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