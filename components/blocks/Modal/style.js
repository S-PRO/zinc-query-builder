import styled from 'styled-components';
import { show } from '../../../styles/animations';

export const ModalWrapper = styled.main`
  position: fixed;
  z-index: 1000;
  left: 0px;
  top: 0px;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  opacity: 0;
  z-index: 99;
  animation: ${show} 0.36s ease both;
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 570px;
  margin: auto;
  padding: 10px;
`;

export const ModalBody = styled.div`
  min-height: 350px;
  max-height: calc(100vh - 20px);
  overflow-y: auto;
  padding: 24px;
  background-color: #fff;
`;

export const ButtonsBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
