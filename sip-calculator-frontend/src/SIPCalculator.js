// src/SIPCalculator.js
import React, { useState } from 'react';
import axios from 'axios';

const SIPCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState('');
    const [annualInterestRate, setAnnualInterestRate] = useState('');
    const [years, setYears] = useState('');
    const [result, setResult] = useState(null);

    const calculateSIP = async () => {
        try {
            const response = await axios.post('http://localhost:5000/calculate-sip', {
                monthlyInvestment: parseFloat(monthlyInvestment),
                annualInterestRate: parseFloat(annualInterestRate),
                years: parseFloat(years),
            });
            setResult(response.data.amount);
        } catch (error) {
            console.error('Error calculating SIP:', error);
        }
    };

    return (
        <div>
            <h1>SIP Calculator</h1>
            <input
                type="number"
                placeholder="Monthly Investment"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
            />
            <input
                type="number"
                placeholder="Annual Interest Rate (%)"
                value={annualInterestRate}
                onChange={(e) => setAnnualInterestRate(e.target.value)}
            />
            <input
                type="number"
                placeholder="Duration (Years)"
                value={years}
                onChange={(e) => setYears(e.target.value)}
            />
            <button onClick={calculateSIP}>Calculate</button>
            {result && (
                <div>
                    <h2>Estimated SIP Amount: ₹{result}</h2>
                </div>
            )}
        </div>
    );
};

export default SIPCalculator;
