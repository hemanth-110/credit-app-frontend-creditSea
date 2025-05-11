import React from 'react';
import { IndianRupee } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

type LoanStatus = 'Pending' | 'Verified' | 'Rejected' | 'Approved';

interface Loan {
  id: number;
  name: string;
  amount: string;
  date: string;
  time: string;
  status: LoanStatus;
}

const Dashboard = () => {

      const [loans, setLoans] = useState([]);
      const [data, setData] = useState([])
      const [formData, setFormData] = useState({
        name: '',
        amount: '',
        loanTenure: '',
        reason: '',
        employmentStatus: '',
        employmentAddress: ''
      });
      const information = () => loans.map((eachLoan: any) => {
        if(eachLoan.name === "User One") {
            return eachLoan;
            setData(eachLoan)
        }
        
      });

      const [summary, setSummary] = useState<any>({});
    
      const fetchLoans = async () => {
        const res = await axios.get('https://credit-app-backend-creditsea.onrender.com/api/loans');
        setLoans(res.data);
        console.log(res.data)
      };
    
      const fetchSummary = async () => {
        const res = await axios.get('https://credit-app-backend-creditsea.onrender.com/api/summary');
        setSummary(res.data);
      };
    
      useEffect(() => {
        fetchLoans();
        fetchSummary();
        information()
      }, []);

    //   const data = loans.map(eachLoan => eachLoan.)

  const statusColors: Record<LoanStatus, string> = {
    Pending: 'bg-yellow-400 text-white',
    Verified: 'bg-green-600 text-white',
    Rejected: 'bg-red-600 text-white',
    Approved: 'bg-blue-600 text-white',
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Summary */}
      <div className="p-4 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded shadow flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-lime-100 p-4 rounded">
              <IndianRupee className="text-green-700" size={36} />
            </div>
            <div>
              <div className="text-gray-500 text-sm">REPORT</div>
              <div className="text-green-700 text-2xl font-bold">₦ 0.0</div>
            </div>
          </div>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded">Get A Loan</button>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-6 space-x-4">
          <button className="bg-lime-100 text-black px-6 py-2 rounded">Borrow Cash</button>
          <button className="bg-white text-black px-6 py-2 rounded border">Transact</button>
          <button className="bg-white text-black px-6 py-2 rounded border">Deposit Cash</button>
        </div>

        {/* Search */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search for loans"
            className="w-full p-2 border rounded shadow-sm"
          />
        </div>

        {/* Applied Loans Table */}
        <div className="mt-6 bg-white p-6 rounded shadow">
          
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
                    <span className={`px-2 py-1 rounded text-white text-xs ${loan.status === 'pending' ? 'bg-yellow-500' : loan.status === 'approved' ? 'bg-green-600' : loan.status === 'repaid' ? 'bg-blue-500' : 'bg-gray-400'}`}>{loan.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <div>Rows per page: 7</div>
            <div>1–4 of 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
