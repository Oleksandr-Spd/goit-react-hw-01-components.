import PropTypes from 'prop-types';
import { Avatar, FriendsItem, Name, Status } from './FriendList.styled';
import { colorStatus } from 'components/helpers/colorStatus';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <Status style={{ backgroundColor: colorStatus(isOnline) }}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
