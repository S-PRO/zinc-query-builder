import React from 'react'; // eslint-disable-line
import types from 'prop-types';
import useTimeout from '../../../../hooks/useTimeout';
import {
  ToastNotificationCloseButton,
  ToastNotificationStatusColor,
  ToastNotificationContent,
  ToastNotificationWrapper,
} from './styles';

// ----------------

const ToastNotificationItem = props => {
  const { item, onClick, style, timeoutCallBack, delay } = props;
  useTimeout(timeoutCallBack, delay);
  console.log(item);
  return (
    <ToastNotificationWrapper type={item.type} onClick={onClick} style={style}>
      <ToastNotificationStatusColor />
      <ToastNotificationContent>{item.message}</ToastNotificationContent>
      <ToastNotificationCloseButton>×</ToastNotificationCloseButton>
    </ToastNotificationWrapper>
  );
};

// Type of props

ToastNotificationItem.propTypes = {
  timeoutCallBack: types.func.isRequired,
  onClick: types.func,
  delay: types.number,
  style: types.object,
  item: types.object.isRequired,
};

// Default value for props

ToastNotificationItem.defaultProps = {
  delay: 4000,
};

export default ToastNotificationItem;
