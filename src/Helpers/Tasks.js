import axios from 'axios'; 
axios.defaults.baseURL = `http://localhost:8080`;
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
export  async function EditTask(){
    try {
        const result=await axios.post('./Task/edit/:taskId'); 
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