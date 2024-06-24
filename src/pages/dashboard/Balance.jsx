import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

const Balance = () => {
  const [totalBalance, setTotalBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [chartData, setChartData] = useState({
    labels: ['Newsletter Subscribers', 'Paid Members'],
    datasets: [
      {
        label: 'Subscribers vs Members',
        data: [0, 0],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  });

  useEffect(() => {
    const fetchBalanceAndTransactions = async () => {
      try {
        const [balanceRes, transactionsRes] = await Promise.all([
          axios.get('/api/totalBalance'),
          axios.get('/api/lastSixTransactions'),
        ]);

        setTotalBalance(balanceRes.data.totalBalance);
        setTransactions(transactionsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBalanceAndTransactions();

    const fetchChartData = async () => {
      try {
        const chartRes = await axios.get('/api/chartData');
        setChartData((prevChartData) => ({
          ...prevChartData,
          datasets: [
            {
              ...prevChartData.datasets[0],
              data: [
                chartRes.data.newsletterSubscribers,
                chartRes.data.paidMembers,
              ],
            },
          ],
        }));
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-bold mt-20">Balance Overview</h1>

      <div className="mt-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Total Remaining Balance: ${totalBalance}
          </h2>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Last Six Transactions:</h2>
          <ul className="list-disc pl-6">
            {transactions.map((transaction, index) => (
              <li key={index}>
                {transaction.description} - ${transaction.amount}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Subscribers vs Members Chart:
          </h2>
          <div style={{ height: '400px', width: '100%' }}>
            <Pie data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
