import { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Styling.css";
const moment = require("moment");

function TransactionNewForm({ addTransaction, history }) {
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

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    addTransaction(transaction);
    history.push("/transactions");
  };

  let dateToRender = "";
  if (transaction.date) {
    let yourDate = new Date(transaction.date);
    dateToRender = yourDate.toISOString().split("T")[0];
  }

  return (
    <div>
      <form className="new-form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="date">
          Date
        </label>
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
          name="category"
          value={transaction.amount}
          placeholder="amount"
          onChange={handleNumberChange}
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          type="text"
          placeholder="from"
          onChange={handleTextChange}
          value={transaction.from}
        />
        <br />
        <button type="submit">CREATE NEW ITEM</button>
      </form>
    </div>
  );
}

export default withRouter(TransactionNewForm);
