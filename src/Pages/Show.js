import TransactionDetails from "../Components/TransactionDetails";

function Show({ deleteTransaction }) {
  return (
    <div>
      <section>
        <TransactionDetails deleteTransaction={deleteTransaction} />
      </section>
    </div>
  );
}

export default Show;
