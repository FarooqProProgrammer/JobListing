import React from 'react'
import GotTalentPng from "../../assets/GotTalent.png"
import { Box } from '@mui/material'


export default function GotTalent() {
    return (
        <section className="text-gray-600 body-font">
            <Box className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <Box className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={GotTalentPng} />
                </Box>
                <Box className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Why job seekers
                        <br className="hidden lg:inline-block" />love us
                    </h1>
                    <p className="mb-8 leading-relaxed flex gap-5">
                        <Box classNameName="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" classNameName="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </Box>
                        Unique jobs at startups and tech companies you can't find anywhere else</p>
                    <p className="mb-8 leading-relaxed flex gap-5">
                        <Box classNameName="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" classNameName="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                            </svg>

                        </Box>
                        Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</p>
                    <p className="mb-8 leading-relaxed flex gap-5">
                        <Box classNameName="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" classNameName="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                            </svg>
                        </Box>
                        Everything you need to know to job search - including seeing salary and stock options upfront when looking</p>
                    <p className="mb-8 leading-relaxed flex gap-5">
                        <Box classNameName="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" classNameName="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
                        </Box>
                        Connect directly with founders at top startups - no third party recruiters allowed.</p>

                    <Box className="flex justify-center ">

                        <button className="inline-flex text-black shadow-md bg-white-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More</button>
                        <button className="ml-4 inline-flex text-gray-100 shadow-md bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Sign up now</button>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}
