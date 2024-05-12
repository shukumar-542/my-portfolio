import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
interface Skill {
    _id: string
    name: string;
    logo: string;
}

const SkillsPage = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

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

    const handleDelete = (id) => {
        try {


            fetch(`https://protfolio-server-delta.vercel.app/api/v1/skill/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount > 0) {
                        Swal.fire({
                            title: "Skills has been deleted!",
                            text: "Your Skill Deleted!",
                            icon: "success"
                        });

                    }
                    const remaining = skills.filter(skill => skill._id !== id)
                    setSkills(remaining)
                })

        } catch (error) {
        }
    }


    return (
        <div className='my-container'>
            <div className='mb-5'>
                <NavLink to='/dashboard/uploadSkills' className='contact-btn text-white'>Upload Skills</NavLink>
            </div>
            <div className='w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[100%] p-4 max-h-[70vh] overflow-auto'>
                <div className='grid grid-cols-1 md:grid-cols-6 gap-5 '>
                    {skills && skills.length > 0 ?
                        skills.map((skill, index) => (
                            <div key={index} className=' flex items-center justify-center  py-5 bg-[#1e112c] text-center  rounded-md hover:bg-[#2A1454] transition-all duration-400 '>
                                <div className='text-white'>
                                    <img src={skill?.logo} className='w-32 h-32' alt="skill" />
                                    <div className='flex justify-between items-center mt-2'>
                                        <p>{skill?.name}</p>
                                        <MdDelete onClick={() => handleDelete(skill?._id)} size={25} className='bg-red-500 text-white cursor-pointer p-[2px] rounded-sm hover:bg-red-600' />
                                    </div>
                                </div>

                            </div>
                        )) :
                        <div>Loading..</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;
