import TransactionNewForm from "../Components/TransactionNewForm";

function New({ addTransaction }) {
  return (
    <div className="new-item-header">
      <h2>Add a new item</h2>
      <TransactionNewForm addTransaction={addTransaction} />
    </div>
  );
}

export default New;
