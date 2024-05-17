import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {signUp} from '../Helpers/Tasks'
export default function SignUP(){
    const Navigate=useNavigate();
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const handleSubmit=async()=>{
        console.log(username);
        console.log(password);
       try{
        const data=await signUp({
            username,
            password,
            firstName,
            lastName
          })
        setPassword("");
        setUserName("");
        if (data) {
            toast.success('SignUp Successful', {
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
            toast.error('SignUp Failed', {
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
    <ToastContainer/>
        <div className="bg-[#121212] text-white border-2 border-gray-500 rounded-3xl p-10 w-fit">
       <h1 className="font-semibold text-2xl font-newfont mb-2">Welcome to Assignment Vanguard</h1>
       <h2 className="font-newfont font-normal mb-8">Register to unlock access to our premium services</h2>
        <div className="flex gap-6">
            <div>
                <h2 className="font-newfont font-bold mb-2">First name</h2>
                <input type="text" placeholder="Aditya" className="font-newfont p-3 rounded-lg bg-[#27272a] border-2 border-gray-500 hover:border-2 hover:border-blue-600 w-[100%] mb-6" onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div>
                <h2 className="font-newfont font-bold mb-2">Last name</h2>
                <input type="text" placeholder="Verma" className="font-newfont p-3 rounded-lg bg-[#27272a] border-2 border-gray-500 hover:border-2 hover:border-blue-600  w-[100%] mb-6" onChange={(e)=>setLastName(e.target.value)}/>
            </div>
        </div>
        <div>
            <h2 className="font-newfont font-bold mb-2">Email Address</h2>
            <input type="email" placeholder="abc@gmail.com" className="font-newfont p-3 rounded-lg bg-[#27272a] border-2 border-gray-500 w-[100%] hover:border-2 hover:border-blue-600 mb-6" onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        <div>
            <h2 className="font-newfont font-bold mb-2">Password</h2>
            <input type="password" placeholder="*******" className="font-newfont p-3 rounded-lg bg-[#27272a] border-2 border-gray-500 w-[100%]  hover:border-2 hover:border-blue-600 mb-6" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
            <button className="font-newfont font-extrabold text-lg p-3 rounded-lg bg-[#1e1e1f] border-2 border-gray-500 w-[100%] hover:border-2 hover:border-blue-600 flex gap-4  justify-center mb-2" onClick={handleSubmit}>Sign up <FaArrowRightLong className="mt-2 text-sm"/></button>
        </div>
        <h2 className="flex ml-[43%] text-slate-200">Already have an account ?<span className="ml-1 text-blue-600"><Link to={'/signIn'}>Login Here</Link></span></h2>
    </div>
    </div>
 )    
}