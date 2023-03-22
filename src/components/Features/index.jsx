import React from 'react'
import FeaturesOne from "../../assets/FeatureOne.png"
import FeaturesTwo from "../../assets/FeatureTwo.png"
import "./Feature.css"
import { Link } from 'react-router-dom'


export default function Features() {
    return (
        <div className="wf-section">
            <div className="container container-md w-container">
                <div className="section-wrap">
                    <div className="w-layout-grid grid_2-card-links">
                        <div className="h-link-card">
                            <div id="w-node-_25986b62-5393-856c-788a-98d4b8fcb6ac-2d825df7" className="h-link-card_graphic">
                                <div className="h-link-card_img pink">
                                    <img src={FeaturesOne} loading="lazy" sizes="(max-width: 479px) 63vw, 300px" srcset="https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%2520-%2520Featured-p-500.png 500w, https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%2520-%2520Featured-p-800.png 800w, https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%2520-%2520Featured-p-1080.png 1080w, https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%2520-%2520Featured-p-1600.png 1600w, https://assets.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128741f87e63e7_AGT%20-%20Featured.png 2000w" alt="Let us show you off - get featured " className="h-card-img-internal" />
                                </div>
                            </div>
                            <div className="link-card-content">
                                <div className="pre-headline mb-24-lg">Get Featured</div>
                                <h3 className="mb-24-lg">Let us show you off</h3>
                                <p class="mb-24-lg">Apply to be featured and we'll highlight your profile to top recruiters and companies searching htmlFor your specific skills.<br/><br/>Oh, it's also 100% free.</p>
                                    <Link to="/" className="button button-secondary w-button">Learn more</Link>
                                </div>
                            </div>
                            <div className="h-link-card">
                                <div id="w-node-_94ca6a38-3fb4-fa16-6216-9c5fe628e185-2d825df7" className="h-link-card_graphic">
                                    <div className="h-link-card_img">
                                        <img src={FeaturesTwo} alt="Salary calculator" className="h-card-img-internal" /></div>
                                </div>
                                <div className="link-card-content">
                                    <div className="pre-headline mb-24-lg">Salary Calculator</div>
                                    <h3 className="mb-24-lg">Know your worth</h3>
                                    <p class="mb-24-lg">We have the data. Research by job title, industry, and company size to find your salary range and be prepared to nail your negotiations.</p>
                                    <Link to="/" className="button button-secondary w-button">Calculate your salary</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}
