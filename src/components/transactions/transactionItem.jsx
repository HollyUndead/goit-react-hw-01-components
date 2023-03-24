import PropTypes from 'prop-types'

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

TransactionsItem.propTypes = {
  currency: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string
}