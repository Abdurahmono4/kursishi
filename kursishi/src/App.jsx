import React, { useState } from "react";
import Notification from "./components/Notification";

import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import ProjectList from "./components/ProjectList";
import AddProjectModal from "./components/AddProjectModal";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Statistics from "./components/Statistics";

const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: #222;
`;

const AddBtn = styled.button`
  background-color: #2563eb;
  border: none;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #1d4ed8;
  }
`;

function App() {
  const [notification, setNotification] = useState("");
  const [projects, setProjects] = useLocalStorage("projects", []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function deleteProject(id) {
    const deleted = projects.find((p) => p.id === id);
    setProjects(projects.filter((p) => p.id !== id));
    setNotification(`"${deleted?.name}" loyihasi o‘chirildi.`);
    setTimeout(() => setNotification(""), 3000);
  }

  function addTask(projectId, taskName) {
    setProjects(
      projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              tasks: [
                ...p.tasks,
                { id: uuidv4(), name: taskName, completed: false },
              ],
            }
          : p
      )
    );
    setNotification(`"${taskName}" vazifa qo‘shildi.`);
    setTimeout(() => setNotification(""), 3000);
  }

  function deleteProject(id) {
    setProjects(projects.filter((p) => p.id !== id));
  }

  function toggleTaskCompleted(projectId, taskId) {
    let taskName = "";
    setProjects(
      projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              tasks: p.tasks.map((t) => {
                if (t.id === taskId) {
                  taskName = t.name;
                  return { ...t, completed: !t.completed };
                }
                return t;
              }),
            }
          : p
      )
    );
    setNotification(`"${taskName}" holati o‘zgartirildi.`);
    setTimeout(() => setNotification(""), 3000);
  }

  function addTask(projectId, taskName) {
    setProjects(
      projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              tasks: [
                ...p.tasks,
                { id: uuidv4(), name: taskName, completed: false },
              ],
            }
          : p
      )
    );
  }
  function addProject(name) {
    const newProject = { id: uuidv4(), name, tasks: [] };
    setProjects([...projects, newProject]);
    setNotification(`"${name}" loyihasi muvaffaqiyatli qo‘shildi.`);
    setTimeout(() => setNotification(""), 3000); // 3 soniyadan so‘ng o‘chadi
  }

  function toggleTaskCompleted(projectId, taskId) {
    setProjects(
      projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              tasks: p.tasks.map((t) =>
                t.id === taskId ? { ...t, completed: !t.completed } : t
              ),
            }
          : p
      )
    );
  }

  return (
    <Container>
      <Header>
        <Title>Project Tracker</Title>
        <AddBtn onClick={() => setIsModalOpen(true)}>
          Yangi loyiha qo'shish
        </AddBtn>
      </Header>

      <Notification message={notification} />

      <ProjectList
        projects={projects}
        onDeleteProject={deleteProject}
        onAddTask={addTask}
        onToggleTaskCompleted={toggleTaskCompleted}
      />

      <Statistics projects={projects} />

      {isModalOpen && (
        <AddProjectModal
          onClose={() => setIsModalOpen(false)}
          onAdd={addProject}
        />
      )}
    </Container>
  );
}

export default App;
