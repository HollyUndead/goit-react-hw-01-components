import './profile.css'
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="profile-avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="labale">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="labale">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="labale">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
