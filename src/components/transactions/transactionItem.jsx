export const TransactionsItem = (props) => {
  const { currency, type, amount } = props
  return (
    <tr>
      <td>{type}</td>
      <td className="amount">{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
