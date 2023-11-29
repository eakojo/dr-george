import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import HeroDesktop from '@/components/Blocks/Hero/homeHero'

const Home: NextPage = () => {
  return (
    <Layout>
      <HeroDesktop />
    </Layout>
  )
}

export default Home
