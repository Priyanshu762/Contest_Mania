import { CiCalendar } from "react-icons/ci";
import { FaHome } from "react-icons/fa";



export const userNavbarList = [
    {
        id: 1,
        key: "home",
        title: "Home",
        link: "/home",
        icon: <FaHome />,
    },
    {
        id: 2,
        key: "upcominContests",
        title: "Upcoming Contests",
        link: "/upcoming-contests",
        icon: <CiCalendar />,
    },
    {
        id: 3,
        key: "pastContests",
        title: "Past Contests",
        link: "/past-contests",
        icon: <CiCalendar />,
    },
    
    {
        id: 4,
        key: "contactUs",
        title: "Contact Us",
        link: "/contact-us",
        icon: <CiCalendar />,
    },

    
];