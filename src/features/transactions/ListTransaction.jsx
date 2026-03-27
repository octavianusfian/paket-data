const ListTransaction = ({ transactions }) => {
  return transactions.map((transaction) => (
    <div key={transaction.id}>
      <p>Transaction ID: {transaction.id}</p>
      <p>Package Name: {transaction.packageName}</p>
      <p>Price: {transaction.price}</p>
      <p>Date: {transaction.date}</p>
    </div>
  ));
};
export default ListTransaction;
