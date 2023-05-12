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
  Divider,
  IconButton,
  useDisclosure
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
    <Flex
      h={24}
      px={{ base: 8, xl: 2 }}
      bgColor={'base.600'}
      as="nav"
      w="full"
      shadow="sm"
      pos="fixed"
      zIndex={100}
      align="center"
      justify="space-between"
      display={{ base: 'flex', xl: 'none' }}
      color={'white'}
    >
      <Box>
        <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
            <Image src="/images/logo.png" h={16} alt="company logo" />
          </Link>
        </NextLink>
      </Box>

      <Box>
        <IconButton
          aria-label="toggle menu"
          onClick={() => onToggle()}
          icon={isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          bg="transparent"
          role="button"
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
                bgColor="white"
                color="base.600"
              >
                <Box py={2}>
                  {links.map((m, idx) => (
                    <Box key={idx}>
                      {m.children ? (
                        <Box>
                          <NextLink href={m.path} passHref>
                            <Link>
                              <Flex justify="start" pl={5} py={3}>
                                <Text fontWeight={700}>{m.name}</Text>
                              </Flex>
                            </Link>
                          </NextLink>
                          <Divider />
                        </Box>
                      ) : (
                        <>
                          <NextLink key={idx} href={m.path} passHref>
                            <Link>
                              <Flex justify="start" pl={5} py={3}>
                                <Text fontWeight={700}>{m.name}</Text>
                              </Flex>
                            </Link>
                          </NextLink>
                          <Divider />
                        </>
                      )}
                    </Box>
                  ))}
                  <a href="https://paystack.com/pay/gayo" target="_">
                    <Box
                      bg="white"
                      px={6}
                      py={2}
                      ml={12}
                      rounded={'md'}
                      color="gray.700"
                      cursor="pointer"
                      fontWeight={500}
                      borderWidth={1}
                      borderColor={'white'}
                      _hover={{
                        bg: 'base.600',
                        color: 'white'
                      }}
                    >
                      Donate
                    </Box>
                  </a>
                </Box>
              </Box>
            )}
          </Fade>
        </Box>
      </Box>
    </Flex>
  )
}

export default MobileNavbar
