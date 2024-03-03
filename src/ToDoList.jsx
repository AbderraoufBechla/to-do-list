import React, {useState} from "react"

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

function HandleInputChange(event){
    setNewTask(event.target.value)
}
function AddTask(){
    if(newTask.trim() !==''){
        setTasks(t=>[...t, newTask])
        setNewTask('')
    }
}
function RemoveTask(index){
    const updatedTask = tasks.filter((_ , i )=>i !== index)
    setTasks(updatedTask)

}
function MoveTaskUp(index){
    if(index > 0 ){
        const updatedTasks= [...tasks];
        [updatedTasks[index], updatedTasks[index-1]] = 
        [updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks)
    }
    }
    function MoveTaskDown(index) {
        if (index < tasks.length - 1) {
          const updatedTasks = [...tasks];
          [updatedTasks[index], updatedTasks[index + 1]] = [
            updatedTasks[index + 1],
            updatedTasks[index],
          ];
          setTasks(updatedTasks);
        }
      }
      


return(
    <>
    <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="add new task " value={newTask} onChange={HandleInputChange} />
            <button onClick={AddTask}>add task</button>
        </div>
        <ol>
            {tasks.map((task, index) =>
            <li key={index}>
                <span>{task} </span>
                <button className='button-delete' onClick={() =>RemoveTask(index)}> delete </button>
                <button className='button-up' onClick={() =>MoveTaskUp(index)}> up </button>
                <button className='button-down' onClick={() =>MoveTaskDown(index)}> down </button>
            </li> 
            
            )}
        </ol>
    </div>
    </>
)
}
export default ToDoList