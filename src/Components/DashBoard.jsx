import { useState ,useEffect} from "react";
import SideBar from "./SubComponents/SideBar";
import { Triangle } from 'react-loader-spinner'
import AllTasks from "./AllTasks";
import ImportantTask from "./Important";
import Completed from "./Completed";
import Progress from "./Progress";
import {useNavigate} from 'react-router-dom';
export default function DashBoard(){
   const navigate=useNavigate();
   const [Alltask,setAlltasks]=useState(false);
   const [CompletedTask,setCompleted]=useState(false);
   const [ProgressTask,setProgress]=useState(false);
   const [Important,setImportant]=useState(false);
   const [isloading,setIsloading]=useState(true);
   const  [showsignin,setshowsignin]=useState(false);
    useEffect(() =>{
       setTimeout(() =>{
        setIsloading(false);
       },3000)
    },[])

    useEffect(() =>{
      const getusername=localStorage.getItem("userName");
      if(getusername===null){
         setshowsignin(true);
         navigate('/SignIn');
      }
    },[])
    return (
       isloading?<div className="bg-black flex justify-center items-center h-[100vh]">
        <Triangle
       visible={true}
       height="200"
       width="200"
       color="#0063EB"
       ariaLabel="triangle-loading"
       wrapperStyle={{ fontWeight:"bold"}}
       wrapperClass=""
       />
       </div>: (!showsignin && <div className="bg-black overflow-hidden ">
       <div className="p-5 overflow-hidden flex gap-4">
       <SideBar setAlltasks={setAlltasks} setCompleted={setCompleted} setProgress={setProgress} setImportant={setImportant} Alltask={Alltask} CompletedTask={CompletedTask} ProgressTask={ProgressTask} Important={Important} setshowsignin={setshowsignin}/>
       {ProgressTask && <Progress/>}
       {Important && <ImportantTask/>}
       {CompletedTask && <Completed/>}
       {Alltask && <AllTasks/>}

       
       </div>
      </div>)
    )
}