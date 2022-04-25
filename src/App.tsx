import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Layout from './layouts/Layout';
import RequireAuth from './components/Auth/RequireAuth';
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => {
            return <Route path={route.path} key={index} element={
              <RequireAuth>
                {route.element}
              </RequireAuth>
            } />
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
