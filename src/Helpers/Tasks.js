import axios from 'axios'; 
axios.defaults.baseURL = `https://taskmanagerbackend-7vjc.onrender.com`;
export  async function AddTask(data){
    try {
        const result=await axios.post('./Task/add',data);
        console.log(result);
        return result;

    } catch (error) { 
        console.log(error);
    }
}
export  async function DeleteTask(taskId){
    console.log(taskId);
    try {
        const result=await axios.delete(`./Task/delete/${taskId}`);
        console.log(result);
        return result;
    }
    catch (error) { 
        console.log(error);
    }
}
export async function GetTask(){
    try{
        const result=await axios.get('./Task/get');
        return result.data;
    }
    catch (error) { 
        console.log(error);
    }
}
export async function ImportTasks(){
    try{
        const result=await axios.get('./Task/important');
        return result.data;
    }
    catch (error) { 
        console.log(error);
    }
}
export async function CompletedTasks(){
    try{
        const result=await axios.get('./Task/completed');
        return result.data;
    }
    catch (error) { 
        console.log(error);
    }
}
export async function ProgressTasks(){
    try{
        const result=await axios.get('./Task/progress');
        return result.data;
    }
    catch (error) { 
        console.log(error);
    }
}
export  async function EditTask(taskId,data){
    try {
        const result=await axios.put(`./Task/edit/${taskId}`,{data}); 
        console.log(result);
        return result;
    }
    catch (error) { 
        console.log(error);
    }
}
export async function MakeItImportant(taskId,ImportantTasks){
    try {
        const result=await axios.post(`./Task/important/${taskId}`,{ImportantTasks}); 
        console.log(result);
        return result;
    }
    catch (error) { 
        console.log(error);
    }
}

export async function GetParticularTask(taskId){
    try {
        const result=await axios.get(`./Task/getparticulartask/${taskId}`); 
        return result;
    }
    catch (error) { 
        console.log(error);
    }
}

export async function changeMarkAsCompleted(taskId){
    try {
        const result=await axios.post(`./Task/markascomplete/${taskId}`); 
        console.log(result);
        return result;
    }
    catch (error) { 
        console.log(error);
    }
}

export async function signIn(data){
    try{
     const result=await axios.post('./account/signin',data);
     return result;
    }
    catch (error) { 
        console.log(error);
    }
}
export async function signUp(data){
    try {
        const result=await axios.post('./account/signup',data);
     console.log(result);
     return result;
    } catch (error) {
        console.log(error);
    }
}