import Transaction from "./Transaction";
import "./Styling.css";

function Transactions({ transactions }) {
  return (
    <div>
      <section>
        <h1 id="total">
          Bank Account Total: $
          {transactions.reduce((total, transaction) => {
            total += transaction.amount;
            return total;
          }, 0)}
        </h1>
        <table className="transactions">
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <Transaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
