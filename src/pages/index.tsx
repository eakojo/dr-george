import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import HeroDesktop from '@/components/Blocks/Hero/homeHero'
import About from '@/components/Home/About'

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroDesktop />
      <About />
    </Layout>
  )
}

export default Home
