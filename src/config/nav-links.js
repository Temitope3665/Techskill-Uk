import { ABOUT_US_URL, COMMUNITY_URL, EXPLORE_COURSES_URL, FAQ_URL, OFFERINGS_URL } from "./paths";

const navLinks = [
    // {
    //     title: 'Home',
    //     href: HOME_URL,
    //     hasDropdown: false
    // },
    {
        title: 'About Us',
        href: ABOUT_US_URL,
        hasDropdown: false
    },
    {
        title: 'Courses',
        href: EXPLORE_COURSES_URL,
        hasDropdown: true
    },
    {
        title: 'Offerings',
        href: OFFERINGS_URL,
        hasDropdown: true
    },
    {
        title: 'Find a talent',
        href: '#',
        hasDropdown: true
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