import PropTypes from 'prop-types';
import { Table, Tbody, Td, ThHead, Tr } from './TransactionHistory.styled';

export const TransactionsHistory = ({ item }) => {
  return (
    <Table>
      <thead>
        <tr>
          <ThHead>Type</ThHead>
          <ThHead>Amount</ThHead>
          <ThHead>Currency</ThHead>
        </tr>
      </thead>

      <Tbody>
        {item.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
TransactionsHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
