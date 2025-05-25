import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModuleCard.css';

export default function ModuleCard({ title, icon, path, placeholder, addNew }) {
  const nav = useNavigate();
  if (placeholder) {
    return (
      <div className="module-card placeholder">
        <span>＋ 添加功能</span>
      </div>
    );
  }
  return (
    <div className="module-card" onClick={() => nav(path)}>
      <img src={icon} className="module-icon" alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
