import { heroImg, ImgReact, ImgNext, ImgJavaS, ImgFigma, ImgHtml, Imgcss, Imggit, Imgps, LogoTure, LogoClick, LogoSnip, LogoAppen, LogoUpwork, LogoFiverr, Img1, Img2, Img3, Img4, Img5, Img6, FacebookIcon, TwitterIcon, InstagramIcon, GithubIcon, LinkedinIcon, DarkBtn, LightBtn, BrandLogoDark, BrandLogoLight } from "../../assist/index"

const Data = [
    {
        images: [
            {
                id: 1,
                src: heroImg,
                alt: "heroImg",
            },
            {
                id: 2,
                src: Img1,
                alt: "LogoUpwork",
            },
            {
                id: 3,
                src: LogoUpwork,
                alt: "LogoUpwork",
            },
            {
                id: 4,
                src: LogoUpwork,
                alt: "LogoUpwork",
            },
            {
                id: 5,
                src: LogoUpwork,
                alt: "LogoUpwork",
            },
            {
                id: 6,
                src: LogoUpwork,
                alt: "LogoUpwork",
            },
            {
                id: 7,
                src: LogoUpwork,
                alt: "LogoUpwork",
            }
        ],
        socialIcons: [{
            id: 1,
            src: FacebookIcon,
            alt: "Facebook-icon",
        },
        {
            id: 2,
            src: TwitterIcon,
            alt: "Twitter-icon",
        },
        {
            id: 3,
            src: LinkedinIcon,
            alt: "Linkedin-icon",
        },
        {
            id: 4,
            src: InstagramIcon,
            alt: "Instagram-icon",
        },
        {
            id: 5,
            src: GithubIcon,
            alt: "Github-icon",
        }
        ],
        icon: [
            {
                id: 1,
                src: DarkBtn,
                alt: "Dark-btn",
            },
            {
                id: 2,
                src: LightBtn,
                alt: "Light-btn",
            }
        ],
        logoProgramingLang: [
            {
                id: 1,
                className: "img-figma",
                home: 1,
                about:1,
                src: ImgFigma,
                alt: "ImgFigma",
            },
            {
                id: 2,
                className: "img-react",
                home: 1,
                about:1,
                src: ImgReact,
                alt: "ImgReact",
            },
            {
                id: 3,
                className: "img-next",
                home: 1,
                about:1,
                src: ImgNext,
                alt: "ImgNext",
            },
            {
                id: 4,
                home: 0,
                about:1,
                src: ImgHtml,
                alt: "ImgHtml",
            },
            {
                id: 5,
                home: 0,
                about:1,
                src: Imgcss,
                alt: "Imgcss",
            },
            {
                id: 6,
                className: "img-javas",
                home: 1,
                about:1,
                src: ImgJavaS,
                alt: "ImgJavaS",
            },
            {
                id: 7,
                home: 0,
                about:0,
                src: Imggit,
                alt: "Imggit",
            },
            {
                id: 8,
                home: 0,
                about:0,
                src: Imgps,
                alt: "Imgps",
            }
        ],
        brandLogo: [
            {
                id: 1,
                src: BrandLogoDark,
                alt: "BrandLogoDark",
            },
            {
                id: 2,
                src: BrandLogoLight,
                alt: "BrandLogoLight",
            },
            {
                id: 3,
                src: LogoTure,
                alt: "LogoTure",
            },
            {
                id: 4,
                src: LogoClick,
                alt: "LogoClick",
            },
            {
                id: 5,
                src: LogoSnip,
                alt: "LogoSnip",
            },
            {
                id: 6,
                src: LogoAppen,
                alt: "LogoAppen",
            },
            {
                id: 7,
                src: LogoUpwork,
                alt: "LogoUpwork",
            },
            {
                id: 8,
                src: LogoFiverr,
                alt: "LogoFiverr",
            }
        ],
        companyData: [
            {
                roleName:"Freelancer",
                data:[
                    {
                        id: 1,
                        companyName: "Truelancer",
                        dataOfJoining: "2016-2018",
                        roleAtCompany: "Freelancer",
                        src: LogoTure,
                        alt: "LogoTure",
                    },
                    {
                        id: 2,
                        companyName: "Clickworker",
                        dataOfJoining: "2019-2020",
                        roleAtCompany: "ai content provider",
                        src: LogoClick,
                        alt: "LogoClick",
                    }
                ]
            },
            {
                roleName:"Data Entry",
                data:[
                    {
                        id: 3,
                        companyName: "Snipfeed",
                        dataOfJoining: "2018-2020",
                        roleAtCompany: "Data Entry Specialist",
                        src: LogoSnip,
                        alt: "LogoSnip",
                    },
                    {
                        id: 4,
                        companyName: "Appen",
                        dataOfJoining: "2019",
                        roleAtCompany: "Individual Contractor",
                        src: LogoAppen,
                        alt: "LogoAppen",
                    }
                ]
            },
            {
                roleName:"Front End Developer",
                data: [
                    {
                        id: 5,
                        companyName: "Upwork",
                        dataOfJoining: "2021",
                        roleAtCompany: "React Developer",
                        src: LogoUpwork,
                        alt: "LogoUpwork"
                    },
                    {
                        id: 6,
                        companyName: "Fivver",
                        dataOfJoining: "2017",
                        roleAtCompany: "Frontend Developer",
                        src: LogoFiverr,
                        alt: "LogoFiverr"
                    }
                ]
            }

        ]


    }
]


export default Data;