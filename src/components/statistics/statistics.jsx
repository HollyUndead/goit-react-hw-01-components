import PropTypes from 'prop-types'

import { StatItem } from './stat-item';
import './statistic.css'
export const Statistic = (props) => {
  const { stats, title } = props
  return (
    <section className="statistics">
      {title !== undefined ? (<h2 className="title">{title}</h2>) : <span></span>}

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
  stats: PropTypes.array,
  title: PropTypes.string
}