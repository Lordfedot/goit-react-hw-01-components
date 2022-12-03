import { Status } from './FriendListItem.styled'
import Box from 'components/Box'

export function FriendListItem({name,image,online}){
    return (
  <Box as="li" display="flex" gap="10px" alignItems="center">
    <Status isOnline={online}></Status>
    <img src={image} alt="User avatar" width="48" />
    <p>{name}</p>
  </Box>)
}