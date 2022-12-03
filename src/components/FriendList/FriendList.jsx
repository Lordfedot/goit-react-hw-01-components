import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem"
import Box from '../Box'

export function FriendList({friends}) {
    return <Box as="ul" width="25%" mr="auto" ml="auto" bg="bg">
        {friends.map(friend => <FriendListItem
        key= {friend.id}
        name ={friend.name}
        image = {friend.avatar}
        online = {friend.isOnline}
        />)}
    </Box>
}

FriendList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
        image: PropTypes.string,
        online: PropTypes.bool
    }))
  }