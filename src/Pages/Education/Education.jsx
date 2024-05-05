import Heading from "../../components/ui/Heading";
import { FaGraduationCap } from "react-icons/fa";
import About from "../About/About";
const Education = () => {
    return (
        <div className="my-container bg-[#050709]">
            <div className="flex justify-center items-center gap-4">
                <FaGraduationCap className="text-[#824DEE]" size={40} />
                <Heading className='text-7xl'>My Education</Heading>
            </div>


            <div className="my-container grid grid-cols-1 gap-10 md:grid-cols-2">
                <div>
                    <About/>
                </div>

                <div className="flex flex-col justify-center gap-5"> 
                    <div className="p-4 bg-gradient-to-r from-[#291745] to-[#291745] text-white rounded-md shadow-md hover:from-[#7E4AE8] hover:to-[#371C6A] transition-all duration-500">
                        <h1 className="text-2xl font-bold">Bsc in CSE</h1>
                        <p>Daffodil International University</p>
                        <p>CGPA: 3.81</p>
                    </div>



                    <div className="p-4 bg-[#291745] hover:bg-gradient-to-r from-[#7E4AE8] to-[#371C6A] transition duration-500 text-white rounded-md shadow-md" >
                        <h1 className="text-2xl font-bold ">Diploma in Computer Technology</h1>
                        <p>Jhenaidah Polytechnic institute</p>
                        <p>Cgpa : 3.11</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;