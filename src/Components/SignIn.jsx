import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {Link, useNavigate} from 'react-router-dom';
import {signIn} from '../Helpers/Tasks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignIn(){
    const Navigate=useNavigate();
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit=async()=>{
        console.log(username);
        console.log(password);
       try{
        const data=await signIn({
            username,
            password
          })
        setPassword("");
        setUserName("");
        if (data) {
            toast.success('Login Successful', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            Navigate('/');
        } else {
            toast.error('Login Failed', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            console.log("Sign-in unsuccessful");
        }
       }catch(error){
        console.log(error);
       }
        
    }
 return (
    <div className="bg-black h-[100vh] flex justify-center items-center">
        <ToastContainer />
        <div className="bg-[#121212] text-white border-2 border-gray-500 rounded-3xl p-10 w-fit">
       <h1 className="font-semibold text-2xl font-newfont mb-2">Welcome Again to Assignment Vanguard</h1>
       <h2 className="font-newfont font-normal mb-6">Login to access to our services</h2>

        <div>
            <h2 className="font-newfont font-bold mb-2">Email Address</h2>
            <input type="email" value={username} placeholder="abc@gmail.com" className="font-newfont p-3 rounded-lg bg-[#27272a] border-2 border-gray-500 w-[100%] hover:border-2 hover:border-blue-600 mb-4" onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        <div>
            <h2 className="font-newfont font-bold mb-2">Password</h2>
            <input type="password" value={password} placeholder="*******" className="font-newfont p-3 rounded-lg bg-[#27272a] border-2 border-gray-500 w-[100%]  hover:border-2 hover:border-blue-600 mb-6" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
            <button className="font-newfont font-extrabold text-lg p-3 rounded-lg bg-[#1e1e1f] border-2 border-gray-500 w-[100%] hover:border-2 hover:border-blue-600 flex gap-4  justify-center mb-2" onClick={handleSubmit}>Sign In <FaArrowRightLong className="mt-2 text-sm"/></button>
        </div>
        <h2 className="flex ml-[46%] text-slate-200">Don't have an account ?<span className="ml-1 text-blue-600"><Link to={'/signUp'}>Register Here</Link></span></h2>
    </div>
    </div>
 )    
}