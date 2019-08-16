import styled from 'styled-components';

export const ToastNotificationsWrapper = styled.div`
  box-sizing: border-box;
  max-height: 100%;
  overflow-x: hidden;
  pointer-events: auto;
  position: fixed;
  z-index: 100;
  bottom: 0px;
  right: 0px;
  max-width: 100%;
  z-index: 999;

  @media (max-width: 768px), (orientation: portrait) {
    top: 0;
    bottom: initial;
    max-height: 175px;
    width: 100%;
  }
`;

export const ToastNotificationsContainer = styled.div`
  padding: 8px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column-reverse;

  @media (max-width: 768px), (orientation: portrait) {
    align-items: center;
  }
`;
