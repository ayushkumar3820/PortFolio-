import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle'

const Experiences = [
    {
        date: 'Mar 2026 – Present',
        logo: '/images/genzverticals-logo.svg',
        position: 'Full Stack AI Developer',
        companyName: 'GenZVerticals',
        workFrom: 'Remote',
        website: 'https://www.genzcine.com/'
    },
    {
        date: 'Feb 2025 – Mar 2026',
        logo: 'https://weboum.com/image/weboum-footer-logo-1.png',
        position: 'Software Development Engineer-I',
        companyName: 'WebOum Technology Pvt. Ltd., Mohali, Punjab',
        workFrom: 'On-site',
        website: 'https://weboum.com/'
    },
    {
        date: 'Oct 2023 – Jan 2025',
        logo: '/images/Fitelologo.png',
        position: 'Software Development Engineer',
        companyName: 'Fitelo Pvt Ltd, Mohali, Punjab',
        workFrom: 'On-site/Hybrid',
        website: 'https://fitelo.co'
    }
]

const ExperienceSec = () => {
    return (
        <div className="wpo-work-area section-padding">
            <div className="container">
                <SectionTitle Title={'My Work Experience'} />
                <div className="wpo-work-wrap">
                    {Experiences.map((experience, index) => (
                        <div className="wpo-work-item" key={index}>
                            <ul>
                                <li className="date">{experience.date}</li>
                                <li className="logo">
                                    <img src={experience.logo} alt={experience.companyName} />
                                </li>
                                <li className="position">
                                    {experience.position}{' '}
                                    <span>
                                        {experience.companyName}{' '}
                                        <span>({experience.workFrom})</span>
                                    </span>
                                </li>
                                <li className="link">
                                    <Link href={experience.website} target="_blank">
                                        Go to website
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shape-wk">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_39_4214"
                            x="0"
                            y="0"
                            width="1500"
                            height="1500"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default ExperienceSec
