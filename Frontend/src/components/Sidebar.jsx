import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaProjectDiagram, FaCode, FaTrophy, FaFileAlt } from 'react-icons/fa';
import '../styles/Sidebar.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const menuItems = [
        { path: '/', label: 'Home', icon: <FaHome /> },
        { path: '/projects', label: 'Projects', icon: <FaProjectDiagram /> },
        { path: '/technologies', label: 'Technologies', icon: <FaCode /> },
        { path: '/competitive-coding', label: 'Coding Profiles', icon: <FaTrophy /> },
        { path: '/resume', label: 'Resume', icon: <FaFileAlt /> },
    ];

    return (
        <>
            {/* Hamburger Menu Button */}
            <button className="hamburger-btn" onClick={toggleSidebar} aria-label="Toggle menu">
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Overlay */}
            {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

            {/* Sidebar */}
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <NavLink to="/" onClick={closeSidebar} className="sidebar-brand">
                        PortFolio
                    </NavLink>
                </div>

                <nav className="sidebar-nav">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={closeSidebar}
                            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                        >
                            <span className="sidebar-icon">{item.icon}</span>
                            <span className="sidebar-label">{item.label}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <p>&copy; 2025 Portfolio</p>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
