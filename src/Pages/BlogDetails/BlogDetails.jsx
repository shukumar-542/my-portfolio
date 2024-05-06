import { useParams } from "react-router-dom";
import blogData from '../../../public/blog.json';

const BlogDetails = () => {

    const { id } = useParams()
    const post = blogData.find((post) => post.id === parseInt(id));
    console.log(post);
    return (
        <div className="bg-gray-200  text-white ">
            <div className="max-w-5xl mx-auto pt-10">

                <img src={post?.image} className="w-[100%] h-[300px] mx-auto" alt="" />
                <div className="text-gray-700 py-10">
                    <h1 className=" text-4xl font-bold">{post?.title}</h1>
                    <p className="mt-5">{post?.description}</p>

                    <h1 className=" text-4xl font-bold my-5 ">{post?.advantage}</h1>

                    {
                        post?.feature.map((fea, index) => <div key={index}>

                            <li>{fea}</li>
                        </div>)
                    }

                    <h1 className=" text-4xl font-bold my-5 ">{post?.disAdvantage}</h1>
                    {
                        post?.drawback.map((draw, index) => <div key={index}>

                            <li>{draw}</li>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default BlogDetails;