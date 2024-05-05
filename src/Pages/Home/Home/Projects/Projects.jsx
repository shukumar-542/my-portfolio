import { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Modal from '../../../../components/Modal/Modal';
import { FiLink } from 'react-icons/fi';
import Heading from '../../../../components/ui/Heading';
AOS.init();

const Projects = () => {
    const [projects, setProject] = useState([])
    const [singleProject, setSingleProject] = useState([])

    const handleProject = (project) => {
        setSingleProject(project);
    }
    useEffect(() => {
        fetch('project.json').then(res => res.json()).then(data => setProject(data))
    }, [])
    return (
        <section className='py-20 my-container bg-[#050709]  ' id='project'  >
            <div className='text-center'>
                {/* <h1 className='text-3xl lg:text-4xl font-bold text-white'>My Recent Projects</h1> */}
                <Heading>My Recent Works</Heading>
                <p className='text-base text-[#777980]  md:text-lg'>Here you will get the overview of latest <br className="hidden md:block" /> three projects done by me.</p>
            </div>
            <section className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-5' >
                {
                    projects.map((project, index) => <div key={index} className="max-w-xl bg-[#190D28]  rounded-xl shadow-xl" data-aos="fade-right" data-aos-duration="1000">
                        <div className="px-5 pt-5 image-wrap h-64" >
                            <img src={project.img} alt="Shoes" className="rounded-xl h-60 w-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000" />
                        </div>
                        <div className="items-center text-center px-2 my-2">
                            <h2 className="text-2xl font-semibold"></h2>
                            <div className='flex justify-center gap-5 my-5'>
                                <label  htmlFor="my_modal_6" onClick={() =>handleProject(project)} className="border border-[#7E4AE8] px-6 py-3 cursor-pointer  text-sm text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-gradient-to-r from-[#7E4AE8] to-[#371C6A]">
                                    View Details
                                </label>
                                <button >
                                    <a target="_blank" href={project.liveSite} rel='noreferrer' role="button" className="contact-btn px-6 py-3 text-sm text-white rounded-lg font-semibold uppercase tracking-wide ">Live Project</a>
                                </button>
                            </div>
                            <div className='text-white flex gap-2 justify-between py-4 px-5'>
                                <h1 className='text-xl font-semibold'>{project.name}</h1>
                                <button className='flex items-center gap-1 hover:bg-sky-700 px-2 rounded'>
                                <FiLink></FiLink><a target="_blank" href={project.clientSite} rel='noreferrer' role="button" className="">Client </a>
                                </button>
                                <button className='flex items-center gap-1 hover:bg-sky-700 px-2 rounded'>
                                <FiLink></FiLink><a target="_blank" href={project.serverSite} rel='noreferrer' role="button" className="">Server </a>
                                </button>

                            </div>
                        </div>
                    </div>)
                }
                {/* <div className="max-w-xl bg-[#182234]  rounded-xl shadow-xl" data-aos="fade-right" data-aos-duration="1000">
                    <div className="px-5 pt-5 image-wrap h-60" >
                        <img src={project1} alt="Shoes" className="rounded-xl h-52 w-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000" />
                    </div>
                    <div className="items-center text-center px-2 my-2">
                        <h2 className="text-2xl font-semibold"></h2>
                        <p className='my-3'></p>
                        <div className='flex justify-center gap-5 my-10'>
                            <button className="border border-sky-700 px-6 py-3   text-sm text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-sky-800">
                                View Details
                            </button>
                            <button >
                                <a target="_blank" href='https://toy-bazar.web.app/' rel='noreferrer' role="button" className="border border-sky-700 bg-sky-700 px-6 py-3 text-sm text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-sky-800">Visit Live Project</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" className="max-w-xl bg-[#182234]   rounded-xl shadow-xl">
                    <div className="px-5 pt-5 image-wrap h-60">
                        <img src={project2} alt="Shoes" className="rounded-xl h-52 w-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000" />
                    </div>
                    <div className="items-center text-center px-2 my-2">
                        <h2 className="text-2xl font-semibold"></h2>
                        <p className='my-3'></p>
                        <div className='flex justify-center gap-5 my-10'>
                            <button onClick={() => window.my_modal_5.showModal()} className="border border-sky-700 px-6 py-3 text-sm text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-sky-800">
                                View Details
                            </button>
                            <button>
                                <a target="_blank"  href='https://sport-zone-ccbc8.web.app/' rel='noreferrer' role="button" className="border border-sky-700 bg-sky-700 px-6 py-3 text-sm text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-sky-800">Visit Live Project</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="max-w-xl bg-[#182234]   rounded-xl shadow-2xl">
                    <div className="px-5 pt-5 image-wrap h-60">
                        <img src={project3} alt="Shoes" className="rounded-xl h-52 w-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000" />
                    </div>
                    <div className="items-center text-center px-2 my-2">
                        <h2 className="text-2xl font-semibold"></h2>
                        <p className='my-3'></p>
                        <div className='flex justify-center gap-5 my-10'>
                            <button

                                className="border border-sky-700 px-6 py-3 text-sm text-white rounded-lg font-semibold uppercase tracking-wide  hover:bg-sky-800"
                            >
                                View Details
                            </button>
                            <button>
                                <a target="_blank" href='https://food-mart-auth.web.app/' rel='noreferrer' role="button" className="border border-sky-700 bg-sky-700 px-6 py-3 text-sm text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-sky-800">Visit Live Project</a>
                            </button>
                        </div>
                    </div>
                </div> */}

            </section>

            <Modal singleProject={singleProject}></Modal>
        </section>
    );
};

export default Projects;