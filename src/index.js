import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import TodoContainer from './components/TodoContainer';
import Landing from './Landing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<Landing />} index />
          <Route element={<TodoContainer />} path="todos" />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
