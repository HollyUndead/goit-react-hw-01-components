export const TransactionsItem = ({ currency, type, amount }) => {
  return (
    <tr>
      <td>{type}</td>
      <td className="amount">{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
