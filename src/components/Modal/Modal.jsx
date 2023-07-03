
const Modal = ({ singleProject }) => {
    console.log(singleProject);
    const { name, img, technology, description } = singleProject

    return (

        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box bg-[#182234] ">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
                        <div className="image-wrap h-96">
                            <img src={img}  className="rounded-xl h-52 w-full object-cover object-top hover:object-bottom transition-all ease-in-out duration-1000" alt="" />
                        </div>
                        <div>
                            <h1 className="text-2xl text-white font-bold">Name : {name}</h1>
                            <p className="text-white">{description}</p>
                           
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className=" border border-sky-700 bg-sky-700 px-6 py-3 text-sm text-white rounded-lg font-semibold uppercase tracking-wide hover:bg-sky-800">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;