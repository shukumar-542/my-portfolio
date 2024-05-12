import { useEffect, useState } from 'react';
// import { FiLink } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../components/ui/Loading/Loading';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';





const ProjectPage = () => {

    const [projects, steProjects] = useState([]);

    useEffect(() => {
        fetch('https://protfolio-server-delta.vercel.app/api/v1/project')
            .then(response => response.json())
            .then(data => {
                steProjects(data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }, []);



    const handleDelete = (id) => {
        try {


            fetch(`https://protfolio-server-delta.vercel.app/api/v1/project/${id}`, {
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
                    const remaining = projects.filter(skill => skill._id !== id)
                    steProjects(remaining)
                })

        } catch (error) {
            console.error(error.message)
        }
    }


    return (
        <div className='my-container'>
            <h1 className='text-center text-2xl font-bold '>All Projects</h1>

            <div className='mb-5'>
                <NavLink to='/dashboard/uploadProjects' className='contact-btn text-white'>Upload Projects</NavLink>
            </div>

            <div className="overflow-x-auto  flex justify-center mt-5">
                <table className="table  ">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>Project Name</th>
                            <th>Project Description</th>
                            <th>Live Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            projects && projects.length > 0 ?
                                projects.map((project) =>
                                    <tr key={project?._id}>

                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={project?.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div >
                                                    <div className="font-bold">{project?.name.slice(0, 9)}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {
                                                project?.description.slice(0, 50)
                                            }..
                                        </td>
                                        <td><button >
                                            <a target="_blank" href={project?.liveSite} rel='noreferrer' role="button" className="contact-btn px-3 py-3 text-sm text-white rounded-lg font-semibold uppercase tracking-wide ">Live </a>
                                        </button></td>
                                        <th className='flex items-center gap-2'>
                                            <button onClick={() => handleDelete(project?._id)} className=""><RiDeleteBin6Line size={22} className=' text-red-500 p-[2px]  rounded-sm ' /></button>
                                            <NavLink to={`/dashboard/updateProject/${project?._id}`}>

                                                <FaRegEdit className='text-green-500 cursor-pointer' />
                                            </NavLink>
                                        </th>
                                    </tr>

                                )
                                : <Loading />
                        }




                    </tbody>


                </table>
            </div>



        </div>
    );
};

export default ProjectPage;