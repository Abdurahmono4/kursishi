import React, { useState } from "react";
import styled from "styled-components";
import TaskList from "./TaskList";

const Item = styled.li`
  background-color: #f7f7f7;
  margin-bottom: 20px;
  padding: 20px 25px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectName = styled.h3`
  margin: 0;
  font-weight: 700;
`;

const DeleteBtn = styled.button`
  background-color: #ef4444;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #b91c1c;
  }
`;

const AddTaskBtn = styled.button`
  margin-top: 12px;
  background-color: #2563eb;
  border: none;
  color: white;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const TaskInput = styled.input`
  width: 100%;
  margin-top: 8px;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

export default function ProjectItem({
  project,
  onDeleteProject,
  onAddTask,
  onToggleTaskCompleted,
}) {
  const [taskName, setTaskName] = useState("");
  const [showTaskInput, setShowTaskInput] = useState(false);

  function handleAddTask() {
    if (!taskName.trim()) return;
    onAddTask(project.id, taskName.trim());
    setTaskName("");
    setShowTaskInput(false);
  }

  return (
    <Item>
      <Header>
        <ProjectName>{project.name}</ProjectName>
        <DeleteBtn onClick={() => onDeleteProject(project.id)}>
          O‘chirish
        </DeleteBtn>
      </Header>

      <TaskList
        tasks={project.tasks}
        onToggle={(taskId) => onToggleTaskCompleted(project.id, taskId)}
      />

      {showTaskInput ? (
        <>
          <TaskInput
            type="text"
            placeholder="Yangi vazifa nomi"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            autoFocus
          />
          <AddTaskBtn onClick={handleAddTask}>Qo'shish</AddTaskBtn>
        </>
      ) : (
        <AddTaskBtn onClick={() => setShowTaskInput(true)}>
          Yangi vazifa qo'shish
        </AddTaskBtn>
      )}
    </Item>
  );
}
