import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AppContext from './Context/AppContext';

import './App.css';

function App() {
  const [appState, setAppState] = useState({
    data: null
  });

  return (
    <AppContext.Provider value={{...appState, setContext: setAppState}}>
      <Routes>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="*" />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
