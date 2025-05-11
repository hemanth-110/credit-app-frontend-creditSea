import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    // Sidebar
    <aside className="w-64 bg-blue-900 text-white flex flex-col">
      <ul>
        <Link to="/dashboard">
          <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Dashboard</li>
        </Link>
        <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Borrowers</li> 
          </Link>
          <Link to="/loans">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Loans</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Repayments</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Loan Parameters</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Accounting</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Reports</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Collateral</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Access Configuration</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Savings</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Expenses</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">E-signature</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Investor Accounts</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Calendar</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Settings</li> 
          </Link>
          <Link to="/dashboard">
            <li className="hover:bg-blue-800 p-2 rounded cursor-pointer">Sign Out</li> 
          </Link>
      </ul>
    </aside>
  )
}

export default Sidebar
