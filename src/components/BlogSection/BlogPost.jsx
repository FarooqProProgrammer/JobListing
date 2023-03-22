import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogPost({ img, Title, Description }) {
    return (
        <div className="md:w-1/3 px-4 mb-8">
            <div className="bg-white border border-gray-300 shadow-md p-8 rounded-lg">
                <Link to="/">
                    <img class="mb-6 rounded-md" src={img}
                        alt="Blog post image" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{Title}</h3>
                </Link>
                <p className="text-lg text-gray-600 mb-4">{Description}</p>
                <Link className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    to="/">Read More</Link>
            </div>
        </div>
    )
}
