
// eslint-disable-next-line react/prop-types
const Modal = ({ singleProject }) => {
    // console.log(singleProject);
    // eslint-disable-next-line react/prop-types
    const { name, img, technology } = singleProject

    return (

        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box bg-[#190D28] w-[700px] mx-auto">
                    <div className="grid  grid-cols-1 md:grid-cols-2 items-center gap-5">
                        <div className="image-wrap h-96">
                            <img src={img} className="rounded-xl h-52 w-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000" alt="" />
                        </div>
                        <div>
                            <div>
                                <h1 className="text-2xl text-white font-semi-bold">Name : {name}</h1>
                                {/* <p className="text-white">{description}</p> */}

                            </div>
                            <div className="text-white mt-5">
                                <p>Uses Technology:</p>
                                {
                                    // eslint-disable-next-line react/prop-types
                                    technology?.map((item, index) => <li key={index}>{item}</li>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className=" border bg-[#190D28] cursor-pointer px-6 py-3 text-sm text-white rounded-lg font-semibold uppercase tracking-wide ">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;