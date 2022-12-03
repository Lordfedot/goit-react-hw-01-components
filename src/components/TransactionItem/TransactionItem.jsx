import {BodyBlock,BodyRow} from './TransactionItem.styled'

export function Item({type,amount,currency}) {
    return (
    <BodyRow>
      <BodyBlock>{type}</BodyBlock>
      <BodyBlock>{amount}</BodyBlock>
      <BodyBlock>{currency}</BodyBlock>
    </BodyRow>
    )
}