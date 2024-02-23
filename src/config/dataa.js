import SamuelOni from '@/assets/image/samuel-oni.png';
import Skills, { DemoDay, OnlineMentoring } from '@/components/courses/explore-programmes';
import CoreValueIcon from '@/assets/icons/core-values.png';
import CoreMissionIcon from '@/assets/icons/mission-icon.png';
import VisionIcon from '@/assets/icons/vision-icon.png';
import MoyoHicks from '@/assets/experts/moyo-hicks.jpg';
import SegunAllen from '@/assets/experts/segun-allen.png';
import Hannat from '@/assets/experts/hannat.png';
import { ABOUT_US_URL, FAQ_URL } from './paths';

export const testimonials = [
    {
        image: SamuelOni,
        name: 'Samuel Oni',
        position: 'Data Analyst',
        review: '"Techskill Accelerate is what I needed. Techskill is that Platform you need to gain the confidence to be able to call yourself a data analyst. My Tutor is good at what he does and I like the mentorship part of Techskill Accelerate too."'
    },
    {
        image: SamuelOni,
        name: 'Violet Simon',
        position: 'Business Analyst',
        review: `"The Business Analysis class is indeed a transformative journey that has pushed the boundaries of my understanding, demanding attention to details, critical thinking and adaptability."`
    },
    {
        image: SamuelOni,
        name: 'Peace David',
        position: 'Product Manager',
        review: `TechSkill Accelerate has been a game-changer for my career as a project manager. Their project management training program equipped me with essential skills and practical knowledge. I highly recommend TechSkill Accelerate for professionals seeking career advancement and top-notch training. Thank you for empowering my success as a project manager.`
    }
];

export const footerData = {
    company: [
        {
            title: 'About us',
            href: ABOUT_US_URL
        },
        {
            title: 'Courses',
            href: '/explore-courses?tab=0'
        },
        {
            title: 'Offerings',
            href: '/explore-courses?tab=0'
        },
        {
            title: 'Find a Talent',
            href: "#"
        },
        {
            title: 'FAQs',
            href: FAQ_URL
        },
        // {
        //     title: 'Pricing',
        //     href: "#"
        // },
        // {
        //     title: 'Reach us',
        //     href: "#"
        // },
    ],
    contact: [
        {
            title: 'Office 6917, 182-184 High Street North, East Ham, London E6 2JA. United Kingdom.',
            href: "#"
        },
        {
            title: 'Phone Number: +44-7816-247-864',
            href: "#"
        },
        {
            title: 'Email: admissions@techskill.uk',
            href: "#"
        },
    ]
}

 export const tabData = (courses) => [
    { id: '0', title: 'Learn a skill', content: Skills(courses) },
    { id: '1', title: 'One-on-One mentoring', content: OnlineMentoring({imageWidth : ''}) },
    { id: '2', title: 'Practical', content: DemoDay() },
  ];

  export const us = [
    {
        icon: CoreValueIcon,
        title: 'Core values',
        description: 'Our core values are the guiding principles of our company and services to you. We are dedicated to supporting our students every step of the way, from training to career support.'
    },
    {
        icon: CoreMissionIcon,
        title: 'Our Mission',
        description: 'Our mission is to empower individuals with in-demand tech skills, bridging the gap between talent and job opportunities.'
    },
    {
        icon: VisionIcon,
        title: 'Our Vision',
        description: 'We aim to create a unique yet authentic presence, emphasising that anyone, regardless of their background, can thrive in tech and easily transition.'
    },
];

export const experts = [
    {
        name: 'Moyo Hicks',
        image: MoyoHicks,
        position: 'Product Management',
        linkedin: 'https://www.linkedin.com/in/moyohicks/'
    }
];

export const Faque = [
    {
        q: 'What skill does Techskill UK offers?',
        a: 'We offer courses in Business Analysis, product design, product management, project management and more'
    },
    {
        q: 'How long are the training programs?',
        a: 'Our typical courses run for 5 weeks with specialized training sessions, practice sessions and mentorship opportunities.'
    },
    {
        q: 'Do you offer any career support after course completion?',
        a: 'Absolutely! We provide professional CV writing, job application support, and a dedicated service to help our graduates find placement in the global job market. '
    },
    {
        q: 'How are your courses delivered?',
        a: 'Our courses are delivered online, allowing learners flexibility and access from anywhere in the world.'
    },
    {
        q: 'What is the cost of enrolling in a Techskill UK course?',
        a: 'Our standard course fee is 600 GBP. However, we often have promotions and discounts, so it is best to check our website or contact us directly for current pricing.'
    },
    {
        q: 'Is there any financial assistance or payment plan available',
        a: 'Yes, we offer flexible payment plans, and at times, discounted rates to assist our learners.'
    },
]