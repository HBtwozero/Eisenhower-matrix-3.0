import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  IconButton,
  Typography,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  TextFieldProps ,
  MenuItem,
} from "@mui/material";


import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuid } from "uuid";
import { TaskType, PriorityType } from "../components/types";
// import { LocalizationProvider, DatePicker } from "@mui/lab";
//import AdapterDateFns from "@mui/lab/AdapterDateFns";
// type TaskType = {
//   id: string;
//   description: string;
//   priority: PriorityType,
//   completed: boolean;
// };

//type PriorityType = "UrgentImportant" | "NotUrgentImportant" | "UrgentNotImportant" | "NotUrgentNotImportant";

interface AddTaskProps {
  onAddTask: (task: TaskType) => void;
}
export function AddTask({ onAddTask }: AddTaskProps) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<PriorityType>(PriorityType.ImportantAndUrgent);
  const [dueDate, setDueDate] = useState<Date | null>(null); // provide a default value of null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description) return;
    const newTask: TaskType = {
      id: uuid(),
      description: description,
      priority: priority,
      completed: false,
      dueDate: dueDate ? new Date(dueDate) : null, // check for a valid due date
    };
    onAddTask(newTask);
    setDescription("");
    setPriority(PriorityType.ImportantAndUrgent);
    setDueDate(null);
  };

  return (
    <Box display="flex" alignItems="center">
      <form onSubmit={handleSubmit}>
        <TextField
          label="New Task"
          variant="outlined"
          size="small"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mr: 1 }}
        />
        <FormControl variant="outlined" size="small">
          <InputLabel>Priority</InputLabel>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value as PriorityType)}
            label="Priority"
          >
            <MenuItem value={PriorityType.ImportantAndUrgent}>Urgent and Important</MenuItem>
            <MenuItem value={PriorityType.ImportantButNotUrgent}>Important but Not Urgent</MenuItem>
            <MenuItem value={PriorityType.NotImportantButUrgent}>Urgent but Not Important</MenuItem>
            <MenuItem value={PriorityType.NotImportantAndNotUrgent}>Not Urgent and Not Important</MenuItem>
          </Select>
        </FormControl>
       
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Due date"
            value={dueDate}
            onChange={(newValue: Date | null) => setDueDate(newValue)}
            renderInput={(params:TextFieldProps) => <TextField {...params} />}
          />
        </LocalizationProvider> */}
        <Button type="submit" variant="contained" size="small">
          Add
        </Button>
      </form>
    </Box>
  );
}
type TaskProps = {
    
   task: TaskType;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export function Task({ task, onDelete, onToggle }: TaskProps) {
  return (
     <div>
      <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
      <Typography
        component="span"
        sx={{
          textDecoration: task.completed ? "line-through" : "none",
          mr: 2,
        }}
      >
        {task.description}
      </Typography>
      <Typography component="span" color="text.secondary">
        ({task.priority})
      </Typography>
       <Typography component="span" color="text.secondary">
        {task.dueDate ? `Due: ${task.dueDate.toLocaleDateString()}` : ""}
      </Typography>
      <IconButton onClick={() => onDelete(task.id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
