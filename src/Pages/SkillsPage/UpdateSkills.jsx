import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateSkills = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [skill, setSkill] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/skill/${id}`)
            .then(response => response.json())
            .then(data => {
                setSkill(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id])


    const onSubmit = (data) => {
        fetch(`http://localhost:5000/api/v1/skill/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Skill update successfully!',
                    })
                    navigate('/dashboard/skills')
                }
            })
            reset()

    }
    return (
        <div>
            <h1 className="text-center mt-10">Update Skills</h1>
            <div className="flex justify-center ">
                <div className="  w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[600px] p-4 max-h-[90vh] overflow-auto">
                    <div className=" shadow-md  rounded-2xl  overflow-hidden">

                        <div className="p-5 lg:p-11">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col space-y-2 w-full">
                                    <label htmlFor="title" className="text-gray-400">Skill Name</label>
                                    <input defaultValue={skill?.name} {...register("name")} type="text" className="border rounded-md p-2" placeholder="Type Your Skill" name="name" id="" />
                                </div>



                                <div className="flex flex-col space-y-2 w-full">
                                    <label htmlFor="img" className="text-gray-400">Image Url</label>
                                    <input defaultValue={skill?.logo} {...register("logo")} type="text" className="border rounded-md p-2" placeholder="Type Your Image Url" name="logo" id="" />
                                </div>


                                <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Update Skill</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateSkills;