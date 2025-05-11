import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import ApplyLoan from './pages/ApplyLoan';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Loans from './pages/Loans'

function App() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='flex-grow p-4'> {/* This renders page content */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/apply-loan" element={<ApplyLoan />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </div>      
    </>
  );
}

export default App;
