import './Sidebar.css';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Dashboard', icon: '🏠' },
    { to: '/tables', label: 'Tables', icon: '📋' },
    { to: '/charts', label: 'Charts', icon: '📊' },
    { to: '/calendar', label: 'Calendar', icon: '🗓' },
    { to: '/kanban', label: 'Kanban', icon: '📌' },
  ];

  return (
    <div className={`bg-blue-800 text-white h-screen flex flex-col duration-300 transition-all ${open ? 'w-64' : 'w-16'}`}>
      <button
        className="p-4 text-xl hover:bg-blue-700"
        onClick={() => setOpen(!open)}
        title={open ? 'Collapse' : 'Expand'}
      >
        ☰
      </button>

      <nav className="flex-1 px-2 space-y-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-600 ${
              location.pathname === link.to ? 'bg-blue-700' : ''
            }`}
          >
            <span className="text-lg">{link.icon}</span>
            {open && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}