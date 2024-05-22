import DateSlider from "./SubComponents/DateSlider";
import { useState ,useEffect} from "react";
import Card from "./Card";
import Addtask from "./Addtask"
import Delete from "./DeleteTask";
import { GetTask } from "../Helpers/Tasks"; 
import Edit from './Edittask'
export default function AllTasks(){
    const months=["Jan", "Feb","Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"];
    const [addtask,setAddTask]=useState(false);
    const [del,setdel]=useState(false);
    const [edit,setEdit]=useState(false);
    const [data,setData]=useState([]);
    const [key,setkey]=useState("");
    const [taskAdded, setTaskAdded] = useState(false);
    const [date,setDate]=useState("");
    const [month,setMonth]=useState("");
    useEffect(()=>{
     setDate(new Date().getDate())
     setMonth(new Date().getMonth())
    },[])
    useEffect(()=>{
        const fetchData=async()=>{
          const datas=await GetTask();
          setData(datas.Alltasks);
        }
        fetchData();
    },[del, taskAdded])
    useEffect(() => {
        if (taskAdded) {
            setTaskAdded(false);
        }
    }, [taskAdded]);
   const Addtasks=()=>{
    setAddTask(true);
   }
    return (
        <div className="w-[85%] text-white bg-[#212121] rounded-lg h-fit p-5 overflow-hidden">
            <h1 className="text-4xl font-newfont font-bold">All Tasks</h1>
            {/* <div className="flex justify-evenly mt-6">
                {dates.map((d)=>{
                    return <DateSlider date={d} day={"Th"} active={d==3?true:false}/>
                })}
            </div> */}
            <div className="flex justify-between mt-10 mb-10">
                <h2 className="flex text-3xl font-newfont font-bold">{months[month]}, {date}</h2>
                <div className="flex gap-4">
                    <h2 className="text-2xl font-newfont font-bold mt-1">Add Task</h2>
                    <h2 className="text-2xl font-bold cursor-pointer rounded-lg pl-6 pr-6 pt-1 pb-2 bg-[#121212] " onClick={Addtasks}>+</h2>
                </div>
            </div>
            {addtask && <Addtask setAddTask={setAddTask} setTaskAdded={setTaskAdded}/>}
            {del && <Delete setdel={setdel} taskId={key}/>}
            {edit && <Edit setEdit={setEdit} taskId={key}/>}
            <div className="pt-4 pl-2 rounded-xl flex flex-wrap gap-2 ">
                {data && data.map((d) => (
                    <Card key={d._id} color={d.color} heading={d.heading} para={d.para} setdel={setdel} setkey={setkey} id={d._id} date={d.date} maskAsCompleted={d.maskAsCompleted} ImportantTasks={d.importanttasks} setEdit={setEdit}/>
                ))}
            </div>
        </div>
    )

}