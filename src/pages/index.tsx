import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import Hero from '@/components/Blocks/Hero/Index'
import JuiceCover from '@/components/Blocks/JuiceCover'
import About from '@/components/Blocks/About'
import Explore from '@/components/Blocks/Explore'
import Products from '@/components/Blocks/Product/Index'

const Home: NextPage = () => {
  return (
    <Layout>
      {/* <Hero
        align="left"
        cover="/images/welcome.png"
        title={[
          [
            { text: 'We merge', color: 'white' },
            { text: 'aesthetics', color: 'base.yellow' }
          ],
          [
            { text: 'with', color: 'white' },
            { text: 'business goals', color: 'base.yellow' }
          ]
        ]}
      />
      <Products />
      <Explore />
      <About />
      <JuiceCover /> */}
    </Layout>
  )
}

export default Home
