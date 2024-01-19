import MoneyGraph from '@/assets/icons/money-graph.png';
import ProductIcon from '@/assets/icons/product-icon.png';
import DesignPen from '@/assets/icons/pen.png';
import AgileIcon from '@/assets/icons/agile-icon.png';
import CybersecurityIcon from '@/assets/icons/cybersecurity-icon.png';
import DataAnalysisIcon from '@/assets/icons/data-analysis-icon.png';
import DigitalMarketingIcon from '@/assets/icons/digital-marketing.png';
import SupportIcon from '@/assets/icons/support-icon.png';
import ExploreIcon from '@/assets/icons/explore-programme-icon.png';
import GlobalTalent from '@/assets/icons/global-talent-icon.png';
import JobSupport from '@/assets/icons/job-support-icon.png';
import BookMentorship from '@/assets/icons/book-mentorship-icon.png';
import HumanIcon from '@/assets/icons/human-icon.png';
import TechQuizIcon from '@/assets/icons/tech-quiz-icon.png';
import SoftSKillIcon from '@/assets/icons/soft-skill.png';
import WhoAreWe from '@/assets/icons/who-are-we.png';
import { ABOUT_US_URL, COMMUNITY_URL, EXPLORE_COURSES_URL, FAQ_URL, OFFERINGS_URL } from "./paths";
import navDropdown from '@/components/nav-dropdown';

export const coursesDropdownList = [
    {
        icon: MoneyGraph,
        title: 'Business Analysis',
        desc: 'Learn the core principles of Business analysis and the skills',
        href: '#'
    },
    {
        icon: ProductIcon,
        title: 'Product Management',
        desc: 'Learn how to blend creativity and innovation to create solutions.',
        href: '#'
    },
    {
        icon: DesignPen,
        title: 'Product Design',
        desc: 'Transition as a UI/UX Designer, Graphic designer etc.',
        href: '#'
    },
    {
        icon: AgileIcon,
        title: 'Agile Project Management',
        desc: 'Learn Agile methodologies and enhance project management efficiency and adaptability.',
        href: '#'
    },
    {
        icon: CybersecurityIcon,
        title: 'Cybersecurity',
        desc: 'Ut enim ad minima veniam, quis nostrum exercitationeml',
        href: '#'
    },
    {
        icon: DataAnalysisIcon,
        title: 'Data Analysis',
        desc: 'Learn SQL, data visualisation, ML, Process mapping etc.',
        href: '#'
    },
    {
        icon: DigitalMarketingIcon,
        title: 'Digital Marketing',
        desc: 'Ut enim ad minima veniam, quis nostrum exercitationeml',
        href: '#'
    },
    {
        icon: SupportIcon,
        title: 'IT Support',
        desc: 'Ut enim ad minima veniam, quis nostrum exercitationeml',
        href: '#'
    }
];

export const offeringsDropdownList = [
    {
        icon: ExploreIcon,
        title: 'Explore our Training Programmes',
        desc: 'Ut enim ad minima veniam, quis nostrum exercitationeml',
        href: '#'
    },
    {
        icon: GlobalTalent,
        title: 'Global Talent Visa',
        desc: 'Ut enim ad minima veniam, quis nostrum exercitationeml',
        href: '#'
    },
    {
        icon: JobSupport,
        title: 'Job Support Offering',
        desc: 'Ut enim ad minima veniam, quis nostrum exercitationeml',
        href: '#'
    },
    {
        icon: BookMentorship,
        title: 'Book Mentorship and Consultation',
        desc: 'Ut enim ad minima veniam, quis nostrum exercitationeml',
        href: '#'
    },
];

export const findTalentList = [
    {
        icon: HumanIcon,
        title: 'Hire an Alumni',
        desc: 'Ut enim ad minima veniam, quis nostrum exercitationeml',
        href: '#'
    },
    {
        icon: TechQuizIcon,
        title: 'Tech Quiz',
        desc: 'Ut enim ad minima veniam, quis nostrum exercitationeml',
        href: '#'
    },
    {
        icon: SoftSKillIcon,
        title: 'Soft skill',
        desc: 'Ut enim ad minima veniam, quis nostrum exercitationeml',
        href: '#'
    },
];

export const aboutUsList = [
    {
        icon: WhoAreWe,
        title: 'Who are we',
        desc: 'Learn more about us and our core values',
        href: ABOUT_US_URL
    },
];

const navLinks = [
    // {
    //     title: 'Home',
    //     href: HOME_URL,
    //     hasDropdown: false
    // },
    {
        title: 'About Us',
        href: "#",
        hasDropdown: true,
        options: navDropdown(aboutUsList, 'w-[22vw]')
    },
    {
        title: 'Courses',
        href: "#",
        hasDropdown: true,
        options: navDropdown(coursesDropdownList)
    },
    {
        title: 'Offerings',
        href: OFFERINGS_URL,
        hasDropdown: true,
        options: navDropdown(offeringsDropdownList, 'w-[22vw]')
    },
    {
        title: 'Find a talent',
        href: '#',
        hasDropdown: true,
        options: navDropdown(findTalentList, 'w-[22vw]')
    },
    {
        title: 'Community',
        href: COMMUNITY_URL,
        hasDropdown: false
    },
    {
        title: 'FAQ',
        href: FAQ_URL,
        hasDropdown: false
    },
];

export default navLinks;