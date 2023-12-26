import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import Listen from '@/components/Home/Listen'
import PageHero from '@/components/Blocks/Hero/pageHero'
import About from '@/components/Biography/About'


const Home: NextPage = () => {
  return (
    <Layout>
        <PageHero title='Biography' />
        <About />
    </Layout>
  )
}

export default Home
