import React, { useState, useEffect } from 'react';

function TodoAppWithApi() {
  const [tasks, setTasks] = useState([]);  // Local state for tasks
  const [newTask, setNewTask] = useState('');

  // Fetch tasks from the API when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://api.example.com/tasks');
        const data = await response.json();
        setTasks(data);  // Update local state with fetched data
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Function to add a new task
  const addTask = async () => {
    if (!newTask) return;

    try {
      const response = await fetch('https://api.example.com/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: newTask }),
      });
      const data = await response.json();
      setTasks([...tasks, data]);  // Add new task to the local state
      setNewTask('');  // Clear the input field
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Function to delete a task
  const deleteTask = async (id) => {
    try {
      await fetch(`https://api.example.com/tasks/${id}`, { method: 'DELETE' });
      setTasks(tasks.filter((task) => task.id !== id));  // Update local state
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Function to edit a task (simplified for demonstration)
  const editTask = async (id, updatedTask) => {
    try {
      await fetch(`https://api.example.com/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: updatedTask }),
      });
      setTasks(tasks.map((task) => (task.id === id ? { ...task, task: updatedTask } : task)));
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task}
            <button onClick={() => editTask(task.id, prompt('Edit task', task.task))}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoAppWithApi;
