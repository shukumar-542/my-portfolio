import { useState } from "react";
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
// import resume from '../../../assets/shukumar.pdf'
import { NavLink } from "react-router-dom";
import { isLoggedIn, removedUser } from "../../../utils/auth.service";
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = isLoggedIn()
    const [isUser, setIsLoggedIn] = useState(user);
    const handleDownload = () => {
        // const link = document.createElement('a');
        // link.href = resume;
        // link.download = 'resume.pdf';
        // link.click();
        window.open( "https://drive.google.com/file/d/1k_D8yCZSdY1n7J0hQU17Kgl3ZGuBOocD/view", '_blank')
    }

    const handleLogout = () => {
        removedUser()
        setIsLoggedIn(!isUser)
    }

    return (

        <div className="bg-gradient-to-r from-[#0F0715] to-[#211137] sticky top-0 z-20 shadow-md ">
            <div className='px-2  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl   text-[#FFFFFF]  py-2'>
                <div className='max-w-screen-xl  py-2 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-2xl lg:px-10 '>
                    <div className='relative flex items-center justify-between'>
                        <div className='font-bold font-serif text-gradient'>
                            {/* <BiLogoGmail /> */}

                            Shukumar Ghosh

                        </div>

                        <div>
                            <ul className='items-center hidden space-x-8 lg:flex'>
                                <li className="text-white hover:border-b hover:border-[#7645DA]  "><a href="#home">Home</a></li>
                                <li className="text-white cursor-pointer hover:border-b hover:border-[#7645DA]   "><a onClick={handleDownload} >Resume</a></li>
                                <li className="text-white hover:border-b hover:border-[#7645DA]    "><a href="#skills">Skills</a></li>
                                <li className="text-white  hover:border-b hover:border-[#7645DA]   "><a href="#about">About Me</a></li>
                                {
                                    user ? <NavLink to='/dashboard/skills' className="hover:border-b hover:border-[#7645DA]  " >Dashboard</NavLink> : <NavLink to='/login'>Login</NavLink>
                                }
                                {user && <button className="hover:border-b hover:border-[#7645DA]   " onClick={() => handleLogout()}>Logout</button>}


                                <li className="text-white contact-btn cursor-pointer "><a href="#contact">Contact Me</a></li>

                            </ul>
                        </div>






                        {/* Mobile responsive */}
                        <div className='lg:hidden'>
                            <button
                                aria-label='Open Menu'
                                title='Open Menu'
                                className='p-2 mx-10 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <Bars4Icon className='w-6 h-7'></Bars4Icon>
                            </button>
                            {
                                isMenuOpen && (
                                    <div className='absolute z-10 top-0 left-0 w-full'>
                                        <div className='p-5 bg-gradient-to-r from-[#0F0715] to-[#211137] text-[#FFFFFF] border rounded shadow-sm'>
                                            <div className='flex items-center justify-between mb-4'>
                                                <div>
                                                    <h1 className='font-bold text-2xl'>Shukumar</h1>
                                                </div>
                                                <div>
                                                    <button
                                                        aria-label='Close Menu'
                                                        title='Close Menu'
                                                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >

                                                        <XMarkIcon className='h-6 w-6'></XMarkIcon>
                                                    </button>
                                                </div>
                                            </div>
                                            <nav>
                                                <ul className='space-y-4'>
                                                    <li className="text-white  "><a href="#home">Home</a></li>
                                                    <li className="text-white  "><a href="#about">About Me</a></li>
                                                    <li className="text-white  " onClick={handleDownload} ><a href="#about">Resume</a></li>
                                                    <li>
                                                        {
                                                            user ? <NavLink to='/dashboard/skills'>Dashboard</NavLink> : <NavLink to='/login'>Login</NavLink>
                                                        }
                                                    </li>
                                                    <li>
                                                        {user && <button onClick={() => handleLogout()}>Logout</button>}
                                                    </li>
                                                    <li className="text-white "><a href="#contact">Contact Me</a></li>




                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div >
        </div>

    );
};

export default NavBar;