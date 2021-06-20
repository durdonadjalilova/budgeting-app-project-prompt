import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import "./Styling.css"

import { apiURL } from "../util/apiURL";
const API = apiURL();

function TransactionDetails({ deleteTransaction }) {
  const [transaction, setTransaction] = useState({});
  let { index } = useParams();
  let history = useHistory();

  
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

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactions");
  };

  return (
    <div className="show">
      <p>Name: {transaction.name}</p>
      <p>Amount: ${transaction.amount}</p>
      <p>From: {transaction.from}</p>
      <p>Date: {transaction.date}</p>
      <div>
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(TransactionDetails);
