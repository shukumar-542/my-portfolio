import { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Modal from '../../../../components/Modal/Modal';
import { FiLink } from 'react-icons/fi';
import Heading from '../../../../components/ui/Heading';
AOS.init();

const Projects = () => {
    const [singleProject, setSingleProject] = useState({})
    const [showModal, setShowModal] = useState(false);






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



    const handleTestimonial = (id) => {
        fetch(`https://protfolio-server-delta.vercel.app/api/v1/project/${id}`)
            .then(response => response.json())
            .then(data => {
                setSingleProject(data);
            })
            .catch(error => {
                console.error(error);
            });


        setShowModal(true);

    }
    const handleCloseModal = () => {
        setShowModal(false);
    };







    return (
        <section className=' bg-[#050709]  ' id='project'  >
            <div className='py-20 my-container'>
                <div className='text-center'>
                    <Heading>My Recent Works</Heading>
                    <p className='text-base text-[#777980]  md:text-lg'>Here you will get the overview of latest <br className="hidden md:block" /> three projects done by me.</p>
                </div>
                <section className='my-10 grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center gap-5' >
                    {
                        projects.map((project, index) => <div key={index} className="max-w-xl bg-[#190D28]  rounded-xl shadow-xl" data-aos="fade-right" data-aos-duration="1000">
                            <div className="px-5 pt-5 image-wrap h-64" >
                                <img src={project.img} alt="Shoes" className="rounded-xl h-60 w-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000" />
                            </div>
                            <div className="items-center text-white  px-5 my-2">
                                <h1 className='text-xl font-semibold'>{project.name}</h1>
                                <p className='mt-5'><span className='font-semibold'>Project overview : </span><span className='text-gray-300'>{project?.description}</span></p>
                                <div className='flex justify-center gap-5 my-5'>
                                    <label htmlFor="my_modal_6" onClick={() => handleTestimonial(project?._id)} className="border border-[#7E4AE8] px-6 py-2 cursor-pointer  text-sm text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-gradient-to-r from-[#7E4AE8] to-[#371C6A]">
                                        View Details
                                    </label>
                                    <button >
                                        <a target="_blank" href={project.liveSite} rel='noreferrer' role="button" className="contact-btn px-3 py-3 text-sm text-white rounded-lg font-semibold uppercase tracking-wide ">Live </a>
                                    </button>
                                </div>
                                <div className='text-white flex gap-2 justify-between py-4 px-5'>

                                    <button className='flex items-center gap-1 hover:bg-[#371C6A] px-2 rounded'>
                                        <FiLink></FiLink><a target="_blank" href={project.clientSite} rel='noreferrer' role="button" className="">Client </a>
                                    </button>
                                    <button className='flex items-center gap-1 hover:bg-[#371C6A] px-2 rounded'>
                                        <FiLink></FiLink><a target="_blank" href={project.serverSite} rel='noreferrer' role="button" className="">Server </a>
                                    </button>

                                </div>
                            </div>
                        </div>)
                    }


                </section>
                {
                    showModal && (

                        <Modal
                            singleProject={singleProject}
                            onClose={handleCloseModal} />
                    )
                }
                {/* <Modal singleProject={singleProject}></Modal> */}
            </div>
        </section>
    );
};

export default Projects;