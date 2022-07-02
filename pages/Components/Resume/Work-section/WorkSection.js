import { Swiper, SwiperSlide } from "swiper/react";
import Data from "../../../Container/allData/data";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";



const WorkSection = () => {
    const [resumeData] = Data;
    const brandData = resumeData.companyData;

    // ==========================
    // function for all media Range
    // ==========================

    const [mediaMatch, setMediaMatch] = useState(false)
    useEffect(() => {
        const mobileView = window.matchMedia("(max-width: 768px)")
        const handler = (e) => setMediaMatch(mobileView.matches)
        mobileView.addListener(handler)
        setMediaMatch(mobileView.matches)

    }, [])

    const WorkBox = () => {
        if (!mediaMatch) {
            return (
                <div className="resume-experiance-box h-4/5 flex gap-8">
                    {
                        brandData.map((val, index) => {
                            return (
                                <div key={index} className="resume-experiance-part w-1/3 h-full" style={{borderRadius: "20px 10px 20px 15px"}}>
                                    <div className="resume-experiance-title">
                                        <h3>{val.roleName}</h3>
                                    </div>
                                    <div className="resume-experiance-detail">
                                        {val.data.map((datas, index) => {
                                            return (
                                                <div key={index} className="resume-experiance-company">
                                                    <div className="resume-experiance-img w-12 h-12 rounded-full flex justify-center items-center">
                                                        <Image src={datas.src} alt={datas.alt} width="" height=""/>
                                                    </div>
                                                    <div className="resume-experiance-head-title">
                                                        <h2>{datas.companyName}</h2>
                                                        <h3>{datas.dataOfJoining}</h3>
                                                        <h4>{datas.roleAtCompany}</h4>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>)
                        })
                    }
                </div>)
        }
        else {
            return (
                    <Swiper
                        loop={true}
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="resume-work-swiper-style w-4/5 h-5/6"
                    >
                        {
                            brandData.map((val, index) => {
                                return (
                                        <SwiperSlide key={index} className='resume-work-swiper w-full rounded-xl'>
                                            <div key={index} className="resume-experiance-part h-full ">
                                                <div className="resume-experiance-title">
                                                    <h3>{val.roleName}</h3>
                                                </div>
                                                <div className="resume-experiance-detail">
                                                    {val.data.map((datas, index) => {
                                                        return (
                                                                <div key={index} className="resume-experiance-company">
                                                                    <div className="resume-experiance-img w-12 h-12 rounded-full flex justify-center items-center">
                                                                        <Image src={datas.src} alt={datas.alt} width="" height="" />
                                                                    </div>
                                                                    <div className="resume-experiance-head-title">
                                                                        <h2>{datas.companyName}</h2>
                                                                        <h3>{datas.dataOfJoining}</h3>
                                                                        <h4>{datas.roleAtCompany}</h4>
                                                                    </div>
                                                                </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
            )
        }
    }


    return (
        <WorkBox />
    )
}
export default WorkSection
