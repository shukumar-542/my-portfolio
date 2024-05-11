import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
interface Skill {
    name: string;
    logo: string;
}

const SkillsPage = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/skill')
            .then(response => response.json())
            .then(data => {
                setSkills(data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }, []);


    return (
        <div className='my-container'>
            <div className='mb-5'>
                <NavLink to='/dashboard/uploadSkills' className='contact-btn text-white'>Upload Skills</NavLink>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-6 gap-5 '>
                {skills && skills.length > 0 ?
                    skills.map((skill, index) => (
                        <div key={index} className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>
                            <div className='text-white'>
                                <img src={skill?.logo} className='w-32' alt="skill" />
                                <p>{skill?.name}</p>
                            </div>

                        </div>
                    )) :
                    <div>No skills found</div>
                }
            </div>
        </div>
    );
};

export default SkillsPage;
