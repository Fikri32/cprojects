'use client'
import { useState, useEffect } from 'react';
import '@/utils/styles/theme.scss';
import NavbarVertical from '@/components/admin/layouts/navbars/NavbarVertical';
import NavbarTop from '@/components/admin//layouts/navbars/NavbarTop';

export default function DashboardLayout({ children }) {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const wrapper = document.getElementById('db-wrapper');
    if (wrapper) {
      wrapper.classList.toggle('toggled', !showMenu);
    }
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div id="db-wrapper">
      <div className="navbar-vertical navbar">
      <NavbarVertical
					showMenu={showMenu}
					onClick={(value) => setShowMenu(value)}
				/>
      </div>
      <div id="page-content">
        <div className="header">
          <NavbarTop
            data={{
              showMenu: showMenu,
              SidebarToggleMenu: toggleMenu,
            }}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
