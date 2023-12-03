import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import HeroDesktop from '@/components/Blocks/Hero/homeHero'
import About from '@/components/Home/About'
import Message from '@/components/Home/Message'

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroDesktop />
      <About />
      <Message />
    </Layout>
  )
}

export default Home
