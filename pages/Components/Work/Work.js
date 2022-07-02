import HofWrapper from "../../Container/HofWrapper/HofWrapper";
import Image from "next/image";
import { useState } from "react";
import { Img1, Img2, Img3, Img4, Img5, Img6 } from "../../assist/index";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"


const Work = () => {
    const [indexValue, setIndexValue] = useState(1)
    const projectCard = [
        {
            id: 1,
            src: Img1
        },
        {
            id: 2,
            src: Img2
        },
        {
            id: 3,
            src: Img3
        },
        {
            id: 4,
            src: Img4
        },
        {
            id: 5,
            src: Img5
        },
        {
            id: 6,
            src: Img6
        }
    ];

    const rightClick = () => {
        if (indexValue !== projectCard.length) {
            setIndexValue(indexValue + 1)
        }
        else if (indexValue === projectCard.length) {
            setIndexValue(1)
        }
    }
    const leftClick = () => {
        if (indexValue !== 1) {
            setIndexValue(indexValue - 1)

        }
        else if (indexValue === 1) {
            setIndexValue(projectCard.length)
        }
    }


    return (
        <section className="h-4/5 w-4/5 mx-auto ">
            <div className="work-section-box">
                <div className="work-project-box h-4/5">
                    <div className="title-text">
                        <h2 className='work-text-title'>All Project</h2>
                    </div>
                    <div className="work-project-section">
                        <div className="work-project-main" id="work-project-main">
                            {projectCard.map((val, index) => {
                                return (
                                    <div key={index} className={indexValue === index + 1 ? "project-main" : "project-main-hide"} >
                                        <div className="work-image-box">
                                            <Image src={val.src} alt={val.alt} />
                                        </div>
                                    </div>)
                            })}
                        </div>
                        <div className="work-project-bottom ">
                            <div className="work-arrow-btn">
                                <div className="arrow-btn-count">
                                    <span>{indexValue}</span> of <span>{projectCard.length}</span>
                                </div>
                                <div className="arrow-btn">
                                    <AiOutlineArrowLeft className="arrow-button" onClick={leftClick} />
                                    <AiOutlineArrowRight className="arrow-button" onClick={rightClick} />
                                </div>
                            </div>
                            <div className="work-project-name">
                                <h3>Project</h3>
                                <h4>Name</h4>
                            </div>
                            <div className="work-idea-name">
                                <h3>Idea</h3>
                                <h4>Name</h4>
                            </div>
                            <div className="work-full-project-btn"><button className="w-32 h-12">Full Project</button></div>
                        </div>
                    </div>
                </div>
                <div className="work-job-section h-1/5 w-full mb-2">
                    <div className="work-job-inner ">
                        <div className="work-job-box text-center">
                            <h2>25</h2>
                            <h2>Project Completed</h2>
                        </div>
                        <div className="w-0.5 h-5 rounded-full bg-black"></div>
                        <div className="work-job-box text-center">
                            <h2>5</h2>
                            <h2>Happy client</h2>
                        </div>
                        <div className="w-0.5 h-5 rounded-full bg-black"></div>
                        <div className="work-job-box text-center">
                            <h2>20</h2>
                            <h2>fiverr job</h2>
                        </div>
                        <div className="w-0.5 h-5 rounded-full bg-black"></div>
                        <div className="work-job-box text-center">
                            <h2>30</h2>
                            <h2>Freelancer Job</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HofWrapper(Work, "Work", "work-page");