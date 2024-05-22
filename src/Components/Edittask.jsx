import { BsPatchExclamationFill } from "react-icons/bs";
import { useRef ,useState, useEffect} from "react";
import { DeleteTask } from "../Helpers/Tasks";
import { GetParticularTask ,EditTask} from "../Helpers/Tasks";
export default function Edit({setEdit,taskId}){
    const modelref =useRef();
   const [data,setData]=useState();
   const [color,setColor]=useState("");
   const [heading,setheading]=useState("");
   const [para,setPara]=useState("");
   const [date,setDate]=useState("");
   useEffect(()=>{
    const fetchData=async()=>{
      const datas=await GetParticularTask(taskId);
      setData(datas);
      setColor(datas.data[0].color);
      setheading(datas.data[0].heading);
      setPara(datas.data[0].para);
      const extractedDate = result.data[0].dueDate.split("T")[0];
      setDate(extractedDate);
    }
    fetchData();
},[])

    const closemodel=(e)=>{
        if (modelref.current === e.target) {
            setEdit(false);
          }
    }
    const EditHandler=async (e)=>{
      await EditTask(taskId,{
        heading,
        para,
        color,
        date
      });
      setEdit(false);
    }
    return(
        <div ref={modelref} onClick={closemodel} className="bg-transparent bg-opacity-30 backdrop-blur-sm inset-0 flex justify-center fixed items-center">
        <div style={{ backgroundColor: `${color}` }} className="p-8 rounded-3xl w-2/5">
          <div className="flex justify-center pb-5">
          <h1 style={{ color: (color === '#FBDB3A' || color === '#98FF73') ? "#48484B" : "white" }} className="text-3xl font-semibold ">Edit a task</h1>
          </div>
          <input value={heading} onChange={(e)=>setheading(e.target.value)}style={{ color: (color === '#FBDB3A' || color === '#98FF73') ? "#48484B" : "white", borderColor: (color === '#FBDB3A' || color === '#98FF73') ? "#48484B" : "white", }} type="text" placeholder="Heading" className={`${color === '#FBDB3A' || color === '#98FF73' ? "placeholder:text-slate-800" : "placeholder:text-white"}  rounded-lg p-4 bg-transparent text-white  outline-none border-2 border-slate-100 block m-2  mb-6 w-full font-bold `} />
          <textarea value={para} onChange={(e)=>setPara(e.target.value)}style={{ color: (color === '#FBDB3A' || color === '#98FF73') ? "#48484B" : "white", borderColor: (color === '#FBDB3A' || color === '#98FF73') ? "#48484B" : "white" }} placeholder="Description" className={`rounded-lg p-4 min-h-24 bg-transparent text-white ${color === '#FBDB3A' || color === '#98FF73' ? "placeholder:text-slate-800" : "placeholder:text-white"} outline-none border-2 border-slate-100 block m-2  w-full font-semibold`} />
          <label htmlFor="dueDate" style={{ color: (color === '#FBDB3A' || color === '#98FF73') ? "#48484B" : "white" }} className="text-sm font-semibold m-3">Enter Due Date</label>
          <input  value={date} onChange={(e)=>setDate(e.target.value)}style={{ color: (color === '#FBDB3A' || color === '#98FF73') ? "#48484B" : "white", borderColor: (color === '#FBDB3A' || color === '#98FF73') ? "#48484B" : "white", }} type="date" className={`w-full bg-transparent border-2 font-bold rounded-lg p-4 m-2 outline-none ${color === '#FBDB3A' || color === '#98FF73' ? "placeholder:text-slate-800" : "placeholder:text-white"} `} />
          <h1 style={{ color: (color === '#FBDB3A' || color === '#98FF73') ? "#48484B" : "white" }} className="text-lg font-semibold m-3">Color</h1>
          <div className="flex gap-4 mb-4 ml-16">
            <div className="h-10 w-10 bg-[#D075FF] rounded-full cursor-pointer border-2 border-dotted border-black" onClick={() => setColor('#D075FF')}></div>
            <div className="h-10 w-10 bg-[#FBDB3A] rounded-full border-2 border-dotted  cursor-pointer border-black" onClick={() => setColor('#FBDB3A')}></div>
            <div className="h-10 w-10 bg-[#FF6666] rounded-full border-2 border-dotted  border-black cursor-pointer" onClick={() => setColor('#FF6666')}></div>
            <div className="h-10 w-10 bg-[#98FF73] rounded-full border-2 border-dotted  border-black cursor-pointer" onClick={() => setColor('#98FF73')}></div>
            <div className="h-10 w-10 bg-[#0068FF] rounded-full border-2 border-dotted  border-black cursor-pointer" onClick={() => setColor('#0068FF')}></div>
          </div>
          <div className="flex justify-center gap-2">
            <button className="w-2/5 bg-red-500 p-2 hover:bg-red-600 text-slate-100 text-lg rounded-lg font-semibold" onClick={() => setEdit(false)}>Cancel</button>
            <button className="w-2/5 bg-green-500 hover:bg-green-600 text-slate-100 text-lg p-2 rounded-lg font-semibold" onClick={EditHandler}>Save</button>
          </div>
        </div>
    </div>
    )
}