import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FriendsItem = styled.li`
  width: 350px;
  min-height: 80px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
export const Avatar = styled.img`
  width: 80px;
  height: auto;
`;

export const Name = styled.p`
  font-size: 30px;
  justify-content: center;
  display: flex;
  margin: 0;
  font-weight: 700;
`;
