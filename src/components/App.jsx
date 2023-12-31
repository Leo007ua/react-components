import { Profile } from 'components/Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from 'FilesJson/user.json';
import data from 'FilesJson/data.json';
import friends from 'FilesJson/friends.json';
import transactions from 'FilesJson/transactions.json';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        flexDirection: 'column',
        flexwrap: 'nowrap',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
