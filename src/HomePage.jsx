import React from 'react';
import './HomePage.css';
import ModuleCard from './components/ModuleCard';
import modules from './modules/config';

export default function HomePage() {
  return (
    <div className="home-container">
      {modules.map((mod) => (
        <ModuleCard key={mod.id} {...mod} />
      ))}
      {/* 新功能占位卡片 */}
      <ModuleCard placeholder addNew />
    </div>
  );
}
