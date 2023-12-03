import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import HeroDesktop from '@/components/Blocks/Hero/homeHero'
import About from '@/components/Home/About'
import Message from '@/components/Home/Message'
import Ministry from '@/components/Home/Ministry'

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroDesktop />
      <About />
      <Message />
      <Ministry />
    </Layout>
  )
}

export default Home
