import { useParams } from "react-router-dom";
import JoditEditor from 'jodit-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBlog = () => {
    const [singlePost, setSinglePost] = useState([])
    // const [content, setContent] = useState(defaultEditorValue);
    const { id } = useParams();
    const editor = useRef(null);
    const navigate = useNavigate()
    const [posts, setPost] = useState({
        title: '',
        img: '',
        content: ''
    })


    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/blog/${id}`)
            .then(response => response.json())
            .then(data => {
                setSinglePost(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id])




    const fieldChanged = (event) => {
        setPost({ ...posts, [event.target.name]: event.target.value })
    }

    const contentFieldChange = (data) => {
        setPost({ ...posts, content: data })
    }


    const handlePostUpdate = (e) => {
        e.preventDefault();
        const newBlog = {
            ...posts
        }

        if(newBlog.title.trim() === ""  || newBlog.img.trim() === "" || newBlog.content.trim() === ""){
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You Need to change all field!",
              });
        }

        console.log(id);
        fetch(`http://localhost:5000/api/v1/blog/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Blog Update successfully!',
                    })
                    navigate('/dashboard/blogs')
                }
            })
    }


    return (
        <div className="my-container w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[100%] p-4 max-h-[90vh] overflow-auto">
            <h1 className='text-2xl font-bold' >What&rsquo;s going in your mind?</h1>

            <form onSubmit={handlePostUpdate}>
                <div className="flex flex-col space-y-2 w-full mt-5">
                    <label htmlFor="title" className="text-gray-600">Blog Title</label>
                    <input type="text" defaultValue={singlePost?.title} onChange={(e) => fieldChanged(e)} className="border rounded-md p-2" placeholder="Type Your Project Name" name="title" id="" />
                </div>
                <div className="flex flex-col space-y-2 w-full mt-5">
                    <label htmlFor="title" className="text-gray-600">Blog Image Url</label>
                    <input type="text" defaultValue={singlePost?.img} onChange={(e) => fieldChanged(e)} className="border rounded-md p-2" placeholder="Type Your Image url" name="img" id="" />
                </div>
                <div className="flex flex-col space-y-2 w-full mt-5">
                    <label htmlFor="title" className="text-gray-600">Blog Content</label>
                    <JoditEditor
                        ref={editor}
                        value={singlePost?.content}
                        // defaultValue={singlePost?.content}
                        onChange={contentFieldChange}
                    />
                </div>
                <button type="submit" className=" px-4 py-2  font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-sm bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Update Blog</button>

            </form>
        </div>
    );
};

export default UpdateBlog;