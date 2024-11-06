import { useState } from "react"

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const tasksList = [...tasks];
            [tasksList[index], tasksList[index - 1]] = [tasksList[index - 1], tasksList[index]];
            setTasks(tasksList);

        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const tasksList = [...tasks];
            [tasksList[index], tasksList[index + 1]] = [tasksList[index + 1], tasksList[index]];
            setTasks(tasksList);
        }
    }

    return(
        <>
            <h1>To Do List</h1>
            <input type="text" value={newTask} onChange={handleInputChange} />
            <button onClick={addTask}>Add</button>
            <ol>
                {tasks.map((task, index) => 
                <li key={index}>{task}
                    <button onClick={() => deleteTask(index)}>Delete</button>
                    <button onClick={() => moveTaskUp(index)}>Move Up</button>
                    <button onClick={() => moveTaskDown(index)}>Move Down</button>
                </li>)}
            </ol>
        </>
    )
}

export default ToDoList