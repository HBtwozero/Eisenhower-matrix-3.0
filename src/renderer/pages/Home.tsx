import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import electronLogo from "../../../static/electron.svg";
import { v4 as uuid } from "uuid";
import {Task, AddTask} from '../components/Taskutility';
import { TaskType, PriorityType } from "../components/types";


export default function Home(): JSX.Element {
      const [tasks, setTasks] = useState<TaskType[]>([]);
 useEffect(() => {
    // retrieve tasks from localStorage when component mounts
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

   useEffect(() => {
    // store tasks in localStorage whenever it changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleAddTask = (task: TaskType) => {
  
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const importantAndUrgentTasks = tasks.filter(
    (task) => task.priority === PriorityType.ImportantAndUrgent
  );

  const importantButNotUrgentTasks = tasks.filter(
    (task) => task.priority === PriorityType.ImportantButNotUrgent
  );
 const notImportantButUrgentTasks = tasks.filter(
    (task) => task.priority === PriorityType.NotImportantButUrgent
  );

  const notImportantAndNotUrgentTasks = tasks.filter(
    (task) => task.priority === PriorityType.NotImportantAndNotUrgent
  );
  return (
   
<Container maxWidth="md" sx={{ mt: 8 }}>
  <h1>Eisenhower Matrix</h1>
    <Grid container spacing={3}> 
    
        <Grid item xs={12} md={6} sx={{ backgroundColor: "#ffcccc" }}>
      
      <h2>Important and Urgent</h2>
      {importantAndUrgentTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
      ))}
      
        </Grid>
       <Grid item xs={12} md={6} sx={{ backgroundColor: "#ccffcc" }}>
          <h2>Important but Not Urgent</h2>
          {importantButNotUrgentTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onToggle={handleToggleTask}
            />
          ))}
      
        </Grid>
      <Grid item xs={12} md={6} sx={{ backgroundColor: "#ffffcc" }}>
          <h2>Not Important but Urgent</h2>
          {notImportantButUrgentTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onToggle={handleToggleTask}
            />
          ))}
         
        </Grid>
         <Grid item xs={12} md={6}  sx={{ backgroundColor: "#ccccff" }}>
                <h2>Not Important and Not Urgent</h2>
          {notImportantAndNotUrgentTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onToggle={handleToggleTask}
            />
          ))}
         
         </Grid>   
    </Grid>
    <AddTask onAddTask={handleAddTask} />
</Container>
  );
}