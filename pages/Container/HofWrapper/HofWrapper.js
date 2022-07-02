import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, TwitterIcon, InstagramIcon, GithubIcon, LinkedinIcon } from "../../assist/index"
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { ContextBtn } from '../ContextApi/Contextapi';
import Data from "../allData/data";
import React from "react";



const HofWrapper = (Container, idName, ClassName) => function HOF() {
    const routs = useRouter();
    const constValue = useContext(ContextBtn);
    const [logoData] = Data;
    const [darkBtn, lightBtn] = logoData.icon;
    // const [menuItem, setMenuItem]=useState({

    // })


    return (
        <div id={idName} style={constValue.myStyle} className={`"container h-screen w-screen relative "  ${ClassName}`}>
            <div className="w-full grid grid-cols-3 place-items-center justify-center hof-nav-links">
                <div className="brand-logo w-16 h-16">
                    <Image src={constValue.logoImg} alt="logo" width="" height="" />
                </div>

                <div >
                    <div id="menuItem" className="menu-item">
                        <ul className="lg:flex md:flex gap-4 hidden main-header-links menu-item-list" >
                            {
                                ["Home", "About", "Resume", "Work", "Contact"].map((navLink, index) => {
                                    return (
                                        <li key={index} style={constValue.myLinkStyle} className="main-nav-links">
                                            <a href={`#${navLink}`} className={routs.asPath === `/#${navLink}` ? "text-red-600" : "text-gray-400"}>{navLink}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="mobile-humbager">
                        <div className="mobile-menu">
                            <div className="mobile-menu-box" onClick={constValue.MenuOpen}>
                                <div id="menu-toggle" className="mobile-menu-line" ></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div >
                    <div
                        id="mode-btn"
                        className="mode-btn w-20 h-12 grid place-items-center relative "
                        onClick={constValue.ModeChange}>
                        <div id='dark-btn' style={constValue.darkBtn} className="dark-btn absolute top-2">
                            <Image src={darkBtn.src} alt={darkBtn.alt} />
                        </div>
                        <div id='light-btn' style={constValue.lightBtn} className="light-btn absolute top-2">
                            <Image src={lightBtn.src} alt={lightBtn.alt} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigation-dots absolute right-4 h-4/5 flex flex-col justify-center ">
                {
                    ["Home", "About", "Resume", "Work", "Contact"].map((navLink, index) => {
                        return (
                            <div key={index} className="flex justify-end gap-2 nav-dots">
                                <h1>{navLink}</h1>
                                <div className={routs.asPath === `/#${navLink}` ? "nav-dots-active" : "nav-dots-links"}><Link href={`#${navLink}`} >{navLink}</Link></div>
                            </div>

                        )
                    })
                }
            </div>
            <Container />
            <div className="hof-nav-social md:flex lg:flex gap-4 w-4/5 mx-auto ">
                {[FacebookIcon, TwitterIcon, InstagramIcon, GithubIcon, LinkedinIcon].map((icons, index) => {
                    return (
                        <div key={index} className="social-icons w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 hover:scale-150 transition-transform  ">
                            <Image src={icons} alt={icons} width="" height="" />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default HofWrapper;