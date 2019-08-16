import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import types from 'prop-types';
import {
  ModalWrapper,
  ModalContainer,
  ModalBody,
  ButtonsBlockWrapper,
} from './style';

/* global document */

// ----------------

const Modal = props => {
  const { children, onClose, style, buttonsBlock: ButtonsBlock } = props;

  return ReactDOM.createPortal(
    <ModalWrapper onClick={onClose}>
      <ModalContainer style={style} onClick={e => e.stopPropagation()}>
        <ModalBody>
          {children}
          {ButtonsBlock && (
            <ButtonsBlockWrapper>
              <ButtonsBlock />
            </ButtonsBlockWrapper>
          )}
        </ModalBody>
      </ModalContainer>
    </ModalWrapper>,
    document.body,
  );
};

// Type of props

Modal.propTypes = {
  popupTitle: types.string,
  children: types.node.isRequired,
  onClose: types.func.isRequired,
  style: types.object,
};

// Default value for props

Modal.defaultProps = {
  className: '',
};

export default Modal;
