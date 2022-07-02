import HofWrapper from "../../Container/HofWrapper/HofWrapper";
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineAlternateEmail } from "react-icons/md"


const Contact = () => {
    return (
        <section className="h-4/5 w-4/5 container mx-auto contact-section">
            <div className="contact-detail-box w-full h-1/3 md:h-1/4 lg:h-1/4 flex flex-col md:flex-row lg:flex-row justify-center items-center">
                <div className="contact-detail contact-detail-phone h-4/5 flex justify-center items-center gap-8 text-xl">
                    <ImWhatsapp className='contact-icon' />
                    <h3>+91 (942) 7637 853</h3>
                </div>
                <div className="contact-detail contact-detail-email h-4/5 flex justify-center items-center gap-8 text-xl">
                    <MdOutlineAlternateEmail className='contact-icon' />
                    <h3>bsohangpur@gmail.com</h3>
                </div>
            </div>
            <div className="contact-form-box w-full flex justify-center items-center h-2/3 md:h-3/4 lg:h-3/4">
                <div className="contact-form-section flex justify-center items-center w-5/6 md:w-full lg:w-full h-5/6">
                    <form action="/" className="contact-form w-4/5 h-4/5 ">
                        <div className="form-box-one flex justify-center w-full h-2/5">
                            <div className="form-name">
                                <label htmlFor="" className="form-label text-xs md:text-sm lg:text-sm ">full name<span>*</span></label>
                                <input placeholder='' name="name" type="text" className="form-input" />
                            </div>
                            <div className="form-email">
                                <label htmlFor="" className="form-label text-xs md:text-sm lg:text-sm ">Email Address<span>*</span></label>
                                <input placeholder='' name="name" type="email" className="form-input" />
                            </div>
                        </div>
                        <div className="form-box-two flex flex-col items-center w-full h-3/5">
                            <div className="form-subject h-1/5">
                                <label htmlFor="" className="form-label text-xs md:text-sm lg:text-sm  h-full">Subject<span>*</span></label>
                                <input placeholder='' name="name" type="text" className="form-input" />
                            </div>
                            <div className="form-massage h-4/5">
                                <label htmlFor="" className="form-label text-xs md:text-sm lg:text-sm ">Your massage here<span>*</span></label>
                                <textarea placeholder='' name="massege" id="" cols="30" rows="10" className="form-textarea h-full"></textarea>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}

export default HofWrapper(Contact, "Contact", "contact-page");