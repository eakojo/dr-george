import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import HeroDesktop from '@/components/Blocks/Hero/homeHero'
import Newsletter from '@/components/Home/Newsletter'
import Latest from '@/components/Home/Latest'
import AudioMessages from '@/components/Home/AudioMessages'
import Social from '@/components/Home/Social'
import AskDrGeorge from '@/components/Home/AskDrGeorge'
import Listen from '@/components/Home/Listen'
import { useEffect } from 'react'
import { getCaptivateToken } from '@/service/captivate'
import Testimony from '@/components/Home/Testimony'


const Home: NextPage = () => {
  useEffect(() => {
    getCaptivateToken()
  },[])

  return (
    <Layout>
      <HeroDesktop />
      <Newsletter />
      <Latest />
      <AudioMessages />
      <Social />
      <Testimony />
      <AskDrGeorge />
      <Listen />
    </Layout>
  )
}

export default Home
