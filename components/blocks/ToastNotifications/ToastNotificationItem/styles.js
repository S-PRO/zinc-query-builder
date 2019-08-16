import styled, { css } from 'styled-components';
import * as colors from '../../../../styles/colors';

export const ToastNotificationStatusColor = styled.div`
  background-color: grey;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-shrink: 0;
  width: 5px;
`;

export const ToastNotificationContent = styled.div`
  flex: 1;
  flex-grow: 1;
  font-size: 12px;
  min-height: 40px;
  padding: 8px 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ToastNotificationCloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 8px 12px;
  transition: opacity 0.3s;
  font-size: 18px;
  line-height: 1;

  &:hover {
    opacity: 0.8;
  }
`;

export const ToastNotificationWrapper = styled.div`
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.12);
  background-color: ${colors.darkWhite};
  display: flex;
  margin-bottom: 8px;
  width: 330px;
  max-width: 100%;
  border-radius: 4px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  ${props => {
    if (props.type === 'success') {
      return css`
        ${ToastNotificationStatusColor} {
          background-color: ${colors.mainGreen};
        }

        ${ToastNotificationCloseButton} {
          color: ${colors.mainGreen};
        }
      `;
    }
    if (props.type === 'warning') {
      return css`
        ${ToastNotificationStatusColor} {
          background-color: ${colors.mainBlue};
        }

        ${ToastNotificationCloseButton} {
          color: ${colors.mainBlue};
        }
      `;
    }
    if (props.type === 'error') {
      return css`
        ${ToastNotificationStatusColor} {
          background-color: ${colors.mainRed};
        }

        ${ToastNotificationCloseButton} {
          color: ${colors.mainRed};
        }
      `;
    }
  }}
`;
