import React from 'react'; // eslint-disable-line
import types from 'prop-types';
import { Transition, TransitionGroup } from 'react-transition-group';
import { redirect } from '../../../utils';
import ToastNotificationItem from './ToastNotificationItem';
import {
  ToastNotificationsContainer,
  ToastNotificationsWrapper,
} from './styles';

// Styles for transition animation

const transitionStyles = {
  entering: { transform: 'translateX(100%)' },
  exiting: { transform: 'translateX(100%)' },
  entered: { transform: 'translateX(0)' },
};

// ----------------

const ToastNotifications = props => {
  const { removeToastNotification, notifications, style } = props;

  const clickHandler = item => {
    removeToastNotification(item.id);
    if (item.callBack) item.callBack();
    if (item.url) redirect(item.url);
  };

  return (
    <ToastNotificationsWrapper style={style}>
      <TransitionGroup component={ToastNotificationsContainer}>
        {notifications && notifications.length
          ? notifications.map(item => (
              <Transition key={item.id} timeout={{ enter: 0, exit: 300 }}>
                {state => (
                  <ToastNotificationItem
                    timeoutCallBack={() => removeToastNotification(item.id)}
                    onClick={() => clickHandler(item)}
                    delay={item.delay}
                    style={transitionStyles[state]}
                    item={item}
                  />
                )}
              </Transition>
            ))
          : null}
      </TransitionGroup>
    </ToastNotificationsWrapper>
  );
};

// Type of props

ToastNotifications.propTypes = {
  removeToastNotification: types.func.isRequired,
  notifications: types.array.isRequired,
  style: types.object,
};

export default ToastNotifications;
