import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Heading from '../ui/Heading';
const UploadSkills = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        try {
            const newSkill = {
                ...data
            }

            fetch('https://protfolio-server-delta.vercel.app/api/v1/skill', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newSkill)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        navigate('/dashboard/skills');
                        Swal.fire({
                            title: "New Skills Added!",
                            text: "Your Skill Added!",
                            icon: "success"
                          });

                    }
                })

            reset()
        } catch (error) {
        }

    }
    return (
        <div className='my-container '>
            <h1 className='text-center text-2xl font-bold  text-[#62328A]'>Upload Your New Skills</h1>




            <div className="flex justify-center ">
                <div className="  w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[600px] p-4 max-h-[90vh] overflow-auto">
                    <div className=" shadow-md  rounded-2xl  overflow-hidden">
                        
                        <div className="p-5 lg:p-11">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col space-y-2 w-full">
                                    <label htmlFor="title" className="text-gray-400">Skill Name</label>
                                    <input {...register("name")} type="text" className="border rounded-md p-2" placeholder="Type Your Skill" name="name" id="" />
                                </div>
                              

                               
                                <div className="flex flex-col space-y-2 w-full">
                                    <label htmlFor="img" className="text-gray-400">Image Url</label>
                                    <input {...register("logo")} type="text" className="border rounded-md p-2" placeholder="Type Your Image Url" name="logo" id="" />
                                </div>


                                <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Add New Skill</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default UploadSkills;