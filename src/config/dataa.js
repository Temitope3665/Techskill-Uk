import SamuelOni from '@/assets/image/samuel-oni.png';
import Skills, { DemoDay, Internship, OnlineMentoring } from '@/components/courses/explore-programmes';
import CoreValueIcon from '@/assets/icons/core-values.png';
import CoreMissionIcon from '@/assets/icons/mission-icon.png';
import VisionIcon from '@/assets/icons/vision-icon.png';
import MoyoHicks from '@/assets/experts/moyo-hicks.jpg';
import JenniferNneji from '@/assets/experts/jennifer-nneji.jpeg';
import IjaolaOpemipo from '@/assets/experts/ijaola-opemipo.jpeg';
import HakeemIdowu from '@/assets/experts/hakeem-idowu.jpg';
import Kenechukwu from '@/assets/experts/kenechukwu.jpg';
import ModupeMagbagbeola from '@/assets/experts/modupe-magbagbeola.jpg';
import TobiEsho from '@/assets/experts/tobi-esho.jpg';
import SegunAllen from '@/assets/experts/segun-allen.jpeg';
import IsraelOyinlola from '@/assets/experts/israel-oyinlola.jpg';
import JohnOnifade from '@/assets/experts/john-onifade.jpeg';
import { ABOUT_US_URL, FAQ_URL, HIRE_ALUMNI_URL } from './paths';

export const testimonials = [
    {
        image: SamuelOni,
        name: 'Samuel Oni',
        position: 'Data Analyst',
        review: '"Techskill UK Accelerate is what I needed. Techskill Uk is that Platform you need to gain the confidence to be able to call yourself a data analyst. My Tutor is good at what he does and I like the mentorship part of Techskill Accelerate too."'
    },
    {
        image: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png',
        name: 'Violet Simon',
        position: 'Business Analyst',
        review: `"The Business Analysis class is indeed a transformative journey that has pushed the boundaries of my understanding, demanding attention to details, critical thinking and adaptability."`
    },
    {
        image: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png',
        name: 'Peace David',
        position: 'Product Manager',
        review: `TechSkill UK Accelerate has been a game-changer for my career as a project manager. Their project management training program equipped me with essential skills and practical knowledge. I highly recommend TechSkill Accelerate for professionals seeking career advancement and top-notch training. Thank you for empowering my success as a project manager.`
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
            href: HIRE_ALUMNI_URL
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
            title: 'Office: 6917, 182-184 High Street North, East Ham, London E6 2JA. United Kingdom.',
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
    { id: '2', title: 'Practical ', content: DemoDay() },
    { id: '3', title: 'Internship', content: Internship() },
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
        name: 'Segun Allen',
        image: SegunAllen,
        position: 'Senior Product Manager',
        linkedin: 'https://www.linkedin.com/in/segunallen/'
    },
    {
        name: 'John Onifade',
        image: JohnOnifade,
        position: 'Product Lead',
        linkedin: 'https://www.linkedin.com/in/johnonifadeoluseye/'
    },
    {
        name: 'Moyo Hicks',
        image: MoyoHicks,
        position: 'Product Manager',
        linkedin: 'https://www.linkedin.com/in/moyohicks/'
    },
    {
        name: 'Tobi Esho',
        image: TobiEsho,
        position: 'Product Manager',
        linkedin: 'https://www.linkedin.com/in/tobiesho/'
    },
    {
        name: 'Jennifer Nneji',
        image: JenniferNneji,
        position: 'Business Analyst',
        linkedin: 'https://www.linkedin.com/in/jennifer-nneji-b5a64417b/'
    },
    {
        name: 'David Ijaola',
        image: IjaolaOpemipo,
        position: 'Product Manager',
        linkedin: 'https://www.linkedin.com/in/david-ijaola-49942114a/'
    },
    {
        name: 'Hakeem Idowu',
        image: HakeemIdowu,
        position: 'Project Manager/Scrum Master',
        linkedin: 'https://www.linkedin.com/in/idowu-hakeem-4b5b1754/'
    },
    {
        name: 'Kenechukwu Nwankwo',
        image: Kenechukwu,
        position: 'Product Manager',
        linkedin: 'https://www.linkedin.com/in/keneshuku/'
    },
    {
        name: 'Israel Oyinlola',
        image: IsraelOyinlola,
        position: 'VP of Artificial Intelligence.',
        linkedin: 'https://www.linkedin.com/in/israel-oyinlola-2652993b/'
    }
];

export const Faque = [
    {
        q: 'What skill does Techskill UK offers?',
        a: 'We offer courses in business analysis, product management, project management and more'
    },
    {
        q: 'How long are the training programs?',
        a: 'The duration of our training programs varies with courses, typically spanning from 5 to 8 weeks.'
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
];

export const alumni = [
    {
        name: 'Damilola Fadulu',
        title: 'Business Analyst',
        linkedin: 'https://www.linkedin.com/in/damilolafadulu',
        image: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png'
    },
    {
        name: 'Lolade Olumuyiwa-Biala',
        title: 'Product Manager',
        linkedin: 'https://www.linkedin.com/in/ololade-olu-biala-acim-mba-2163027b/ ',
        image: 'https://media.licdn.com/dms/image/D4E03AQH_ImtwtKDJBw/profile-displayphoto-shrink_400_400/0/1718369508694?e=1724889600&v=beta&t=5_kOg1fgHNtR7pJroMWIBAKeJnUTyEWCBpRJqqSe47k'
    },
    {
        name: 'Bibian Igarando',
        title: 'Data Analyst',
        linkedin: 'https://www.linkedin.com/in/igarando-bibian-ebinipre',
        image: 'https://media.licdn.com/dms/image/C4E03AQE3YIGlpBNLDw/profile-displayphoto-shrink_400_400/0/1654601657229?e=1724889600&v=beta&t=x0rLcsfxoJMUNmNjLBg8jdoFQvL8uvbu-ugh2uuY8lA'
    },
    {
        name: 'Olamide Oyejobi',
        title: 'Scrum Master/Project Manager',
        linkedin: 'https://www.linkedin.com/in/olamide-oyejobi-306436276/ ',
        image: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png'
    },
    {
        name: 'Oyewale Oredein',
        title: 'Data Analyst',
        linkedin: 'https://www.linkedin.com/in/oyewale-oredein-014b59112',
        image: 'https://media.licdn.com/dms/image/D4E03AQGc2WHRebv9Jw/profile-displayphoto-shrink_400_400/0/1711972173108?e=1724889600&v=beta&t=5HPpt0jJeGILLyLJyEZmfwTJceKQKK_ruWYmvLmm_1A'
    },
    {
        name: 'Modupe Magbagbeola',
        title: 'Project Manager',
        linkedin: 'https://www.linkedin.com/in/modupe-magbagbeola-ba260a181',
        image: ModupeMagbagbeola
    },
    {
        name: 'Damilola Oyejobi',
        title: 'Project Manager',
        linkedin: 'https://www.linkedin.com/in/damilola-oyejobi-a78132b1/',
        image: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png'
    },
]