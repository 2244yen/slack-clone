import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const RequireAuth: React.FC = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
  }, []);

  return <Outlet />
}

export default RequireAuth;