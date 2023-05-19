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
      bg={'base.yellow'}
      as="nav"
      w="full"
      shadow="sm"
      zIndex={100}
      align="center"
      justify="space-between"
      display={{ base: 'flex', xl: 'none' }}
      color={'white'}
    >
      <Box>
        <Link as={NextLink} href="/" passHref _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
          <Image src="/images/logo-2.png" h={16} alt="company logo" />
        </Link>
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
  )
}

export default MobileNavbar
