import { BsPatchExclamationFill } from "react-icons/bs";
import { useRef } from "react";
import { DeleteTask } from "../Helpers/Tasks";
export default function Delete({setdel,taskId}){
    const modelref =useRef();
    const closemodel=(e)=>{
        if (modelref.current === e.target) {
            setdel(false);
          }
    }
    const DeletHandler=(e)=>{
      DeleteTask(taskId);
      setdel(false);
    }
    return(
        <div ref={modelref} onClick={closemodel} className="bg-transparent bg-opacity-30 backdrop-blur-[2px] inset-0 flex justify-center fixed items-center">
            <div  className="bg-[#272424] p-5 rounded-3xl">
            <div className="flex justify-center ">
            <BsPatchExclamationFill className="text-red-500 text-5xl
            drop-shadow-xl"/>
            </div>
            <h2 className="text-2xl text-white font-bold flex justify-center mt-2">Delete Task</h2>
            <h3 className="text-lg font-medium  text-white lex justify-center">Are you sure you want to delete this task ?</h3>
            <h3 className="text-lg font-medium  text-white flex justify-center">This action cannot be undone</h3>
              <div className="mt-4 flex justify-center gap-4">
                <button className="bg-gray-500 pt-4 pb-4 pl-10 pr-10 rounded-lg font-semibold text-lg  text-white hover:bg-gray-600 outline-none" onClick={()=>setdel(false)}>Cancel</button>
                <button className="bg-red-500 pt-4 pb-4 pl-10 pr-10 rounded-lg text-white text-lg font-semibold hover:bg-red-600 outline-none" onClick={DeletHandler}>Delete</button>
              </div>
            </div>        
        </div>
    )
}