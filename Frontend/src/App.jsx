import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';
import CompetitiveCoding from './Pages/CompetitiveCoding';
import Resume from './Pages/Resume';

function App() {
  useEffect(() => {
    // Listen for sidebar collapse state changes
    const handleSidebarToggle = () => {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar && sidebar.classList.contains('collapsed')) {
        document.body.classList.add('sidebar-collapsed');
      } else {
        document.body.classList.remove('sidebar-collapsed');
      }
    };

    // Set up observer for sidebar class changes
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      const observer = new MutationObserver(handleSidebarToggle);
      observer.observe(sidebar, { attributes: true, attributeFilter: ['class'] });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/competitive-coding" element={<CompetitiveCoding />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
