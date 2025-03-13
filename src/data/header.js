import { CiRouter, CiMonitor, CiHeadphones,CiVideoOn,CiChat1, CiBurger, CiYoutube, } from "react-icons/ci";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { RiYoutubeFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";



export const headerMenus =[
    {
        title: "My Youtube",
        icon: <CiRouter />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <CiMonitor />,
        src: "/today"
    },
    {
        title: "추천 음악",
        icon: <CiHeadphones />,
        src: "/music"
    },
    {
        title: "추천 영화",
        icon: <CiVideoOn />,
        src: "/movie"
    },
    {
        title: "추천 도서",
        icon: <CiChat1 />,
        src: "/book"
    },
    {
        title: "추천 애니",
        icon: <CiBurger />,
        src: "/anime"
    },
    {
        title: "유튜브 사이트",
        icon: <CiYoutube />,
        src: "/youtube"
    },
];

export const searchKeyword =[
    {
        title: "MyYoutube",
        src: "/youtube",
    },
    {
        title: "HTML",
        src: "/serach/html",
    },
    {
        title: "CSS",
        src: "/search/css",
    },
    {
        title: "JavaScript",
        src: "/Search/javascript",
    },
    {
        title: "React.js",
        src: "/search/react.js",
    },
    {
        title: "JAVA",
        src: "/search/java",
    },
    {
        title: "ORACLE",
        src: "/search/oracle",
    },
    {
        title: "SPRING",
        src: "/search/spring",
    }
];


export const snsLink = [
    {
        title: "github",
        url: "https://github.com",
        icon: <FaGithub />
    },
    {
        title: "youtube",
        url: "https://youtube.com",
        icon: <RiYoutubeFill />
    },
    {
        title: "github",
        url: "https://google.com",
        icon: <FcGoogle />
    },
    {
        title: "instagram",
        url: "https://instagram.com",
        icon: <BiLogoInstagramAlt />
    }
]