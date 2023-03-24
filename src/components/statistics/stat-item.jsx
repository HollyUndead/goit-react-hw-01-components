import PropTypes from 'prop-types'

export const StatItem = (props) => {
  const { label, percentage} = props
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  const liStyle = {
    width: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#ffff',
    backgroundColor: `${color}`,
  }
  return (
    <li
    style={liStyle}
      >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatItem.propTypes ={
  label: PropTypes.string,
  percentage: PropTypes.number
}