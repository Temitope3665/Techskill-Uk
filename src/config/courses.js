import ProductManagement from "@/assets/image/product-management.png";
import BusinessAnalyst from "@/assets/image/business-analyst.png";
import ProductDesign from "@/assets/image/product-design.png";
import Cybersecurity from "@/assets/image/cybersecurity.png";
import DataAnalysis from "@/assets/image/data-analysis.png";
import ITSupport from "@/assets/image/it-support.png";
import DigitalMarketing from "@/assets/image/digital-marketing.png";
import AgileProductMgt from "@/assets/image/agile-product-mgt.png";
import Skills from "@/assets/icons/skills.png";
import Portfolio from "@/assets/icons/portfolio.png";
import Mentorship from "@/assets/icons/mentorship.png";
import CareerSupport from "@/assets/icons/career-support.png";
import { COURSE_DETAILS_URL, EXPLORE_COURSES_URL } from "./paths";

export const courses = [
    {
        image: ProductManagement,
        title: 'Product Management',
        desc: 'Learn how to blend creativity and innovation to create user- friendly solutions from product ideation, examining marketing research, etc.',
        id: 1
    },
    {
        image: BusinessAnalyst,
        title: 'Business Analysis',
        desc: 'Learn the core principles of business analysis and develop the skills to drive strategic change with any organization.',
        id: 2,
    },
    {
        image: ProductDesign,
        title: 'Product Design',
        desc: 'Acquire the principles of effective design, prototype and create representation, procreate visually appealing designs, etc.',
        id: 3,
    },
    {
        image: AgileProductMgt,
        title: 'Agile Project Management',
        desc: 'Explore our courses, speak with a learning advisor and transition into tech. ',
        id: 4,
    },
    {
        image: Cybersecurity,
        title: 'Cybersecurity',
        desc: 'Learn Agile methodologies and enhance project management efficiency and adaptability.',
        id: 5
    },
    {
        image: DataAnalysis,
        title: 'Data Analysis',
        desc: 'Learn SQL, Data visualisation, ML, Process mapping and requirement gathering with data analytics.',
        id: 6,
    },
    {
        image: DigitalMarketing,
        title: 'Digital Marketing',
        desc: 'TechSkill empowers tech enthusiasts through training, mentorship,  in other to transition into their desired career.',
        id: 7
    },
    {
        image: ITSupport,
        title: 'IT Support',
        desc: 'TechSkill empowers tech enthusiasts through training, mentorship,  in other to transition into their desired career.',
        id: 8
    },
];

export const why = [
    {
        icon: Skills,
        title: 'Immersive Skill Training',
        description: 'Transition into in-demand tech skills worth our course offerings: Business Analysis, AI Technology, Product Management, Agile Project Management, Product Design, Data Analysis and Cybersecurity. Develop a strong foundation for a successful career in the industry.'
    },
    {
        icon: Portfolio,
        title: 'Portfolio development',
        description: 'Project development build your tech knowledge when you work with cross-functional teams on real time projects and hands-on practicals to improve your experience and accelerate confidently into the tech world.'
    },
    {
        icon: Mentorship,
        title: 'Mentorship',
        description: 'Receive personalized guidance and support from experienced industry professionals throughout the programme. Benefit from their expertise and gain valuable insights to accelerate your learning and career growth.'
    },
    {
        icon: CareerSupport,
        title: 'Career support',
        description: 'Begin your success in the tech world with our job support services, referencing and other resources. Get your profile optimized for increase reach, a curriculum vitae that projects your experience and experts that assist in tailored adverts.'
    }
]