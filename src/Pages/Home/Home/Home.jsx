import Education from "../../Education/Education";
import Services from "../../Services/Services";
import Skill from "../../Skill/Skill";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "./Projects/Projects";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            {/* <About></About> */}
            <Projects></Projects>
            <Skill></Skill>
            <Services></Services>
            <Education/>
            <Contact></Contact>
        </div>
    );
};

export default Home;