import Blog from "../../Blog/Blog";
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
            <Projects></Projects>
            <Skill></Skill>
            <Services></Services>
            <Education/>
            <Blog/>
            <Contact></Contact>
        </div>
    );
};

export default Home;