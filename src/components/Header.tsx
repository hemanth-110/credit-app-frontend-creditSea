// File: src/components/Navbar.tsx
import { Bell, Cat, CreditCard, FileText, Gauge, IndianRupee, LineChart, User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <div className="text-blue-800 font-bold text-lg border-2 border-green-700 px-2 py-1">
          CREDIT APP
        </div>
        <div className="hidden md:flex space-x-6 text-blue-800 items-center">
          <Link to="/dashboard">
          <div className="flex items-center gap-1 font-semibold">
            <Gauge size={18} /> Home
          </div>
          </Link>
          <div className="flex items-center gap-1">
            <LineChart size={18} /> Payments
          </div>
          <div className="flex items-center gap-1">
            <FileText size={18} /> Budget
          </div>
          <div className="flex items-center gap-1">
            <CreditCard size={18} /> Card
          </div>
          <Link to="/apply-loan">
            <div className="flex items-center gap-1 cursor-pointer">
              <IndianRupee size={18} /> Apply Loan
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-blue-800">
        <div className="relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center"></span>
        </div>
        <Link to="/user" className='flex items-center gap-1'>
          <User size={20} />
          <div className="hidden md:inline">User ▾</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
