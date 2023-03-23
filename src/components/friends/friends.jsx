import { FrinedItem } from './friendItem';
import './friendsList.css'

export const FriendsList = (props) => {
  const { friends } = props
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FrinedItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};
