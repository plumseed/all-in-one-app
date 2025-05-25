import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
// ...模块页面后续再填
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 其他模块路由示例：
        <Route path="/games" element={<GameCenter />} />
        */}
      </Routes>
    </HashRouter>
  );
}
export default App;
