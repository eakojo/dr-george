import { useRouter } from 'next/router'

import { Box, ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

import '../../public/fonts/fonts.css'

import Footer from '@/components/Footer'
import DesktopNavbar from '@/components/Navbar/Desktop'
import MobileNavbar from '@/components/Navbar/Mobile'

import { theme } from '@/theme/theme'
import { FC } from 'react'

function MyApp({ Component, pageProps }: {Component: FC<object>, pageProps: object}) {
  const router = useRouter()

  const noNavPages: string[] = []
  const noFooterPages = ['/404']

  const showNav = !noNavPages.includes(router.pathname)
  const showFooter = !noFooterPages.includes(router.pathname)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Service', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <ChakraProvider theme={theme} resetCSS>
      <AnimatePresence mode='wait'>
        <motion.div
          key={router.pathname}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1,
              transition: { duration: 0.5 }
            }
          }}
        >
          <Box bgColor="white" pos="relative" overflow="hidden">
            {showNav && (
              <>
                <DesktopNavbar links={links} />
                <MobileNavbar links={links} />
              </>
            )}

            <Component {...pageProps} />

            {showFooter && <Footer />}
          </Box>
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
