// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/calculate-sip', (req, res) => {
    const { monthlyInvestment, annualInterestRate, years } = req.body;
    const n = years * 12; // Total number of months
    const r = (annualInterestRate / 100) / 12; // Monthly interest rate

    const amount = monthlyInvestment * (((Math.pow(1 + r, n)) - 1) / r) * (1 + r);

    res.json({ amount: amount.toFixed(2) });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
