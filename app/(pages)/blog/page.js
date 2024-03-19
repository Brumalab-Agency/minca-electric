"use client"
import { TituloBlog } from '@/components/blog/TituloBlog'
import { HeroBlog } from '@/components/blog/HeroBlog'
import { HeroContext } from '@/components/reusable/HeroContext'
import { Footer } from '@/components/home/Footer'

const Blog = () => {  
  return (
    <>
        <HeroContext titulo="Blog" ocultar="hidden"/>
        <HeroBlog/>
        <TituloBlog/>
        <Footer/>
    </>
  )
}

export default Blog