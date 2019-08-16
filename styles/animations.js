import { keyframes } from 'styled-components';

export const show = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

// Blink animation for loading process

export const blink = keyframes`
    0% {
      opacity: 0.2;
    }
  
    20% {
      opacity: 1;
    }
  
    100% {
      opacity: 0.2;
    }
`;
