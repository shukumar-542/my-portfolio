import Heading from "../../components/ui/Heading";

const About = () => {
    return (
        <div id="about" className="rounded-md bg-gradient-to-r from-[#0F0715] to-[#211137] text-white ">


            <div className="  my-container">
                {/* <h1 className="text-5xl font-semibold text-center"></h1>s */}
                <p>About Me</p>
                <Heading>I’m Shukumar Ghosh</Heading>
                

                <p className="mb-2">Frontend Developer</p>
                <p className="pb-5">I have completed Bsc in cse at Daffodil international university. I am a self-motivated Web Developer with knowledge in Next js , redux , Typescript, React, Node, Express.js, MongoDB,
                    JavaScript, HTML, CSS,and mobile responsive web development seeking a position as a
                    Web Developer where I can apply my skills and ability in writing clean,
                    efficient code and the knowledge of my UX (user experience) Design</p>

            </div>
           
           
        </div>
    );
};

export default About;