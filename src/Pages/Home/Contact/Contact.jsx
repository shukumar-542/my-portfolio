import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

import Heading from '../../../components/ui/Heading';



const Contact = () => {
    const form = useRef();
    const notify = () => toast("Your Message has been send!");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_16etnfw', 'template_d9lrmue', form.current, 'wpV7VRosSiqX8fJnG')
            .then((result) => {
                console.log(result.text);
                notify()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact' className="bg-[#050709] my-container py-5 text-[#777980] ">

            <div className='text-center'>
               
                <Heading>Contact Me</Heading>
                <p className='mt-4 text-base  md:text-lg mb-5 text-[#777980] '>Please fill this form and give your information <br className="hidden md:block" /> I will contact you very soon. </p>
            </div>
            <div className='my-container grid grid-cols-1 md:grid-cols-2 md:gap-5 justify-center mt-10 '>


                <div className='py-10  p-5 rounded-xl  bg-[#140C1C] shadow-md'>

                    <Heading>Let’s work together!</Heading>
                    <form action="" ref={form} onSubmit={sendEmail} data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000">
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                            <input
                                name="user_name"
                                id="name"
                                type="text"
                                className='bg-[#050709]  text-sm rounded-lg  block w-full p-2.5'
                                placeholder='Your Name '
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2  text-sm font-medium">Your Email</label>
                            <input
                                name="user_email"
                                id="email"
                                type="email"
                                className='bg-[#050709] text-sm rounded-lg  block w-full p-2.5'
                                placeholder='Your Email Address '
                                required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                className='bg-[#050709]   text-sm rounded-lg block w-full p-2.5'
                                placeholder=' Your message here'
                                rows="5"
                                required />
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Send Message"
                                className='contact-btn px-5 py-2 cursor-pointer text-white rounded-lg font-semibold  tracking-wide transition-colors duration-300 ' />
                        </div>
                    </form>
                </div>



                <div className=' p-10 rounded-xl shadow-2xl ' data-aos-delay="50" data-aos-duration="1000" data-aos="fade-up-right">
                    {/* <h1 className='text-4xl text-white'></h1> */}
                    <Heading>Contact information</Heading>
                    <div className='mt-10 space-y-4'>
                        <div className='flex items-center gap-2  text-white'>
                            <div className='bg-gradient-to-r from-[#7E4AE8] to-[#371C6A]  p-3 rounded-full'>
                                <FaPhoneAlt size={20}></FaPhoneAlt>
                            </div>
                            +8801872999038
                        </div>
                        <div className='flex items-center gap-2 text-white'>

                            <div className='bg-gradient-to-r from-[#7E4AE8] to-[#371C6A]  p-3 rounded-full'>
                                <BsWhatsapp className=''></BsWhatsapp>
                            </div>

                            +8801872999038
                        </div>
                        <div className='flex items-center gap-2  text-white'>
                            <div className='bg-gradient-to-r from-[#7E4AE8] to-[#371C6A]  p-3 rounded-full'>
                                <AiOutlineMail className=''></AiOutlineMail>
                            </div>


                            shukumar542@gmail.com
                        </div>
                        <div className='flex items-center gap-2  text-white'>
                            
                            <div className='bg-gradient-to-r from-[#7E4AE8] to-[#371C6A]  p-3 rounded-full'>
                            <CiLocationOn className=''></CiLocationOn>
                            </div>
                            Dhanmondi,Dhaka
                        </div>
                       
                    </div>
                </div>



            </div>
        </section>
    );
};

export default Contact;