import React from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { Header, ToastNotifications, Modal, Sidebar } from '../../';
import { Main, LayoutWrapper } from './style';
import { GlobalStyle } from '../../../styles';
import { logoutUser } from '../../../store/actions/userActions';
import {
  removeToastNotification,
  hideConfirmationModal,
  confirmAction,
  rejectAction,
} from '../../../store/actions/uiActions';

// ----------------

const PageLayout = props => {
  const {
    removeToastNotification,
    hideConfirmationModal,
    confirmationModal,
    confirmAction,
    notifications,
    rejectAction,
    logoutUser,
    children,
    user,
  } = props;

  const buttonsBlock = () => (
    <>
      <button onClick={confirmAction}>yes</button>
      <button onClick={rejectAction}>no</button>
    </>
  );
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header user={user} onLogout={logoutUser}></Header>
      <LayoutWrapper>
        {user && <Sidebar></Sidebar>}
        <Main user={user}>{children}</Main>
      </LayoutWrapper>
      <ToastNotifications
        removeToastNotification={removeToastNotification}
        notifications={notifications}
      />
      {confirmationModal && (
        <Modal buttonsBlock={buttonsBlock} onClose={hideConfirmationModal}>
          {confirmationModal.message}
        </Modal>
      )}
    </>
  );
};

export default connect(
  state => ({
    user: state.user.profile,
    notifications: state.ui.toastNotifications,
    confirmationModal: state.ui.confirmationModal,
  }),
  {
    removeToastNotification,
    hideConfirmationModal,
    confirmAction,
    rejectAction,
    logoutUser,
  },
)(PageLayout);
