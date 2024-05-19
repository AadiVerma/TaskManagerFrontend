import { FaCheck } from "react-icons/fa";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
export default function Card({ heading, para, color ,setdel,setkey,id,date}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [completed,setCompleted]=useState(false);
    const changeMarkAsCompleted=()=>{
      setCompleted(true);
    }
    const divHandler=()=>{
        console.log(`print ${id}`)
    }
    useEffect(()=>{
    },[completed])
    return (
        <div style={{ backgroundColor: `${color}` }} className={`p-5 w-fit rounded-2xl mb-4 `} onClick={divHandler}>
            <div className="flex justify-between">
                <div className="cursor-pointer">
                    <h1 style={{ color: (color === '#FBDB3A' || color==='#98FF73') ? "#48484B" : "white" }} className={`font-bold w-64  text-lg`}>{heading}</h1>
                    <p style={{ color: (color === '#FBDB3A' || color==='#98FF73') ? "#48484B" : "white" }} className={`w-56 text-xs text-${color === 'yellow' ? "gray-800" : "white"} font-medium`}>{para}</p>
                </div>
                <div className="h-fit w-fit p-4 bg-white rounded-xl mt-2">
                    <h1 className="font-bold text-2xl text-black font-newfont">
                        {completed==true?<FaCheck className="text-green-500"/>:new Date(date).getDate()}
                    </h1>
                </div>
            </div>
            <div className="mt-2 flex justify-between gap-2">
                {!completed && <h2 style={{ color: isHovered ? "rgb(147 51 234)" : (color==='#FBDB3A' || color==='#98FF73')?"#48484B":`${color}` }} className={`text-sm h-fit w-fit pt-1 pb-1 pl-4 pr-4 bg-white mt-1 font-bold rounded-lg cursor-pointer hover:text-purple-600 `
                }
                    onMouseEnter={() => { setIsHovered(true) }}
                    onMouseLeave={() => { setIsHovered(false) }}>Edit</h2>}
                <h2 style={{ color: isHovered1 ? "rgb(239 68 68)" : (color==='#FBDB3A' || color==='#98FF73')?"#48484B":`${color}` }} className={`text-xl h-fit ${completed?"w-[100%]":"w-fit"} bg-white   ${completed?"pl-[46%] mt-[5%] pt-2 pb-2":"pl-4 cursor-pointer  mt-1 pt-1 pb-1"} pr-4 rounded-lg `}
                    onMouseEnter={() => { setIsHovered1(true) }}
                    onMouseLeave={() => { setIsHovered1(false) }} onClick={()=>{
                        setdel(true)
                        setkey(id);
                        console.log(id);
                    }}><RiDeleteBin3Fill /></h2>
               {!completed && <h2 style={{ color: isHovered2 ? " rgb(34 197 94)" : (color==='#FBDB3A' || color==='#98FF73')?"#48484B":`${color}` }} className={`text-sm cursor-pointer font-bold h-fit w-fit pt-1 pb-1 mt-1 pl-4 pr-4 rounded-lg bg-white hover:text-green-500`}
                    onMouseEnter={() => { setIsHovered2(true) }}
                    onMouseLeave={() => { setIsHovered2(false) }}
                    onClick={changeMarkAsCompleted}
                >Mark as Completed</h2>}
                <FaStar  className={`text-xl text-yellow-400 cursor-pointer h-fit w-fit bg-white   ${completed?"pl-[46%] mt-[5%] pt-2 pb-2":"pl-4 mt-1 pt-1 pb-1"} pr-4 rounded-lg `}/>
            </div>
        </div>
    );
}
