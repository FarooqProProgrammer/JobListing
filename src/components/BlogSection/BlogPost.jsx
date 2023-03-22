import React from 'react'

export default function BlogPost({ img, Title, Description }) {
    return (
        <div class="md:w-1/3 px-4 mb-8">
            <div class="bg-white border border-gray-300 shadow-md p-8 rounded-lg">
                <a href="#">
                    <img class="mb-6 rounded-md" src={img}
                        alt="Blog post image" />
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">{Title}</h3>
                </a>
                <p class="text-lg text-gray-600 mb-4">{Description}</p>
                <a class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    href="#">Read More</a>
            </div>
        </div>
    )
}
