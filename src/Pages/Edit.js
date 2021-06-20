import TransactionEditForm from "../Components/TransactionEditForm";

function Edit({ updateTransaction, transactions }) {
  return (
    <div>
      <TransactionEditForm
        transactions={transactions}
        updateTransaction={updateTransaction}
      />
    </div>
  );
}

export default Edit;
