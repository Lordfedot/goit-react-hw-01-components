import PropTypes from 'prop-types';
import {Item} from 'components/TransactionItem/TransactionItem'
import {Table,Head,HeadBlock} from "./TransactionHistory.styled";

export function TransactionHistory({items}){
    return (
        <Table>
  <Head>
    <tr>
      <HeadBlock>Type</HeadBlock>
      <HeadBlock>Amount</HeadBlock>
      <HeadBlock>Currency</HeadBlock>
    </tr>
  </Head>

  <tbody>
    {items.map(item => <Item
        key={item.id}
        type={item.type}
        amount={item.amount}
        currency={item.currency}
    />)}
  </tbody>
</Table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }))
}