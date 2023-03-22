import React from 'react'
import Blog1 from "../../assets/BlogImgOne.jpeg"
import Blog2 from "../../assets/BlogImgTwo.jpeg"
import Blog3 from "../../assets/BlogImg Three.jpeg"
import Blog4 from "../../assets/BlogImgFour.jpeg"
import Blog5 from "../../assets/BlogImgFive.jpeg"
import Blog6 from "../../assets/BlogImgSix.jpeg"
import BlogPost from './BlogPost'


export default function BlogSection() {
    return (
        <section class="bg-white py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-5xl mx-auto text-center">
                    <h2 class="text-4xl font-bold text-gray-800 mb-4">Latest Blog Posts</h2>
                    <p class="text-xl text-gray-600 mb-8">Stay up-to-date with our latest blog posts.</p>
                </div>
                <div class="flex flex-wrap -mx-4">
                    
                    <BlogPost img={Blog1} Description={"Even for senior engineers, job searches can be confusing, frustrating affairs. When you're a junior engineer looking for your first job"} Title={"The Truth About Finding Your First Engineering Job"}/>
                    <BlogPost img={Blog2} Description={"It feels like the rise of remote works has been a top conversation in tech for years, but despite the enthusiasm and attention"} Title={"Why Naval Ravikant Thinks Remote Work Is The Future"}/>
                    <BlogPost img={Blog3} Description={"You're trying to evaluate the company while still impressing your interviewers, and that balance can be tricky"} Title={"30 Questions to Ask Before Joining a Startup"}/>
                    <BlogPost img={Blog4} Description={"Few tech sectors are capturing the public’s collective imagination as much as space. Privatized spaceflight, or “NewSpace,” is attracting"} Title={"18 Innovative Space Startups Hiring Now"}/>
                    <BlogPost img={Blog5} Description={"Either Crypto has a great PR team, or the internet-based medium of exchange is truly taking the world by storm"} Title={"19 Hot Crypto Startups Hiring Remotely in 2022"}/>
                    <BlogPost img={Blog6} Description={"It is no surprise by now that women make great leaders. In the US alone, women-led businesses generated more than 1.8 trillion dollars"} Title={"20 Women-Led Startups Expanding Their Remote Teams in 2022"}/>
                    
                    
                </div>
            </div>
        </section>
    )
}
