import React, { useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  width: 320px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ cancel }) => (cancel ? "#ccc" : "#2563eb")};
  color: ${({ cancel }) => (cancel ? "#333" : "white")};

  &:hover {
    background-color: ${({ cancel }) => (cancel ? "#b3b3b3" : "#1d4ed8")};
  }
`;

export default function AddProjectModal({ onClose, onAdd }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name.trim());
    setName("");
    onClose();
  }
  function addProject(name) {
    const newProject = { id: uuidv4(), name, tasks: [] };
    setProjects([...projects, newProject]);
    setNotification("Yangi loyiha muvaffaqiyatli qo‘shildi!");

    // Bildirishnomani 3 sekundda yo‘qotamiz
    setTimeout(() => setNotification(""), 3000);
  }

  return (
    <Overlay>
      <ModalBox>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Loyiha nomi"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <ButtonGroup>
            <Button cancel type="button" onClick={onClose}>
              Bekor qilish
            </Button>
            <Button type="submit">Qo'shish</Button>
          </ButtonGroup>
        </form>
      </ModalBox>
    </Overlay>
  );
}
