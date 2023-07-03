import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';



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
        <section id='contact' className="bg-[#252734] my-container py-5 text-[#777980] ">

            <div className='text-center'>
                <h1 className='text-3xl lg:text-4xl font-bold text-white'>Contact Me</h1>
                <p className='mt-4 text-base  md:text-lg mb-5 text-[#777980] '>Please fill this form and give your information <br className="hidden md:block" /> I will contact you very soon. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center mt-10 '>
                <div className='bg-[#182234] p-10 rounded-xl shadow-2xl ' data-aos-delay="50" data-aos-duration="1000" data-aos="fade-up-right">
                    <h1 className='text-4xl text-white'>Contact information</h1>
                    <div className='mt-10 space-y-4'>
                        <div className='flex items-center gap-2 text-2xl text-white'>
                            <FaPhoneAlt className='text-[#075985]'></FaPhoneAlt>
                            +8801872999038
                        </div>
                        <div className='flex items-center gap-2 text-2xl text-white'>
                            <BsWhatsapp className='text-[#075985]'></BsWhatsapp>
                            +8801872999038
                        </div>
                        <div className='flex items-center gap-2 text-2xl text-white'>
                            <AiOutlineMail className='text-[#075985] '></AiOutlineMail>
                            shukumar542@gmail.com
                        </div>
                        <div className='flex items-center gap-2 text-2xl text-white'>
                            <CiLocationOn className='text-[#075985]'></CiLocationOn>
                            Dhanmondi,Dhaka
                        </div>
                        <div className='pt-10'>
                            <h1 className='text-2xl text-white font-semibold'>Connect With Me </h1>
                            <div className='flex gap-5 mt-5 '>
                                <AiFillGithub className='text-[#075985] text-5xl cursor-pointer'></AiFillGithub>
                                <BsFacebook className='text-[#075985] text-5xl cursor-pointer'></BsFacebook>
                                <AiFillLinkedin className='text-[#075985] text-5xl cursor-pointer'></AiFillLinkedin>
                            </div>
                        </div>
                    </div>
                </div>
              
               
                <div className='py-10 border p-5 rounded-xl border-[#777980] bg-[#182234] shadow-lg'>
                    <form action="" ref={form} onSubmit={sendEmail} data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000">
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                            <input
                                name="user_name"
                                id="name"
                                type="text"
                                className='bg-[#777980]  text-white text-sm rounded-lg  block w-full p-2.5'
                                placeholder='Your name here'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2  text-sm font-medium">Your Email</label>
                            <input
                                name="user_email"
                                id="email"
                                type="email"
                                className='bg-[#777980] text-sm text-white rounded-lg  block w-full p-2.5'
                                placeholder='Your email address here'
                                required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                className='bg-[#777980] text-white  text-sm rounded-lg block w-full p-2.5'
                                placeholder=' Your message here'
                                rows="5"
                                required />
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="submit"
                                className='bg-sky-700 px-5 py-2 cursor-pointer text-white rounded-lg font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-sky-800' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;