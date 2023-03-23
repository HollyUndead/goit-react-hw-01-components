export const FrinedItem = (props) => {
  const { avatar, name, isOnline } = props
  const className = 'status ' + isOnline
  return (
    <li className="friend-item">
      <span className={className}>ㅤ</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
