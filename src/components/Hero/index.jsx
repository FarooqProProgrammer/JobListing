import React from 'react'
import HeroSvg from "../../assets/Hero.svg"

export default function Hero() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl lg:text-6xl mb-4 font-medium text-gray-900">AngelList Talent is
                    <br class="hidden lg:inline-block" />
                        <p> now Wellfound</p>
                    </h1>
                    <p class="mb-8 leading-relaxed">Your favorite startup community is back, with a twist. Since 2013, we’ve built our brand on fostering new journeys for startup teams and talent. Now, we’re taking you on ours.</p>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src={HeroSvg} />
                </div>
            </div>
        </section>
    )
}
