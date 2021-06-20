import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Styling.css";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const moment = require("moment");

function TransactionEditForm(props) {
  let { index } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: "",
    from: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: Number(event.target.value),
    });
  };

  const handleDateChange = (event) => {
    let dateString = moment(event.target.value);
    setTransaction({
      ...transaction,
      [event.target.id]: dateString.format("ll"),
    });
  };

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await axios.get(`${API}/transactions/${index}`);
        setTransaction(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTransaction();
  }, [index]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await props.updateTransaction(transaction, index);
    history.push(`/transactions`);
  };

  let dateToRender = "";
  if (transaction.date) {
    let yourDate = new Date(transaction.date);
    dateToRender = yourDate.toISOString().split("T")[0];
  }

  return (
    <div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          value={dateToRender}
          type="date"
          onChange={handleDateChange}
          placeholder="date"
          required
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          required
          value={transaction.name}
          placeholder="name"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          placeholder="amount"
          onChange={handleNumberChange}
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          type="text"
          onChange={handleTextChange}
          value={transaction.from}
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TransactionEditForm;
