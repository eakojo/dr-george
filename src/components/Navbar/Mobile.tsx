import { FC } from 'react'
import NextLink from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  Box,
  Text,
  Flex,
  Link,
  Fade,
  Image,
  IconButton,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'

interface ILink {
  name: string
  path: string
  weight?: string
  width?: number
  height?: number
  children?: { name: string; path: string }[]
}

interface IProps {
  links: ILink[]
}

const MobileNavbar: FC<IProps> = ({ links }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box display={{ base: 'flex', xl: 'none' }} flexDirection="column">
       <Flex fontFamily={"Garamond"} bg={'base.blue'} justify={"space-between"} py={3}  px={{ base: 8, '2xl': 36 }} color={"white"}>
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
      <Flex
        h={20}
        px={{ base: 8, xl: 2 }}
        as="nav"
        w="full"
        shadow="sm"
        zIndex={100}
        align="center"
        justify="space-between"
        color={'white'}
      >
        <Box>
          <Link as={NextLink} href="/" passHref _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
            <Image src="/images/G W Arthur Logo.png" h={16} alt="company logo" />
          </Link>
        </Box>

        <Box>
          <IconButton
            aria-label="toggle menu"
            onClick={() => onToggle()}
            icon={isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            bg="transparent"
            role="button"
            color={"base.blue"}
          />
          <Box pos="relative">
            <Fade in={isOpen}>
              {isOpen && (
                <Box
                  w={72}
                  right={4}
                  shadow="lg"
                  zIndex={10}
                  rounded="md"
                  pos="absolute"
                  bgColor="black"
                  color="base.yellow"
                >
                  <Box py={2}>
                    {links.map((m, idx) => (
                      <Box key={idx}>
                        {m.children ? (
                          <Box>
                            <NextLink href={m.path} passHref>
                              <Flex justify="start" pl={5} py={3}>
                                <Text fontWeight={700}>{m.name}</Text>
                              </Flex>
                            </NextLink>
                          </Box>
                        ) : (
                          <>
                            <NextLink key={idx} href={m.path} passHref>
                              <Flex justify="start" pl={5} py={3}>
                                <Text fontWeight={700}>{m.name}</Text>
                              </Flex>
                            </NextLink>
                          </>
                        )}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Fade>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default MobileNavbar
