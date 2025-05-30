import React from "react";
import styled from "styled-components";

const NotificationWrapper = styled.div`
  margin: 20px 0;
  padding: 10px 15px;
  background-color: #d1fae5;
  border: 1px solid #10b981;
  border-radius: 8px;
  color: #065f46;
  font-weight: 500;
`;

function Notification({ message }) {
  if (!message) return null;

  return <NotificationWrapper>{message}</NotificationWrapper>;
}

export default Notification;
