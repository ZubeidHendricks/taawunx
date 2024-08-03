import { useState } from 'react';
import axios from 'axios';

export default function Payments() {
  const [paymentData, setPaymentData] = useState({ amount: '', recipient: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://127.0.0.1:5000/payments', paymentData);
    console.log(response.data);
  };

  return (
    <div>
      <h1>Make a Payment</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={paymentData.amount}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="recipient"
          placeholder="Recipient"
          value={paymentData.recipient}
          onChange={handleInputChange}
        />
        <button type="submit">Make Payment</button>
      </form>
    </div>
  );
}
