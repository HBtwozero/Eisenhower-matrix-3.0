import React, { useState } from "react";
import { IconButton,  Checkbox, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Delete as DeleteIcon } from '@mui/icons-material';

type AddTaskProps = {
  onAdd: (description: string) => void;
};

export function AddTask({ onAdd }: AddTaskProps) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description) return;
    onAdd(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="New Task"
        variant="outlined"
        size="small"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <IconButton type="submit">
        <AddIcon />
      </IconButton>
    </form>
  );
}
