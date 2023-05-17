import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import Hero from '@/components/Blocks/Hero/aboutHero'
import AboutUs from '@/components/Blocks/About/AboutUs'
import WhoWeAre from '@/components/Blocks/About/WhoWeAre'
import CFO from '@/components/Blocks/About/CFO'
import Team from '@/components/Blocks/About/Team'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <WhoWeAre />
      <CFO />
      <Team />
    </Layout>
  )
}

export default Home
