import React from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 25px;
`;

export default function ProjectList({
  projects,
  onDeleteProject,
  onAddTask,
  onToggleTaskCompleted,
}) {
  return (
    <List>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
          onDeleteProject={onDeleteProject}
          onAddTask={onAddTask}
          onToggleTaskCompleted={onToggleTaskCompleted}
        />
      ))}
    </List>
  );
}
