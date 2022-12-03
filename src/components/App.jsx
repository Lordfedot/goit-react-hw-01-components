import Statistics from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'
import Profile from './Profile/Profile'
import user from 'user.json'
import data from 'data.json'
import friends from 'friends.json'
import transactionData from 'transactions.json'

export const App = () => {
  return (
    <>
    <Profile
    username={user.username}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats = {user.stats}
    />
    <Statistics
    title = {"Upload stats"}
    stats = {data}
    />
    <FriendList
    friends = {friends}
    />
    <TransactionHistory
    items = {transactionData}/>
    </>
    
    
    

  );
};
