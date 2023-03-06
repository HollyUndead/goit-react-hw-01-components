export const StatItem = ({ label, percentage, id }) => {
  const className = "item id" + id
  return (
    <li className={className}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};
