import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import Hero from '@/components/Blocks/Hero/homeHero'
import Philosophy from '@/components/Home/Philosophy'
import ProfessionalService from '@/components/Home/ProService'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero/>
      <Philosophy />
      <ProfessionalService />
    </Layout>
  )
}

export default Home
