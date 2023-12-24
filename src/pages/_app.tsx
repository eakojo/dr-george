import { useRouter } from 'next/router'

import { Box, ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

import '../../public/fonts/fonts.css'

import Footer from '@/components/Footer'
import DesktopNavbar from '@/components/Navbar/Desktop'
import MobileNavbar from '@/components/Navbar/Mobile'
import { TbPhone, TbMail } from "react-icons/tb";

import { theme } from '@/theme/theme'
import { FC } from 'react'
import "public/effects.css"


function MyApp({ Component, pageProps }: {Component: FC<object>, pageProps: object}) {
  const router = useRouter()

  const noNavPages: string[] = []
  const noFooterPages = ['/404']

  const showNav = !noNavPages.includes(router.pathname)
  const showFooter = !noFooterPages.includes(router.pathname)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Biography', path: '/biography' },
    { name: 'Podcast', path: '/podcast' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Partner with us', path: '/partner', type: 'button' }
  ]

  const topLeft = [
    { title: 'info@gwarthur.org'},
    { title: '+233 245 268 415' }
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
                <DesktopNavbar links={links} topL={topLeft} transparent={true} />
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
