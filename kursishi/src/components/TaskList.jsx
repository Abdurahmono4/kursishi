import React from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem.jsx";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
`;

export default function TaskList({ tasks, onToggle }) {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggle(task.id)}
        />
      ))}
    </List>
  );
}
