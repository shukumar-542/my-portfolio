import About from "../../About/About";
import Services from "../../Services/Services";
import Skill from "../../Skill/Skill";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "./Projects/Projects";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Projects></Projects>
            <About></About>
            <Skill></Skill>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;