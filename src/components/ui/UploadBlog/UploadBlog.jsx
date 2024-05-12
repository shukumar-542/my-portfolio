import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const UploadBlog = () => {
    const editor = useRef(null);
    const navigate = useNavigate()
    const [posts, setPost] = useState({
        title: '',
        img : '',
        content: ''
    })

    const fieldChanged = (event) => {
        setPost({ ...posts, [event.target.name]: event.target.value })
    }

    const contentFieldChange = (data) => {
        setPost({ ...posts, content: data })
    }


    const handlePostSubmit = (e) => {
        e.preventDefault();


        try {
            const newBlog = {
                ...posts
            }

            fetch('https://protfolio-server-delta.vercel.app/api/v1/blog', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newBlog)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        navigate('/dashboard/blogs');
                        Swal.fire({
                            title: "New Blog Posts!",
                            text: "Your Blog Posts!",
                            icon: "success"
                        });

                    }
                })

        } catch (error) {
            console.error(error.message)
        }

    }



    return (
        <div className="my-container w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[100%] p-4 max-h-[90vh] overflow-auto">
            <h1 className='text-2xl font-bold' >What&rsquo;s going in your mind?</h1>

            <form onSubmit={handlePostSubmit}>
                <div className="flex flex-col space-y-2 w-full mt-5">
                    <label htmlFor="title" className="text-gray-600">Blog Title</label>
                    <input type="text" onChange={(e) => fieldChanged(e)} className="border rounded-md p-2" placeholder="Type Your Project Name" name="title" id="" />
                </div>
                <div className="flex flex-col space-y-2 w-full mt-5">
                    <label htmlFor="title" className="text-gray-600">Blog Image Url</label>
                    <input type="text" onChange={(e) => fieldChanged(e)} className="border rounded-md p-2" placeholder="Type Your Image url" name="img" id="" />
                </div>
                <div className="flex flex-col space-y-2 w-full mt-5">
                    <label htmlFor="title" className="text-gray-600">Blog Content</label>
                    <JoditEditor
                        ref={editor}
                        value={posts.content}
                        onChange={contentFieldChange}
                    />
                    {/* <textarea rows={5} type="text" className="border rounded-md p-2" placeholder="Type here.." name="name" id="" /> */}
                </div>
                <button type="submit" className=" px-4 py-2  font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-sm bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Create Post</button>

            </form>
        </div>
    );
};

export default UploadBlog;