import { useState ,useEffect} from "react";
import Card from "./Components/Card";
import Addtask from "./Components/Addtask";
import Delete from "./Components/DeleteTask";
import { GetTask } from "./Helpers/Tasks";
function App() {
 
    const [addtask,setAddTask]=useState(false);
    const [del,setdel]=useState(false);
    const [data,setData]=useState([]);
    const [key,setkey]=useState("");
    const [taskAdded, setTaskAdded] = useState(false);
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
    // const data = [
    //     {
    //         color: '#D075FF',
    //         heading: "Task Management Complete",
    //         para:"I will complete my project as soon as possible hopefully i will complete my card "
    //     },
    //     {
    //         color: '#FBDB3A',
    //         heading: "Task Management Complete",
    //         para:"I will complete my project as soon as possible hopefully i will complete my card "
    //     },
    //     {
    //         color: '#FF6666',
    //         heading: "Task Management Complete",
    //         para: "I will complete my project as soon as possible hopefully i will complete my card "
    //     },
    //     {
    //         color: '#98FF73',
    //         heading: "Task Management Complete",
    //         para:"I will complete my project as soon as possible hopefully i will complete my card "
    //     },
    //     {
    //         color: '#0068FF',
    //         heading: "Task Management Complete",
    //         para: "I will complete my project as soon as possible hopefully i will complete my card "
    //     }
    // ];

    return (
        <div className="h-[100vh]  w-full  bg-black">
            <div className=" bg-[#e5f9ff] pt-4 pl-4 rounded-xl">
                {data.map((d) => (
                    <Card key={d._id} color={d.color} heading={d.heading} para={d.para} setdel={setdel} setkey={setkey} id={d._id}/>
                ))}
            </div>
            <button className="bg-purple-500 flex justify-center p-4 rounded-lg ml-[40%]"    onClick={()=>setAddTask(true)}>Add Task</button>
            {addtask && <Addtask setAddTask={setAddTask} setTaskAdded={setTaskAdded}/>}
            {del && <Delete setdel={setdel} taskId={key}/>}
        </div>
    );
}

export default App;
