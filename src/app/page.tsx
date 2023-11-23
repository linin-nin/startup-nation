'use client';
import Header from '@/components/header/Header';
import { useEffect } from 'react'
import Hero from '@/components/Hero';
import VideoContent from '@/components/VideoContent';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/footer/footer';
import Smooth from '@/components/smoothScroll';

export default function Home() {
 
  return (
    <main className="container padding-body font-body">
      <Smooth>
        <div>
          <Header/>
          <Hero/>
          <VideoContent/>
          <AboutUs/>
          <Footer/>
        </div>
      </Smooth>
    </main>
  )
}