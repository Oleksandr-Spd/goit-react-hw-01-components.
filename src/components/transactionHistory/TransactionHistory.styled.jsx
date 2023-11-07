import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  border: 1px solid grey;
`;
export const ThHead = styled.th`
  border: 1px solid grey;
  background-color: #f77b7b;
  font-size: 25px;
  font-weight: 500;
  padding: 10px;
`;

export const Tbody = styled.tbody`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
`;

export const Td = styled.td`
  padding: 10px;
`;

export const Tr = styled.tr`
  background-color: #f1afc0;

  &:nth-child(2n + 1) {
    background-color: #fff7f7;
  }
`;
