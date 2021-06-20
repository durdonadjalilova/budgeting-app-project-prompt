import Transactions from "../Components/Transactions";

function Index({ transactions }) {
  return (
    <div className="Index">
      <Transactions transactions={transactions} />
    </div>
  );
}

export default Index;
