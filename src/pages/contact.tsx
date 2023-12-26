import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import Listen from '@/components/Home/Listen'
import PageHero from '@/components/Blocks/Hero/pageHero'
import About from '@/components/Biography/About'
import Info from '@/components/Contact/info'
import Ask from '@/components/Contact/ask'


const Home: NextPage = () => {
  return (
    <Layout>
        <PageHero title='Get In Touch' />
        <Info />
        <Ask />
        <Listen />
    </Layout>
  )
}

export default Home
