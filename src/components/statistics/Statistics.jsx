import PropTypes from 'prop-types';
import {
  StatisticItem,
  StatisticsBox,
  StatisticsList,
  StatisticsTitle,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBox>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage} %</span>
          </StatisticItem>
        ))}
      </StatisticsList>
    </StatisticsBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
