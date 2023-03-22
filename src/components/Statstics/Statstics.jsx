import React from 'react'
import "./Stats.css"

export default function Statstics() {
    return (
        <div class="flex flex-wrap justify-center px-1 mt-20">
		<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
			<div class="bg-white shadow-md rounded-md p-6 text-center">
				<i class="fas fa-users text-3xl text-blue-500 mb-2"></i>
				<h3 class="text-3xl font-bold mb-2">500+</h3>
				<p class="text-gray-600">Jobs posted daily</p>
			</div>
		</div>
		<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
			<div class="bg-white shadow-md rounded-md p-6 text-center">
				<i class="fas fa-briefcase text-3xl text-blue-500 mb-2"></i>
				<h3 class="text-3xl font-bold mb-2">10k+</h3>
				<p class="text-gray-600">Active job listings</p>
			</div>
		</div>
		<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
			<div class="bg-white shadow-md rounded-md p-6 text-center">
				<i class="fas fa-clock text-3xl text-blue-500 mb-2"></i>
				<h3 class="text-3xl font-bold mb-2">24/7</h3>
				<p class="text-gray-600">Customer support</p>
			</div>
		</div>
	</div>
    )
}
