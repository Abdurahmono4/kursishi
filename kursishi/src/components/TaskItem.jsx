import React from "react";
import styled from "styled-components";

const Item = styled.li`
  padding: 10px 12px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);

  ${({ completed }) =>
    completed &&
    `
    text-decoration: line-through;
    color: #6b7280;
    background-color: #e0e7ff;
  `}
`;

export default function TaskItem({ task, onToggle }) {
  return (
    <Item completed={task.completed} onClick={onToggle}>
      {task.name}
    </Item>
  );
}
