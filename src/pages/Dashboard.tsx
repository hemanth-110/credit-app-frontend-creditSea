import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [loans, setLoans] = useState([]);
      const [formData, setFormData] = useState({
        name: '',
        amount: '',
        loanTenure: '',
        reason: '',
        employmentStatus: '',
        employmentAddress: ''
      });
      const [summary, setSummary] = useState<any>({});
    
      const fetchLoans = async () => {
        const res = await axios.get('https://credit-app-backend-creditsea.onrender.com/api/loans');
        setLoans(res.data);
      };
    
      const fetchSummary = async () => {
        const res = await axios.get('https://credit-app-backend-creditsea.onrender.com/api/summary');
        setSummary(res.data);
      };
    
      useEffect(() => {
        fetchLoans();
        fetchSummary();
      }, []);
  return (
    <div>
      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <header className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-lg font-semibold text-blue-800">Dashboard &gt; Loans</h2>
        </header>

        {/* Dashboard Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-blue-700 text-xl font-bold">{summary.totalLoans}</div>
            <div className="text-sm">LOANS</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-blue-700 text-xl font-bold">{summary.totalBorrowers}</div>
            <div className="text-sm">BORROWERS</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-blue-700 text-xl font-bold">{summary.totalCashDisbursed}</div>
            <div className="text-sm">CASH DISBURSED</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-blue-700 text-xl font-bold">450,000</div>
            <div className="text-sm">SAVINGS</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-blue-700 text-xl font-bold">{summary.repaidLoans}</div>
            <div className="text-sm">REPAID LOANS</div>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <div className="text-blue-700 text-xl font-bold">1,000,000</div>
            <div className="text-sm">CASH RECEIVED</div>
          </div>
        </div>

        {/* Applied Loans */}
        <div className="bg-white rounded shadow p-4">
          <h3 className="text-blue-800 font-semibold text-lg mb-4">Applied Loans</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Customer Name</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Date</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan: any) => (
                <tr key={loan._id} className="border-b hover:bg-gray-50">
                  <td className="py-2">{loan.name}</td>
                  <td className="py-2">{loan.amount}</td>
                  <td className="py-2">{new Date(loan.dateApplied).toLocaleDateString()}</td>
                  <td className="py-2">
                    <span className={`px-2 py-1 rounded text-white text-xs ${loan.status === 'pending' ? 'bg-yellow-500' : loan.status === 'approved' ? 'bg-green-800' : loan.status === 'repaid' ? 'bg-blue-500' : ''}`}>{loan.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
