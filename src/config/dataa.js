import SamuelOni from '@/assets/image/samuel-oni.png';
import Skills, { OnlineMentoring } from '@/components/courses/explore-programmes';

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
            href: "#"
        },
        {
            title: 'Courses',
            href: "#"
        },
        {
            title: 'Offerings',
            href: "#"
        },
        {
            title: 'Find a Talent',
            href: "#"
        },
        {
            title: 'FAQs',
            href: "#"
        },
        {
            title: 'Pricing',
            href: "#"
        },
        {
            title: 'Reach us',
            href: "#"
        },
    ],
    courses: [
        {
            title: 'Business Analysis',
            href: "#"
        },
        {
            title: 'Product Management',
            href: "#"
        },
        {
            title: 'Product Design',
            href: "#"
        },
        {
            title: 'Agile Project Management',
            href: "#"
        },
        {
            title: 'Cybersecurity',
            href: "#"
        },
        {
            title: 'Data Analysis',
            href: "#"
        },
        {
            title: 'Digital Marketing',
            href: "#"
        },
        {
            title: 'IT Supoort',
            href: "#"
        },
    ],
    contact: [
        {
            title: 'UK: Brandford, London Street.',
            href: "#"
        },
        {
            title: 'Lagos: 2, Ikeja Street.',
            href: "#"
        },
        {
            title: 'Phone Number: +44 - (7816) - 247 - 864',
            href: "#"
        },
        {
            title: 'Email: admissions@techskill.uk',
            href: "#"
        },
    ]
}

 export const tabData = [
    { id: '0', title: 'Learn a skill', content: Skills() },
    { id: '1', title: '1-on-1 online mentoring', content: OnlineMentoring() },
    { id: '2', title: 'Demo and project', content: '' },
  ];