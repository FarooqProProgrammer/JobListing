import React from 'react'
import Testimonial1 from "../../assets/testimonial.jpg"
import Testimonial2 from "../../assets/testimonial1.jpg"
import Testimonial3 from "../../assets/testimonial3.jpg"

export default function Testimonial() {
    return (
        <section class="bg-white">
            <div class="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center mb-8">From our users</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <div class="flex items-center mb-4">
                            <img class="w-12 h-12 rounded-full mr-4" src={Testimonial1} alt="Client Avatar" />
                            <div>
                                <h3 class="text-lg font-semibold">Jane Doe</h3>
                                <p class="text-gray-600">Marketing Professional</p>
                            </div>
                        </div>
                        <p class="text-gray-800 mb-4">"I found my dream job through this website. The user interface is intuitive and easy to navigate."</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <div class="flex items-center mb-4">
                            <img class="w-12 h-12 rounded-full mr-4" src={Testimonial2} alt="Client Avatar" />
                            <div>
                                <h3 class="text-lg font-semibold">John Smith</h3>
                                <p class="text-gray-600">Software Engineer</p>
                            </div>
                        </div>
                        <p class="text-gray-800 mb-4">"Thanks to this job portal, I was able to land a job with a great company in just a few weeks. Highly recommended!"</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-lg">
                        <div class="flex items-center mb-4">
                            <img class="w-12 h-12 rounded-full mr-4" src={Testimonial3} alt="Client Avatar" />
                            <div>
                                <h3 class="text-lg font-semibold">Sarah Johnson</h3>
                                <p class="text-gray-600">Graphic Designer</p>
                            </div>
                        </div>
                        <p class="text-gray-800 mb-4">"I was really impressed with the job listings on this site. There were so many great opportunities to choose from!"</p>
                    </div>
                    
                </div>
            </div>
        </section>

    )
}
