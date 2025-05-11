import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';

const ApplyLoan = () => {
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios.post('https://credit-app-backend-creditsea.onrender.com/api/loans', {
      ...formData,
      amount: parseFloat(formData.amount),
      loanTenure: parseInt(formData.loanTenure)
    });
    fetchLoans();
    fetchSummary();
    console.log(formData)
    setFormData({
      name: '',
      amount: '',
      loanTenure: '',
      reason: '',
      employmentStatus: '',
      employmentAddress: ''
  })
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">Apply for a Loan</h1>
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 bg-white p-4 rounded shadow">
      <input className="p-2 border rounded" placeholder="Name" onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input className="p-2 border rounded" placeholder="Amount" onChange={e => setFormData({ ...formData, amount: e.target.value })} />
      <input className="p-2 border rounded" placeholder="Tenure" onChange={e => setFormData({ ...formData, loanTenure: e.target.value })} />
      <input className="p-2 border rounded" placeholder="Reason" onChange={e => setFormData({ ...formData, reason: e.target.value })} />
      <input className="p-2 border rounded" placeholder="Employment Status" onChange={e => setFormData({ ...formData, employmentStatus: e.target.value })} />
      <input className="p-2 border rounded" placeholder="Employment Address" onChange={e => setFormData({ ...formData, employmentAddress: e.target.value })} />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Submit</button>
    </form>

    {/* <h2 className="text-xl font-semibold mt-8 mb-2">Dashboard Summary</h2>
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-gray-100 p-4 rounded">Loans: {summary.totalLoans}</div>
      <div className="bg-gray-100 p-4 rounded">Borrowers: {summary.totalBorrowers}</div>
      <div className="bg-gray-100 p-4 rounded">Disbursed: {summary.totalCashDisbursed}</div>
    </div> */}

    {/* <h2 className="text-xl font-semibold mb-2">Recent Loans</h2>
    <ul className="space-y-2">
      {loans.map((loan: any) => (
        <li key={loan._id} className="bg-white p-4 rounded shadow">
          {loan.name} - {loan.amount} - <span className="capitalize">{loan.status}</span>
        </li>
      ))}
    </ul> */}
  </div>
  )
}

export default ApplyLoan
