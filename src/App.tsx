import React from 'react';
import Home from './components/home';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/auth/login';
import PrivateRoute from './utils/router/privateRoute';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
