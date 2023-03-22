import React from 'react'
import BlogSection from '../components/BlogSection'
import Features from '../components/Features'
import Google from '../components/Google'
import GotTalent from '../components/GotTalent/GotTalent'
import Hero from '../components/Hero'
import Talent from '../components/NeedTalent/Talent'
import Statstics from '../components/Statstics/Statstics'
import Testimonial from '../components/Testimonial'


export default function Home() {
    return (
        <div>
            <Hero />
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
