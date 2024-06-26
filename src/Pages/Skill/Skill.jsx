

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
        <div id='skills' className="  bg-[#0F0715]">
            <div className="my-container ">
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

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skill;