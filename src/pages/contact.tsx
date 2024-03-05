import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import Listen from '@/components/Home/Listen'
import PageHero from '@/components/Blocks/Hero/pageHero'
import About from '@/components/Biography/About'
import Info from '@/components/Contact/info'
import Ask from '@/components/Contact/ask'
import { useEffect, useState } from 'react'
import { getLanguage } from '@/helpers/misc'
import contactText from '@/internationalization/contact'
import Appointment from '@/components/Contact/appointment'


const Home: NextPage = () => {
  const [lang,setLang] = useState('en')
  const text = contactText[lang]
  const defaultLang =  getLanguage()

  useEffect(() => {
    setLang(defaultLang)
  },[defaultLang])

  return (
    <Layout>
        <PageHero title={text.contactHeroText} />
        <Info />
        <Ask />
        <Appointment />
        <Listen />
    </Layout>
  )
}

export default Home
