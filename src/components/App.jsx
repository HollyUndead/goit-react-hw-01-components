import { Profile } from './profile/profile';
import { Statistic } from './statistics/statistics';
import { FriendsList } from './friends/friends';
import { TransactionsList } from './transactions/transactionsList';
import user from '../json/user.json';
import statistics from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json'
export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div
      style={{
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#f1f1f1',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistic stats={statistics} />

      <FriendsList friends={friends} />

      <TransactionsList transactions={transactions}/>
    </div>
  );
};
