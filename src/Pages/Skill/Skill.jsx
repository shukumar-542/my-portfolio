

import { useEffect, useState } from "react";


const Skill = () => {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('https://protfolio-server-delta.vercel.app/api/v1/skill')
            .then(response => response.json())
            .then(data => {
                setSkills(data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }, []);

    return (
        <div id='skills' className="my-container   bg-[#0F0715]">
            <div className="text-center">
                <h1 className="bg-gradient-to-r from-[#8A54F7] via-[#BFA2FB] to-[#ECE2FE] inline-block text-transparent bg-clip-text text-3xl lg:text-4xl font-bold  py-5 text-center ">My Skills</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-6 gap-5 my-container'>
                
                {
                    skills.map((skill) => <div key={skill?._id} className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>

                    <div>
                        
                        <img src={skill?.logo} className='w-24 h-24' alt="" />
                        <p className='text-[#8750f7] font-semibold text-xl mt-2'>{skill?.name}</p>
                    </div>

                </div> )
                }
                
                

                {/* <div className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>

                    <div>
                        <SiRedux size={80} className='text-[#7248B6]' />
                        <p className='text-[#8750f7] font-semibold text-xl mt-2'>Redux</p>
                    </div>

                </div>
                <div className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>

                    <div>
                        <SiTypescript  size={80} className='text-[#0176C6]' />
                        <p className='text-[#8750f7] font-semibold text-xl mt-2'>TypeScript</p>
                    </div>

                </div>
                <div className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>

                    <div>
                        <SiReact   size={80} className='text-[#00C6F7]' />
                        <p className='text-[#8750f7] font-semibold text-xl mt-2'>React</p>
                    </div>

                </div>
                <div className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>

                    <div>
                        <SiJavascript    size={80} className='text-[#ECDA1D]' />
                        <p className='text-[#8750f7] font-semibold text-xl mt-2'>Javascript</p>
                    </div>

                </div>
                <div className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>

                    <div>
                        <SiTailwindcss  size={80} className='text-[#06B0CD]' />
                        <p className='text-[#8750f7] font-semibold text-xl mt-2'>Tailwind Css</p>
                    </div>

                </div>
                <div className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>

                    <div>
                        <SiExpress  size={80} className='text-gray-200' />
                        <p className='text-[#8750f7] font-semibold text-xl mt-2'>Express</p>
                    </div>

                </div>
                <div className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>

                    <div>
                        <SiFigma  size={80} className='text-gray-200' />
                        <p className='text-[#8750f7] font-semibold text-xl mt-2'>Figma</p>
                    </div>

                </div>
                <div className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>

                    <div>
                        <DiMongodb  size={80} className='text-[#569134]' />
                        <p className='text-[#8750f7] font-semibold text-xl mt-2'>Mongodb</p>
                    </div>

                </div>
                <div className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>

                    <div>
                        <FaGithub  size={80} className='text-gray-200' />
                        <p className='text-[#8750f7] font-semibold text-xl mt-2'>Github</p>
                    </div>

                </div>
                <div className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>

                    <div>
                        <SiFirebase   size={80} className='text-[#F3C43F]' />
                        <p className='text-[#8750f7] font-semibold text-xl mt-2'>Firebase </p>
                    </div>

                </div>
                <div className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>

                    <div>
                        <SiNodedotjs    size={80} className='text-[#7CB701]' />
                        <p className='text-[#8750f7] font-semibold text-xl mt-2'>Nodejs </p>
                    </div>

                </div> */}
                
            </div>

        </div>
    );
};

export default Skill;