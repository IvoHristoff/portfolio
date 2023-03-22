import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AppContext from './context/AppContext';

import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Admin from './pages/Admin';

function App() {
  const [appState, setAppState] = useState({
    user: null,
    userData: null,
  });

  return (
    <AppContext.Provider value={{...appState, setContext: setAppState}}>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="project" element={<Projects />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<Navigate replace to="home" />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
