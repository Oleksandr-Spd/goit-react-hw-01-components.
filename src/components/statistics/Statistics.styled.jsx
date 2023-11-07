import { getRandomHexColor } from 'components/helpers/randomColor';
import styled from 'styled-components';

export const StatisticsBox = styled.div`
  width: 350px;
  min-height: 70px;
  border: 1px solid blue;
  background-color: ${getRandomHexColor};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 10px;
`;
export const StatisticsTitle = styled.h2`
  text-align: center;
  padding-top: 15px;
  color: #fff;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  height: 70px;
  border: 1px solid;
  background-color: ${getRandomHexColor};
  color: #fff;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
`;
