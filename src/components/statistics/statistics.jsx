import PropTypes from 'prop-types'

import { StatItem } from './stat-item';
import './statistic.css'
export const Statistic = (props) => {
  const { stats } = props
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(el => {
          return (
            <StatItem label={el.label} percentage={el.percentage} key={el.id}/>
          );
        })}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  stats: PropTypes.array
}