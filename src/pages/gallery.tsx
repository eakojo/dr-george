import type { NextPage } from 'next'
import Layout from '@/components/Layout/Index'
import Listen from '@/components/Home/Listen'
import PageHero from '@/components/Blocks/Hero/pageHero'
import { useEffect, useState } from 'react'
import { getLanguage } from '@/helpers/misc'
import galleryText from '@/internationalization/gallery'
import GalleryImages from '@/components/Gallery/GalleryImages'


const Home: NextPage = () => {
    const [lang,setLang] = useState('en')
    const text = galleryText[lang]
    const defaultLang =  getLanguage()

    useEffect(() => {
        setLang(defaultLang)
    },[defaultLang])
  return (
    <Layout>
        <PageHero title={text.galleryHeroText} />
        <GalleryImages />
    </Layout>
  )
}

export default Home
