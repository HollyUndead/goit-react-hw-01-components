import PropTypes from 'prop-types';

import { TransactionsItem } from './transactionItem';
import './transactions.css'

export const TransactionsList = (props) => {
  const {transactions} = props
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TransactionsItem
              type={type}
              amount={amount}
              currency={currency}
              key={id}
            />
          );
        })}
      </tbody>
    </table>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.array
}