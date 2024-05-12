import { FiLink } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
// eslint-disable-next-line react/prop-types
const Modal = ({ onClose, singleProject }) => {
    console.log(singleProject);
    // eslint-disable-next-line react/prop-types
    const { name, img,  clientSite, liveSite, serverSite, description, feature, technologies } = singleProject
    console.log(technologies);

    return (




        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[900px] p-4 max-h-[90vh] overflow-auto">
                <div className="bg-[#190D28] shadow-md  rounded-2xl  overflow-hidden">
                    <div className="absolute right-2 top-3  cursor-pointer" >
                        <HiXMark size={30} onClick={onClose} className=" text-white bg-red-400 rounded-full p-1" />
                    </div>
                    <div className="p-5 lg:p-11">
                        <div className="grid  grid-cols-1 md:grid-cols-2 items-center gap-5">
                            <div>
                                <div className="image-wrap h-40">
                                    <img src={img} className="rounded-xl h-52 w-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000" alt="" />

                                </div>
                                <p className="text-white my-2 font-semibold">uses Technology :</p>
                                <div className="text-white grid grid-cols-2">
                                    {
                                        // eslint-disable-next-line react/prop-types
                                        technologies.map((technology,i)=> <ul  key={i}><li>{technology.name}</li></ul>)
                                    }
                                </div>
                                <div className="flex gap-5 items-center mt-5">
                                    <button className='flex items-center gap-1 text-white bg-[#371C6A] px-2 rounded'>
                                        <FiLink></FiLink><a target="_blank" href={clientSite} rel='noreferrer' role="button" className="">Client </a>
                                    </button>
                                    <button className='flex items-center gap-1 bg-[#371C6A] text-white px-2 rounded'>
                                        <FiLink></FiLink><a target="_blank" href={serverSite} rel='noreferrer' role="button" className="">Server </a>
                                    </button>
                                    <button >
                                    <a target="_blank" href={liveSite} rel='noreferrer' role="button" className="flex items-center gap-1 bg-[#371C6A] text-white px-2 rounded">Live Site </a>
                                </button>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h1 className="text-xl text-white font-semi-bold">Name : {name}</h1>

                                </div>
                                <div className="text-white mt-5">
                                    <p><span className="font-bold">Description :</span> {description}</p>
                                    <p className="mt-5"><span className="font-bold">Feature :</span> {feature}</p>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>





            {/* <div className="modal ">
                <div className="modal-box bg-[#190D28] w-[900px] mx-auto">
                    <div className="grid  grid-cols-1 md:grid-cols-2 items-center gap-5">
                        <div className="image-wrap h-96">
                            <img src={img} className="rounded-xl h-52 w-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000" alt="" />
                        </div>
                        <div>
                            <div>
                                <h1 className="text-2xl text-white font-semi-bold">Name : {name}</h1>

                            </div>
                            <div className="text-white mt-5">
                                <p>Uses Technology:</p>
                                {
                                    technology?.map((item, index) => <li key={index}>{item}</li>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className=" border bg-[#190D28] cursor-pointer px-6 py-3 text-sm text-white rounded-lg font-semibold uppercase tracking-wide ">Close</label>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Modal;