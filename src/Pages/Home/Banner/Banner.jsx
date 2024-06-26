import { BsArrowDownCircle } from 'react-icons/bs';
import { MdMarkEmailRead } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import CSS3Icon from '../../../assets/icons/css3.png';
import JsIcon from '../../../assets/icons/js.png';
import ReactIcon from '../../../assets/icons/react.png';
import ExpressJsIcon from '../../../assets/icons/expressjs-icon.png';
import MongodbIcon from '../../../assets/icons/mongodb.png';
import portfolioImage from '../../../assets/icons/Shukumar.png';
import resume from '../../../assets/shukumar.pdf'
import { TypeAnimation } from 'react-type-animation';
import { SiNextdotjs, SiRedux } from 'react-icons/si';



const Banner = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'resume.pdf';
        link.click();
    };
    return (
        <section id='home' className=' bg-gradient-to-r from-[#0F0715] to-[#211137] '>
            <div className='grid lg:grid-cols-2 justify-center text-[#FFFFFF]  items-center gap-2 my-container '>
                <div className='order-2 lg:order-1 ps-5 '>
                    <h1 className='text-xl lg:text-2xl font-serif'>
                        Hello, My name is
                        <br />
                        <span className='font-bold text-4xl lg:text-6xl bg-gradient-to-r from-[#8A54F7] via-[#BFA2FB] to-[#ECE2FE] inline-block text-transparent bg-clip-text my-2s'>Shukumar Ghosh</span>

                    </h1>
                    <p className='text-2xl bg-gradient-to-r from-[#8A54F7] via-[#BFA2FB] to-[#ECE2FE] inline-block text-transparent bg-clip-text font-semibold font-serif opacity-50'>
                        <TypeAnimation
                            sequence={[
                                'I am a Frontend Developer',
                                1000,
                                'I am Professional Coder',
                                1000,
                                'I am React Developer.',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </p>
                    <div className='my-5 text-lg'>
                        <p className='flex items-center'>
                            <span className='text-xl mr-2'><MdMarkEmailRead /></span>
                            <a
                                href="mailto:shukumar542@gmail.com"
                                aria-label="My email"
                                title="My email"
                                className="transition-colors duration-300 hover:text-sky-700"
                            >
                                shukumar542@gmail.com
                            </a>
                        </p>

                        <p className='flex items-center'>
                            <span className='text-xl mr-2'><AiFillLinkedin /></span>
                            <a
                                href="https://www.linkedin.com/in/shukumar-ghosh-bbb641190/"
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors duration-300 hover:text-sky-700"
                            >
                                LinkedIn
                            </a>
                        </p>


                        <p className='flex items-center'>
                            <span className='text-xl mr-2'><AiFillGithub /></span>
                            <a
                                href="https://github.com/shukumar-542"
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors duration-300 hover:text-sky-700"
                            >
                                GitHub
                            </a>
                        </p>
                    </div>
                    <div className='mb-8'>
                        <p className='uppercase font-bold'>List of Technologies : </p>
                        {/* icons  */}
                        <div className='flex flex-wrap gap-5 my-3'>
                            <div className='border border-[#8750F7] rounded-full p-3 w-12 h-12'>
                                <SiNextdotjs size={20} className='text-gray-200' />
                            </div>
                            <div className='border border-[#8750F7] rounded-full p-3 w-12 h-12'>
                                <SiRedux size={20} className='text-[#7248B6]' />
                            </div>
                            <div className='border border-[#8750F7] rounded-full p-3 w-12 h-12'>
                                <img src={CSS3Icon} alt="" />
                            </div>
                            <div className='border border-[#8750F7] rounded-full p-3 w-12 h-12'>
                                <img src={JsIcon} alt="" />
                            </div>
                            <div className='border border-[#8750F7] rounded-full p-3 w-12 h-12'>
                                <img src={ReactIcon} alt="" />
                            </div>
                            <div className='border border-[#8750F7] rounded-full p-3 w-12 h-12'>
                                <img src={ExpressJsIcon} alt="" />
                            </div>
                            <div className='border border-[#8750F7] rounded-full p-3 w-12 h-12'>
                                <img src={MongodbIcon} alt="" />
                            </div>
                        </div>
                    </div>

                    <button onClick={handleDownload} className='flex justify-center items-center  px-5 py-4 text-[#8750F7] hover:text-white rounded-full border-[#8750F7] font-semibold uppercase tracking-wide transition-colors duration-300 border  hover:bg-[#8750F7]'>

                        Download CV
                        <span className='ml-3 text-lg'><BsArrowDownCircle /></span>
                    </button>

                </div>
                {/* image  */}
                <div className='  order-1 lg:order-2 hidden lg:block w-1/2 mx-auto '>

                    <div className="rounded-xl w-80 h-96 mx-auto  mt-10 ">
                        <div className="flex flex-col justify-between h-full bg-white text-white rounded-lg transition-colors duration-300  border-[#5b37a1] hover:border-[#7340d8]   border-[3px]">
                            <img src={portfolioImage} className='h-full rounded-lg' alt="" />

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Banner;