import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import Hero from '@/components/Blocks/Hero/Index'
import Philosophy from '@/components/Home/Philosophy'
import ProfessionalService from '@/components/Home/ProService'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero
        align="left"
        cover="/images/hero.png"
        title={[
          [
            { text: 'Make it', color: 'white' }
          ],
          [
            { text: 'stand out', color: 'white' },
          ]
        ]}
      />
      <Philosophy />
      <ProfessionalService />
    </Layout>
  )
}

export default Home
