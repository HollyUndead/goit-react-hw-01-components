import { StatItem } from './stat';
import './statistic.css'
export const Statistic = ({ stats }) => {
  let count = 0;
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(el => {
          count++
          return (
            <StatItem label={el.label} percentage={el.percentage} key={el.id} id={count} />
          );
        })}
      </ul>
    </section>
  );
};
