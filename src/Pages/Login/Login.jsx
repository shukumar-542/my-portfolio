import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { storeUserInfo } from "../../utils/auth.service";

const Login = () => {
    const { register, handleSubmit,reset } = useForm();
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        console.log(data);

        try {
            const user = {
                ...data
            }

            fetch('https://protfolio-server-delta.vercel.app/api/v1/login', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.token);
                    if(data?.token){
                        storeUserInfo({accessToken : data?.token})
                        navigate('/dashboard/skills');
                            Swal.fire({
                                title: "Login Successfully",
                                text: "User Login",
                                icon: "success"
                            });

                    }

                  
                })

            reset()
        } catch (error) {
            console.error(error.message)
        }
    }


    return (
        <div className="bg-gray-100 h-[100vh] flex items-center">
            <div className="bg-white w-3/4 lg:w-1/3 mx-auto p-10 shadow-md rounded-md">
                <h1 className="text-center font-bold  lg:text-3xl mb-5">Login</h1>
                <div className="max-w-2xl ">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col space-y-2 w-full">
                            <label htmlFor="email" className="text-gray-400">Email</label>
                            <input {...register("email")} type="text" className="border-b-2 p-2" placeholder="Type your username" name="email" id="" />
                        </div>
                        <div className="flex flex-col space-y-2 mt-5 w-full">
                            <label htmlFor="email" className="text-gray-400">Password</label>
                            <input {...register("password")} type="text" className="border-b-2 p-2" placeholder="Type your password" name="password" id="" />
                        </div>

                        <button type="submit" className="w-full px-4 py-2 font-semibold shadow-md  uppercase cursor-pointer hover:bg-slate-200 transition-all  mt-4 text-center rounded-2xl bg-gradient-to-r from-sky-400 to-fuchsia-600 text-white">Login</button>

                    </form>
                </div>
                
            </div>

        </div>
    );
};

export default Login;