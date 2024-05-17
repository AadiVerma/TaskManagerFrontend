import { useState ,useEffect} from "react";
import SideBar from "./SubComponents/SideBar";
import { Triangle } from 'react-loader-spinner'
import AllTasks from "./AllTasks";
export default function DashBoard(){
    const [isloading,setIsloading]=useState(true);
    useEffect(() =>{
       setTimeout(() =>{
        setIsloading(false);
       },3000)
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
       </div>: (<div className="bg-black overflow-hidden ">
       <div className="p-5 overflow-hidden flex gap-4">
       <SideBar/>
       <AllTasks/>
       </div>
      </div>)
    )
}