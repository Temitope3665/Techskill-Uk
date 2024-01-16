import { EXPLORE_COURSES_URL, HOME_URL } from "./paths";

const navLinks = [
    // {
    //     title: 'Home',
    //     href: HOME_URL,
    //     hasDropdown: false
    // },
    {
        title: 'About',
        href: '#',
        hasDropdown: false
    },
    {
        title: 'Courses',
        href: EXPLORE_COURSES_URL,
        hasDropdown: true
    },
    {
        title: 'Offerings',
        href: '#',
        hasDropdown: true
    },
    {
        title: 'Find a talent',
        href: '#',
        hasDropdown: true
    },
    {
        title: 'Community',
        href: '#',
        hasDropdown: false
    },
    {
        title: 'FAQ',
        href: '#',
        hasDropdown: false
    },
];

export default navLinks;