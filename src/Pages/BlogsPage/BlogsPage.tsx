import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

interface blogPost {
    _id: string,
    title: string,
    content: string,
    img: string
}

const BlogsPage = () => {

    const [blogs, setBlogs] = useState<blogPost[]>([]);

    useEffect(() => {
        fetch('https://protfolio-server-delta.vercel.app/api/v1/blog')
            .then(response => response.json())
            .then(data => {
                setBlogs(data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }, []);

    const handleBlogDelete = (id) => {
            try {


                fetch(`https://protfolio-server-delta.vercel.app/api/v1/blog/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.deletedCount > 0) {
                            Swal.fire({
                                title: "Blog has been deleted!",
                                text: "Your Skill Deleted!",
                                icon: "success"
                            });

                        }
                        const remaining = blogs.filter(skill => skill._id !== id)
                        setBlogs(remaining)
                    })

            } catch (error) {
            }

    }
    return (
        <div className='my-container '>

            <div className='mb-5'>
                <NavLink to='/dashboard/uploadBlogs' className='contact-btn text-white'>Post a new blog</NavLink>
            </div>

            <div className=' w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[100%] p-4 max-h-[70vh] overflow-auto'>
                <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        blogs.map((blog) => <div key={blog._id}>
                            <img src={blog?.img} className="w-[100%] h-[300px] mx-auto" alt="" />
                            <div className='flex justify-between items-center my-2 px-2'>
                                <h1>{blog?.title}</h1>
                                <button onClick={() => handleBlogDelete(blog?._id)}><AiOutlineDelete size={25} className='bg-red-500 hover:bg-red-600 text-white p-1 rounded-sm' /></button>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;