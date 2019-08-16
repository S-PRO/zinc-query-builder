import styled, { css } from 'styled-components';
import * as colors from '../../../styles/colors';
import { blink } from '../../../styles/animations';

export const LoaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

${({ position }) => {
  if (position === 'left') {
    return css`
      justify-content: flex-start;
    `;
  }
  if (position === 'center') {
    return css`
      justify-content: center;
    `;
  }
  if (position === 'right') {
    return css`
      justify-content: flex-end;
    `;
  }
}}

${({ color }) => {
  if (color === 'white') {
    return css`
      span {
        background-color: #fff;
      }
    `;
  }
  if (color === 'grey') {
    return css`
      span {
        background-color: #dfdfdf;
      }
    `;
  }
  if (color === 'lightBlue') {
    return css`
      span {
        background-color: ${colors.lightBlue};
      }
    `;
  }
}}


${({ size }) => {
  if (size === 'small') {
    return css`
      span {
        width: 6px;
        height: 6px;
        margin: 2px;
      }
    `;
  }
  if (size === 'normal') {
    return css`
      span {
        width: 8px;
        height: 8px;
        margin: 3px;
      }
    `;
  }
  if (size === 'big') {
    return css`
      span {
        width: 12px;
        height: 12px;
        margin: 4px;
      }
    `;
  }
}}

  span {
        display: block;
        border-radius: 50%;
        animation-name: ${blink};
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
      }
  
      span:nth-child(2) {
        animation-delay: 0.1s;
      }
  
      span:nth-child(3) {
        animation-delay: 0.2s;
      }
`;
