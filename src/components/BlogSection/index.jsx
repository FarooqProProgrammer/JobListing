import React from 'react'
import Blog1 from "../../assets/BlogImgOne.jpeg"
import Blog2 from "../../assets/BlogImgTwo.jpeg"
import Blog3 from "../../assets/BlogImg Three.jpeg"
import Blog4 from "../../assets/BlogImgFour.jpeg"
import Blog5 from "../../assets/BlogImgFive.jpeg"
import Blog6 from "../../assets/BlogImgSix.jpeg"


export default function BlogSection() {
    return (
        <section class="bg-white py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-5xl mx-auto text-center">
                    <h2 class="text-4xl font-bold text-gray-800 mb-4">Latest Blog Posts</h2>
                    <p class="text-xl text-gray-600 mb-8">Stay up-to-date with our latest blog posts.</p>
                </div>
                <div class="flex flex-wrap -mx-4">
                    <div class="md:w-1/3 px-4 mb-8">
                        <div class="bg-white border border-gray-300 shadow-md p-8 rounded-lg">
                            <a href="#">
                                <img class="mb-6 rounded-md" src={Blog1}
                                    alt="Blog post image" />
                                <h3 class="text-2xl font-bold text-gray-800 mb-4">Blog Post Title</h3>
                            </a>
                            <p class="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                href="#">Read More</a>
                        </div>
                    </div>
                    <div class="md:w-1/3 px-4 mb-8">
                        <div class="bg-white border border-gray-300 shadow-md p-8 rounded-lg">
                            <a href="#">
                                <img class="mb-6 rounded-md" src={Blog2}
                                    alt="Blog post image" />
                                <h3 class="text-2xl font-bold text-gray-800 mb-4">Blog Post Title</h3>
                            </a>
                            <p class="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                href="#">Read More</a>
                        </div>
                    </div>
                    <div class="md:w-1/3 px-4 mb-8">
                        <div class="bg-white border border-gray-300 shadow-md p-8 rounded-lg">
                            <a href="#">
                                <img class="mb-6 rounded-md" src={Blog3}
                                    alt="Blog post image" />
                                <h3 class="text-2xl font-bold text-gray-800 mb-4">Blog Post Title</h3>
                            </a>
                            <p class="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                href="#">Read More</a>
                        </div>
                    </div>
                    <div class="md:w-1/3 px-4 mb-8">
                        <div class="bg-white border border-gray-300 shadow-md p-8 rounded-lg">
                            <a href="#">
                                <img class="mb-6 rounded-md" src={Blog4}
                                    alt="Blog post image" />
                                <h3 class="text-2xl font-bold text-gray-800 mb-4">Blog Post Title</h3>
                            </a>
                            <p class="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                href="#">Read More</a>
                        </div>
                    </div>
                    <div class="md:w-1/3 px-4 mb-8">
                        <div class="bg-white border border-gray-300 shadow-md p-8 rounded-lg">
                            <a href="#">
                                <img class="mb-6 rounded-md" src={Blog5}
                                    alt="Blog post image" />
                                <h3 class="text-2xl font-bold text-gray-800 mb-4">Blog Post Title</h3>
                            </a>
                            <p class="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                href="#">Read More</a>
                        </div>
                    </div>
                    <div class="md:w-1/3 px-4 mb-8">
                        <div class="bg-white border border-gray-300 shadow-md p-8 rounded-lg">
                            <a href="#">
                                <img class="mb-6 rounded-md" src={Blog6}
                                    alt="Blog post image" />
                                <h3 class="text-2xl font-bold text-gray-800 mb-4">Blog Post Title</h3>
                            </a>
                            <p class="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                href="#">Read More</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
