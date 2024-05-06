import { useEffect, useState } from "react";
import Heading from "../../components/ui/Heading";
import { Link } from 'react-router-dom';
import { MdDateRange } from "react-icons/md";
const Blog = () => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json').then(res => res.json()).then(data => setBlogs(data))
    }, [])


    return (
        <div id="blog" className="my-container bg-[#0F0715]">
            <div className="text-center">
                <Heading>Recent Blogs</Heading>
            </div>

            <div className="my-container grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    blogs.map((blog, index) => <Link to={`/blog/${blog?.id}`} key={index} className="max-w-xl bg-[#190D28]  rounded-xl shadow-xl cursor-pointer" data-aos="fade-right" data-aos-duration="1000">
                        <div className=" h-[300px] w-[100%] relative transition-all duration-500 serviceCard overflow-hidden rounded-md" >
                            <img src={blog.image} className="h-[300px] w-[100%]" />

                        </div>
                        <div className="absolute w-[80%] left-10 bottom-2 rounded-md shadow-md   bg-[#3A1E71] py-5   px-5 ">
                            <p className="flex font-semibold text-xl text-[#a078ee] items-center gap-2">
                                <MdDateRange />
                                {blog?.date}
                            </p>
                            <h1 className="text-white  text-xl font-bold">{blog?.title}</h1>
                        </div>

                    </Link>)
                }
            </div>
        </div>
    );
};

export default Blog;