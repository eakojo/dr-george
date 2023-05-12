import React, {Fragment} from 'react'
import { As, Box, Icon, Image, Link, Text } from "@chakra-ui/react"
import NextLink from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
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
      <NextLink href={item.path} passHref>
        <Text as={"a"}
          fontSize={{ base: 'sm', xl: 16 }}
          _hover={{ fontWeight: 600 }}
          _focus={{ outline: 'none' }}
          _active={{ outline: 'none' }}
          rel="noreferrer"
          pos="relative"
          color={"base.black"}
          {...{
            fontWeight: router.pathname === item.path ? 600 : 500
          }}
        >
          {item.name}
        </Text>
      </NextLink>
    </Box>
  )
}

const DesktopNavbar: React.FC<{ links: ILink[]}> = ({ links }: { links: ILink[]}) => {
    return <Box
        h={24}
        top={0}
        w="full"
        zIndex={10}
        pos="relative"
        align="center"
        p={0}
        bg="base.yellow"
        display={{ base: 'none', xl: 'flex' }}
    >
        <Box
            display={"flex"}
            minW={'100%'}
            px={{ base: 4, '2xl': 28 }}
            justifyContent="space-between"
        >
            <NextLink href="/" passHref>
                <Text as="a" _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
                    <Image src="/images/logo-2.png" h={16} alt="wibexly logo" mt={4}/>
                </Text>
            </NextLink>

            <Box ml={24}>
                <Box display={"flex"} align="center" h={'100%'}>
                    {links.map((item, idx) => (
                    <Fragment key={item.name}>
                        <NavbarLink item={item} />
                        {links.length !== idx + 1 && <Box mx={4} />}
                    </Fragment>
                    ))}
                </Box>
            </Box>
        </Box>
    </Box>
}
export default DesktopNavbar