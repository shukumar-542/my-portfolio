import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProject = () => {


    const { register, handleSubmit, reset,control } = useForm();
    const navigate = useNavigate();
    const [project, setProject] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/project/${id}`)
            .then(response => response.json())
            .then(data => {
                setProject(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id])

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'technologies', // Name of the field array
      });


    const onSubmit = (data) => {
        fetch(`http://localhost:5000/api/v1/project/${id}`, {
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
                    navigate('/dashboard/projects')
                }
            })
        reset()

    }


    return (
        <div className='my-container'>
            <h1 className='text-center '>Upload Your New Projects</h1>



            <div className="flex justify-center ">
                <div className="  w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[100%] p-4 max-h-[70vh] overflow-auto">
                    <div className="bg-white shadow-md  rounded-2xl  overflow-hidden">

                        <div className="p-5 lg:p-11">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col space-y-2 w-full">
                                    <label htmlFor="title" className="text-gray-400">Project Name</label>
                                    <input {...register("name")} defaultValue={project?.name} type="text" className="border rounded-md p-2" placeholder="Type Your Project Name" name="name" id="" />
                                </div>



                                <div className="flex flex-col space-y-2 w-full">
                                    <label htmlFor="img" className="text-gray-400">Image Url</label>
                                    <input defaultValue={project?.img} {...register("img")} type="text" className="border rounded-md p-2" placeholder="Type Your Image Url" name="img" id="" />
                                </div>
                                <div className="flex flex-col space-y-2 w-full">
                                    <label htmlFor="img" className="text-gray-400 mt-2">Client Site Link</label>
                                    <input defaultValue={project?.clientSite} {...register("clientSite")} type="text" className="border rounded-md p-2" placeholder="Type Your client Url" name="clientSite" id="" />
                                </div>
                                <div className="flex flex-col space-y-2 w-full">
                                    <label htmlFor="img" className="text-gray-400 mt-2">Server Site Link</label>
                                    <input defaultValue={project?.serverSite} {...register("serverSite")} type="text" className="border rounded-md p-2" placeholder="Type Your server Url" name="serverSite" id="" />
                                </div>
                                <div className="flex flex-col space-y-2 w-full">
                                    <label htmlFor="img" className="text-gray-400 mt-2">Live Site Link</label>
                                    <input defaultValue={project?.liveSite} {...register("liveSite")} type="text" className="border rounded-md p-2" placeholder="Type Your Live Url" name="liveSite" id="" />
                                </div>
                                <div className="flex flex-col space-y-2 w-full">
                                    <label htmlFor="img" className="text-gray-400 mt-2">Description</label>
                                    <textarea defaultValue={project?.description} {...register("description")}  className="border rounded-md p-2" placeholder="Type Your description" name="description" id="" />
                                </div>
                                <div className="flex flex-col space-y-2 w-full">
                                    <label htmlFor="img" className="text-gray-400 mt-2">Feature</label>
                                    <textarea defaultValue={project?.feature} {...register("feature")}  className="border rounded-md p-2" placeholder="Type Your Project feature" name="feature" id="" />
                                </div>


                                <div className="flex flex-col space-y-2 w-full">
                                    <label htmlFor="technology" className="text-gray-400 mt-2">Technologies</label>
                                    {fields.map((field, index) => (
                                        <div  key={field.id} className='flex items-center'>
                                            <input
                                                {...register(`technologies.${index}.name`)} // Use proper indexing for array fields
                                                
                                                type="text"
                                                className="border rounded-md p-2"
                                                placeholder="Type a technology"
                                            />
                                            <button type="button" className=' text-white rounded-md' onClick={() => remove(index)}><CiCircleRemove size={30} className='text-red-400 hover:text-red-500' /></button>
                                        </div>
                                    ))}
                                    <button type="button" className='bg-[#6C3796] text-white py-1 rounded-md w-[50%]' onClick={() => append(  '' )}>Add Technology</button>
                                </div>


                                <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-md bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Add New Project</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default UpdateProject;