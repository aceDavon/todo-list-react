import * as React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="flex flex-col gap-4 relative">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
