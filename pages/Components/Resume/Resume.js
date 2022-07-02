import HofWrapper from "../../Container/HofWrapper/HofWrapper";
import WorkSection from "./Work-section/WorkSection";
import Image from "next/image";
import Data from "../../Container/allData/data";


const [resumeData] = Data;
const skillImg = resumeData.logoProgramingLang;

const Resume = () => {
    return (
        <section className="resume-section h-4/5 w-4/5 mx-auto">
            <div className="resume-experiance-section h-full w-full">
                <div className="resume-experiance-one h-2/3">
                    <div className="title-text h-1/6 text-2xl text-blue-600">
                        <h2 className='resume-text-title'>Work Experiance</h2>
                    </div>
                    <div className="resume-experiance-section-one h-5/6 ">
                        <WorkSection />
                        <div className="resume-experiance-btn h-1/5 flex justify-center items-center gap-8">
                            <button className="w-32 h-12">Download CV</button>
                            <button className="w-32 h-12">Hire ME</button>
                        </div>
                    </div>
                </div>
                <div className="resume-experiance-two h-1/3">
                    <div className="title-text h-1/6 text-2xl text-blue-600">
                        <h2 className='resume-text-title'>All Skill I Know</h2>
                    </div>
                    <div className="resume-experiance-section-two h-5/6 flex justify-center items-center">
                        <div className="skill-section-box grid grid-cols-4 md:flex lg:flex justify-center items-center md:gap-2 lg:gap-8">
                            {
                                skillImg.map((skill, index) => {
                                    return (
                                        <div key={index} className="skill-section relative">
                                            <div className="skill-section-outer h-24 w-24 rounded-full flex justify-center items-center">
                                                <div className="skill-section-inner p-2 h-20 w-20 rounded-full relative flex justify-center items-center ">
                                                    <Image src={skill.src} alt={skill.alt} width="" height="" />

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HofWrapper(Resume, "Resume", "resume-page");