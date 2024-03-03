import { useRouter } from 'next/router'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react'

import { Box, ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

import '../../public/fonts/fonts.css'

import Footer from '@/components/Footer'
import DesktopNavbar from '@/components/Navbar/Desktop'
import MobileNavbar from '@/components/Navbar/Mobile'
import { TbPhone, TbMail } from "react-icons/tb";

import { theme } from '@/theme/theme'
import { FC, useEffect, useState } from 'react'
import "public/effects.css"
import "public/about.css"
import useOnScroll from '@/hooks/useOnScroll'
import { getLanguage } from '@/helpers/misc'
import NavText from '@/internationalization/navs'
import { QueryClient, QueryClientProvider } from 'react-query'



function MyApp({ Component, pageProps }: {Component: FC<object>, pageProps: object}) {
  const router = useRouter()
  const queryClient = new QueryClient();

  const noNavPages: string[] = []
  const noFooterPages = ['/404']

  const showNav = !noNavPages.includes(router.pathname)
  const showFooter = !noFooterPages.includes(router.pathname)
  const scrollPosition = useOnScroll();

  const [lang,setLang] = useState('en')
  const text = NavText[lang]
  const defaultLang =  getLanguage()

  useEffect(() => {
    setLang(defaultLang)
  },[defaultLang]) 


  const links = [
    { name: `${text.navHome}`, path: '/' },
    { name: `${text.navBiography}`, path: '/biography' },
    { name: 'Ministry', path: '/ministry' },
    // { name: `${text.navPodcast}`, path: '/' },
    { name: `${text.navContact}`, path: '/contact' },
    { name: `${text.navPartner}`, path: '/partner', type: 'button' }
  ]

  const topLeft = [
    { title: 'info@georgewilfredarthur.com'},
    { title: '+233 245 659 875' }
  ]

  return (
    <QueryClientProvider client={queryClient}>
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
                <DesktopNavbar links={links} topL={topLeft} transparent={scrollPosition < 167 ? true: false} />
                <MobileNavbar links={links} />
              </>
            )}

            <Component {...pageProps} />

            {showFooter && <Footer />}
          </Box>
          <Analytics />
          <SpeedInsights/>
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
