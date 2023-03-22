import React from 'react'
import Navbar from './components/Navbar'
import Google from './components/Google'
import Statstics from './components/Statstics/Statstics'
import GotTalent from './components/GotTalent/GotTalent'
import Talent from './components/NeedTalent/Talent'
import Testimonial from './components/Testimonial'
import Features from './components/Features'
import BlogSection from './components/BlogSection'

export default function App() {
  return (
    <div>
      <Navbar />
      <Google />
      <Statstics />
      <GotTalent />
      <Talent />
      <Testimonial />
      <Features />
      <BlogSection />
    </div>
  )
}
