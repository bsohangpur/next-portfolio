import HofWrapper from "../../Container/HofWrapper/HofWrapper";
import Data from "../../Container/allData/data";
import Image from "next/image";

const About = () => {
    const [logoPrograming] = Data;
    const logoImg = logoPrograming.logoProgramingLang.filter((element) => {
        return element.about >= 1
    });
    return (
        <section className="h-4/5 w-4/5 container mx-auto md:flex lg:flex">
            <div className="main-service-section w-full md:w-1/2 lg:w-1/2">
                <div className="title-text text-2xl text-blue-600">
                    <h2>Main Service</h2>
                </div>
                <div className="main-service w-5/6 h-full">
                    <div className="service-box my-4 rounded-md w-4/5 h-1/5 bg-red-400"></div>
                    <div className="service-box my-4 rounded-md w-4/5 h-1/5 bg-red-400"></div>
                    <div className="service-box my-4 rounded-md w-4/5 h-1/5 bg-red-400"></div>
                </div>
            </div>

            <div className="aboutme-section w-full md:w-1/2 lg:w-1/2">
                <div className="aboutme-box w-5/6 h-1/2">
                    <div className="title-text text-2xl text-blue-600">
                        <h2>About me</h2>
                    </div>
                    <div className="aboutme-text">
                        <div className="aboutme-text">
                            <h4>Hello my name is</h4>
                        </div>
                        <div className="aboutme-name">
                            <h2>Burhanuddin Sohangpurwala</h2>
                        </div>
                        <div className="aboutme-title">
                            <h3>Front End Developer with React.js, UI designer</h3>
                        </div>
                        <div className="aboutme-paragraph">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat repellat quam unde praesentium omnis aliquid expedita ipsa optio perferendis.</p>
                        </div>
                    </div>
                </div>
                <div className="main-skill-section h-1/2">
                    <div className="title-text text-2xl text-blue-600 h-1/6">
                        <h2>Main skills</h2>
                    </div>
                    <div className="mainskill-box grid grid-cols-3 content-center gap-4 h-5/6 w-4/6">
                        {

                            logoImg.map((img, index) => {
                                return (
                                    <div key={index} className="skill-img-box w-20 h-20 rounded-full grid place-items-center p-2">
                                        <div className="skill-img">
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                width=""
                                                height=""
                                                className=""
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HofWrapper(About, "About", "about-page");