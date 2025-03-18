import { CiCalendar } from "react-icons/ci";
import { FaRegUser ,FaHome} from "react-icons/fa";



export const adminNavbarList = [
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
        key: "users",
        title: "Users",
        link: "/admin/users",
        icon: < FaRegUser/>,
    },

    
];