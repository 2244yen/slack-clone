import React from 'react';
import MainNav from './MainNav';
import SlidePanel from './SlidePanel/SlidePanel';
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app">
      <div className="main">
        <SlidePanel />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
