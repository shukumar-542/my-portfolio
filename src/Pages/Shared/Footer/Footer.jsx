
const Footer = () => {
    return (

        <div className="my-container flex justify-center pt-10 bg-[#0F0715] text-neutral-content">



            <div>
                <div>
                    <ul className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center py-4 text-xl font-semibold '>
                        <li className="text-white  "><a href="#home">Resume</a></li>
                        <li className="text-white  "><a href="#blog">Blogs</a></li>
                        <li className="text-white  "><a href="#about">About Me</a></li>
                        <li className="text-white "><a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
                <div className="text-center grid-flow-col pb-2 text-[#653ABC]">
                    <p>Copyright © 2023 - All right reserved By Shukumar</p>
                </div>
            </div>


        </div>
    );
};

export default Footer;