import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import Listen from '@/components/Home/Listen'
import PageHero from '@/components/Blocks/Hero/pageHero'
import About from '@/components/Biography/About'
import { useEffect, useState } from 'react'
import { getLanguage } from '@/helpers/misc'
import aboutText from '@/internationalization/about'


const Home: NextPage = () => {
    const [lang,setLang] = useState('en')
    const text = aboutText[lang]
    const defaultLang =  getLanguage()

    useEffect(() => {
        setLang(defaultLang)
    },[defaultLang])
  return (
    <Layout>
        <PageHero title={text.aboutHeroText} />
        <About />
    </Layout>
  )
}

export default Home
