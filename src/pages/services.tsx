import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import Hero from '@/components/Blocks/Hero/serviceHero'
import RenownedService from '@/components/Blocks/Service/RenowedService'
import BlankCover from '@/components/Blocks/Service/blankCover'
import PremiumService from '@/components/Blocks/Service/PremiumService'
import ExpectAdvice from '@/components/Blocks/Service/ExpectAdvice'


const Home: NextPage = () => {
  return (
    <Layout>
      <Hero
        title={[
          [
            { text: 'Make it', color: 'white' }
          ],
          [
            { text: 'stand out', color: 'white' },
          ]
        ]}
      />
      <RenownedService />
      <BlankCover />
      <PremiumService />
      <ExpectAdvice />
    </Layout>
  )
}

export default Home
