import Image from "next/image";
import HofWrapper from "../../Container/HofWrapper/HofWrapper";
import { heroImg, ImgReact, ImgNext, ImgJavaS, ImgFigma } from "../../assist/index";
import styles from "../../../styles/Home.module.css"
import Data from "../../Container/allData/data";

const [logoPrograming] = Data;
const logoImg = logoPrograming.logoProgramingLang.filter((element) => {
    return element.home >= 1
});
const Home = () => {


    return (
        <>
            <header className="h-4/5 w-4/5 container mx-auto">
                <section className="hero-section h-full w-full lg:flex md:flex">
                    <div className="hero-text md:h-full lg:h-full h-1/2 md:w-1/2 lg:w-1/2 w-full flex items-center justify-center">
                        <div className="w-4/5 ">
                            <div className=" head-text w-44 h-12 grid place-items-center">
                                <h4 className="text-gray-100 text-lg">Hello There</h4>
                            </div>
                            <div className="head-name my-2">
                                <h2 className="text-3xl ">I`M <span>Burhanuddin</span></h2>
                            </div>
                            <div className="head-title my-1" >
                                <h3 className="text-2xl">Front End Developer</h3>
                            </div>
                            <div className="head-paragraph">
                                <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, doloribus nesciunt dolorem quis dolorum asperiores quos officia eum facere. At, sint animi eligendi obcaecati illo hic accusantium asperiores maxime non ex saepe? Ducimus porro ex corrupti velit ut? Ab velit laborum nulla in, voluptatum repudiandae tempora veniam commodi. Ex, magni!</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero-img md:h-full lg:h-full h-1/2 md:w-1/2 lg:w-1/2 flex items-end justify-center relative">
                        <div className="hero-img-back flex items-end justify-center w-full h-full absolute">
                            <div className="hero-image-box w-full h-full relative flex items-end justify-center">
                                <div className="w-5/6 lg:w-full">
                                    <Image
                                    src={heroImg}
                                    alt="hero Image"
                                    width=""
                                    height=""
                                    className=""
                                />
                                </div>
                                
                                <div className="main-circle absolute bg-white"></div>
                                {

                                    logoImg.map((img, index) => {
                                        return (
                                            <div key={index} className={`${img.className} absolute bg-white grid place-items-center p-2`}>
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    width=""
                                                    height=""
                                                    className=""
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
}

export default HofWrapper(Home, "Home", "home-page");