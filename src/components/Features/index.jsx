import React from 'react'
import FeaturesOne from "../../assets/FeatureOne.png"
import FeaturesTwo from "../../assets/FeatureTwo.png"
import "./Feature.css"

export default function Features() {
    return (
        <div class="wf-section">
            <div class="container container-md w-container">
                <div class="section-wrap">
                    <div class="w-layout-grid grid_2-card-links">
                        <div class="h-link-card">
                            <div id="w-node-_25986b62-5393-856c-788a-98d4b8fcb6ac-2d825df7" class="h-link-card_graphic">
                                <div class="h-link-card_img pink">
                                    <img src={FeaturesOne} loading="lazy" sizes="(max-width: 479px) 63vw, 300px" srcset="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%2520-%2520Featured-p-500.png 500w, https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%2520-%2520Featured-p-800.png 800w, https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%2520-%2520Featured-p-1080.png 1080w, https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%2520-%2520Featured-p-1600.png 1600w, https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%20-%20Featured.png 2000w" alt="Let us show you off - get featured " class="h-card-img-internal" />
                                </div>
                            </div>
                            <div class="link-card-content">
                                <div class="pre-headline mb-24-lg">Get Featured</div>
                                <h3 class="mb-24-lg">Let us show you off</h3>
                                <p class="mb-24-lg">Apply to be featured and we'll highlight your profile to top recruiters and companies searching for your specific skills.<br/><br/>Oh, it's also 100% free.</p>
                                    <a href="/candidates/featured" class="button button-secondary w-button">Learn more</a>
                                </div>
                            </div>
                            <div class="h-link-card">
                                <div id="w-node-_94ca6a38-3fb4-fa16-6216-9c5fe628e185-2d825df7" class="h-link-card_graphic">
                                    <div class="h-link-card_img">
                                        <img src={FeaturesTwo} alt="Salary calculator" class="h-card-img-internal" /></div>
                                </div>
                                <div class="link-card-content">
                                    <div class="pre-headline mb-24-lg">Salary Calculator</div>
                                    <h3 class="mb-24-lg">Know your worth</h3>
                                    <p class="mb-24-lg">We have the data. Research by job title, industry, and company size to find your salary range and be prepared to nail your negotiations.</p>
                                    <a href="/salaries" class="button button-secondary w-button">Calculate your salary</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}
