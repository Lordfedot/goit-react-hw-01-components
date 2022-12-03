import PropTypes from 'prop-types';
import {Quantity,Label,Avatar,Name,Tag,Location} from './Profile.styled';
import Box from '../Box';


export default function Profile ({ username, tag, location, avatar, stats }) {
    return <Box bg="primary" width="25%" height="25%"
                mr="auto" ml="auto">
<Box textAlign="center">
  <Avatar
    src={avatar}
    alt={username}
  
  />
  <Name>{username}</Name>
  <Tag>@{tag}</Tag>
  <Location>{location}</Location>
</Box>

<Box as="ul" listStyle="none" display="flex" 
    justifyContent="space-between" gap="15px" m="0" padding="15px">
  <li>
    <Label>Followers</Label>
    <Quantity>{stats.followers}</Quantity>
  </li>
  <li>
    <Label>Views</Label>
    <Quantity>{stats.views}</Quantity>
  </li>
  <li>
    <Label>Likes</Label>
    <Quantity>{stats.likes}</Quantity>
  </li>
</Box>
</Box>}  


Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    })
}