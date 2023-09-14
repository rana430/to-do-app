import axios from 'axios'
export const baseURL = "http://localhost:5000";

const getAllTasks=(setTask)=>{
    axios.get(baseURL).then(({data})=>{
        console.log("data:",data);
        setTask(data);
    })
}
const addTask=(setTask,setTitle,title,description,setDescription,dueDate,setDate)=>{
    axios.post(`${baseURL}/save`,{title,description,dueDate})
    .then((data)=>{
        console.log(data);
        setTitle("");
        setDescription("");
        setDate(null);
        getAllTasks(setTask);
    })
}
export {getAllTasks,addTask}