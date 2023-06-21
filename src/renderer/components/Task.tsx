import React, { useState } from "react";
import { IconButton,  Checkbox, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Delete as DeleteIcon } from '@mui/icons-material';

type TaskProps = {
  id: string;
  description: string;
  completed: boolean;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};
export function Task({ id, description, completed, onDelete, onToggle }: TaskProps) {
  return (
    <div>
      <Checkbox checked={completed} onChange={() => onToggle(id)} />
      <TextField value={description} />
      <IconButton onClick={() => onDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}