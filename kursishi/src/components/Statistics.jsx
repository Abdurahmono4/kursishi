// src/components/Statistics.jsx
import React from "react";

function Statistics({ projects }) {
  const totalProjects = projects.length;
  const totalTasks = projects.reduce((sum, p) => sum + p.tasks.length, 0);
  const completedTasks = projects.reduce(
    (sum, p) => sum + p.tasks.filter((t) => t.completed).length,
    0
  );

  return (
    <div
      style={{
        marginTop: "40px",
        padding: "20px",
        borderTop: "1px solid #ccc",
      }}
    >
      <h2>📊 Statistika</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          🔢 Umumiy loyihalar soni: <strong>{totalProjects}</strong>
        </li>
        <li>
          📝 Umumiy vazifalar soni: <strong>{totalTasks}</strong>
        </li>
        <li>
          ✅ Bajarilgan vazifalar soni: <strong>{completedTasks}</strong>
        </li>
        <li>
          📉 Bajarilmagan vazifalar soni:{" "}
          <strong>{totalTasks - completedTasks}</strong>
        </li>
      </ul>
    </div>
  );
}

export default Statistics;
