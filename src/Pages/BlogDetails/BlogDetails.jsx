import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = () => {

    const { id } = useParams()
    // const post = blogData.find((post) => post.id === parseInt(id));

    const [blog, setBlogs] = useState('');

    useEffect(() => {
        fetch( `https://protfolio-server-delta.vercel.app/api/v1/blog/${id}`)
            .then(response => response.json())
            .then(data => {
                setBlogs(data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }, [id]);

    return (
        <div className="bg-gray-200  text-white ">
            <div className="max-w-5xl mx-auto pt-10">

                <img src={blog?.img} className="w-[100%] h-[300px] mx-auto" alt="" />
                <div className="text-gray-700 py-10 px-5">
                    {/* <h1 className=" text-4xl font-bold">{blog?.title}</h1> */}
                    <div dangerouslySetInnerHTML={{ __html: blog?.content }} />

                    
                </div>
            </div>

        </div>
    );
};

export default BlogDetails;